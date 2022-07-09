import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

enum UserRole {
  seller = "seller",
  buyer = "buyer",
}

export default NextAuth({
  jwt: {
    maxAge: 10,
  },
  callbacks: {
    async session({ session, token }) {
      session.userRole = token.userRole;
      session.username = token.username;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userRole = user?.userRole;
        token.username = user?.username;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        role: { label: "Role" },
      },
      async authorize(credentials, _req) {
        const loginType = credentials?.role;
        const username = credentials?.username;
        const password = credentials?.password;

        if (loginType === UserRole.seller) {
          if (username === "SELLER" && password === "seller") {
            return {
              username,
              userRole: UserRole.seller,
            };
          }
        }

        if (loginType === UserRole.buyer) {
          if (username === "BUYER" && password === "buyer") {
            return {
              username,
              userRole: UserRole.buyer,
            };
          }
        }

        return null;
      },
    }),
  ],
});
