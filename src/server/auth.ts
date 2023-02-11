import {
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../env/server.mjs";

/**
 * Module augmentation for `next-auth` types.
 * Custom fields to models
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    id: any | unknown; // any until i find out what to give it as a type
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.user.image = null; // there was some stupid error with the image not existing
      }

      return session;
    }
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username..." },
        password: { label: "Password", type: "password" }
      },

      authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "Rohak", email: "rohak@rework.com" }
  
        if (credentials?.username === "Rohak", credentials?.password === "Rohak123") {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    })

    // add more providers here...
  ],
};