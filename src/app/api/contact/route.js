import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// This API sends contact messages via SMTP or Gmail OAuth2.
// Env vars supported:
// - SMTP_HOST (optional, default smtp.gmail.com)
// - SMTP_PORT (optional, default 587)
// - SMTP_USER (required unless using OAuth2 service account)
// - SMTP_PASS (optional if using SMTP basic auth)
// - SMTP_FROM (optional, defaults to SMTP_USER)
// - CONTACT_TO_EMAIL (optional recipient)
// OAuth2 (Gmail) vars (optional, recommended instead of SMTP_PASS for Gmail):
// - OAUTH_CLIENT_ID
// - OAUTH_CLIENT_SECRET
// - OAUTH_REFRESH_TOKEN
// If using OAuth2 you must also set SMTP_USER to the account used to send.

// NOTE: To use OAuth2 with Gmail you need to create credentials and obtain a
// refresh token. See README or Google OAuth2 docs. If you don't have OAuth2,
// use SMTP_USER + SMTP_PASS (App Password for Gmail with 2FA) instead.

async function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com"
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  // Prefer OAuth2 if refresh token and client creds are present
  const clientId = process.env.OAUTH_CLIENT_ID
  const clientSecret = process.env.OAUTH_CLIENT_SECRET
  const refreshToken = process.env.OAUTH_REFRESH_TOKEN

  if (user && clientId && clientSecret && refreshToken) {
    // Lazy-import googleapis to avoid throwing if not installed until needed
    try {
      const { google } = await import('googleapis')
      const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret)
      oAuth2Client.setCredentials({ refresh_token: refreshToken })
      const accessTokenResponse = await oAuth2Client.getAccessToken()
      const accessToken = accessTokenResponse?.token || accessTokenResponse

      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user,
          clientId,
          clientSecret,
          refreshToken,
          accessToken,
        },
      })
    } catch (err) {
      // If googleapis isn't installed or something fails, fall back to SMTP basic if possible
      console.error('Failed to create OAuth2 transporter, falling back to SMTP if possible:', err)
    }
  }

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })
  }

  return null
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const user = process.env.SMTP_USER
    const from = process.env.SMTP_FROM || user
    const to = process.env.CONTACT_TO_EMAIL || user

    const transporter = await createTransporter()

    if (!transporter) {
      console.error('No email transporter available. Check SMTP or OAuth2 env vars.')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const subject = `New message from ${name} <${email}>`
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, "<br />")}</p>`

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    })

    // Include nodemailer response for diagnostics (safe to return during dev)
    return NextResponse.json({ ok: true, messageId: info.messageId, response: info.response })
  } catch (err) {
    console.error("Contact API error:", err)
    // In dev it's useful to return the error message. In production consider hiding details.
    return NextResponse.json({ error: err?.message || 'Failed to send message' }, { status: 500 })
  }
}
