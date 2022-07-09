import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req: _req, token }) => {
      if (token) {
        if (token.userRole === "seller") {
          return true;
        }
      }
      return false;
    },
  },
});

export const config = { matcher: ["/secret"] };
