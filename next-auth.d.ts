import "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    authToken: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
