import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/authOptions'

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const refreshToken = session.user.refreshToken

    if (!refreshToken) {
      // Nothing to revoke on provider side; instruct client to sign out
      return NextResponse.json({ ok: true, revoked: false, message: 'No provider refresh token found. Signed out client-only.' })
    }

    // Revoke the refresh token at Google's revocation endpoint
    const revokeUrl = 'https://oauth2.googleapis.com/revoke'
    const params = new URLSearchParams({ token: refreshToken })

    const resp = await fetch(revokeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    if (resp.ok) {
      return NextResponse.json({ ok: true, revoked: true })
    }

    const text = await resp.text().catch(() => '')
    return NextResponse.json({ ok: false, revoked: false, status: resp.status, body: text }, { status: 500 })
  } catch (err) {
    console.error('Account delete error:', err)
    return NextResponse.json({ error: err?.message || 'Failed to revoke' }, { status: 500 })
  }
}
