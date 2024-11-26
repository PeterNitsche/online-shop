import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginDocument } from "./__generated__/graphql";
import { getClient } from "./lib/client";

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isOnProductDetailPage = nextUrl.pathname.startsWith("/product/");
      return isOnProductDetailPage ? !!auth?.user : true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any;
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }
        const { data, errors } = await getClient().mutate({
          mutation: LoginDocument,
          variables: {
            email,
            password,
          },
        });

        if (errors && errors.length > 0) {
          return null;
        }

        if (!data) {
          return null;
        }

        const {
          userLogin: { accessToken, authToken },
        } = data;

        return accessToken && authToken
          ? {
              accessToken: accessToken,
              authToken: authToken,
            }
          : null;
      },
    }),
  ],
} satisfies NextAuthConfig;
