import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          scope: 'openid email profile https://www.googleapis.com/auth/gmail.send',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  pages: {
    signIn: '/contact',
  },
  callbacks: {
    // Persist tokens on the JWT so they can be used server-side (e.g. to revoke)
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        // refresh_token is only returned on the first authorization
        if (account.refresh_token) token.refreshToken = account.refresh_token
        token.expires_at = account.expires_at || null
      }
      return token
    },
    async session({ session, token }) {
      // Expose token fields to the session object on the server-side only
      session.user = session.user || {}
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };