
declare module "next-auth" {
  interface Session {
    user: {
      id: number; 
      name: string | null;
      email: string | null;
      image?: string | null;
    };
  }
}

import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { API } from "./Api";

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const { data: users } = await axios.get(`${API}/users/data`);
        const user = users.find(
          (user: User) => user.email === credentials.email
        );

        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = Number(token.id)
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id, 
          name: token.name,
          email: token.email,
        },
      };
    },
  },
};
