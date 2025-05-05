import { betterAuth } from "better-auth";
import { serverUrl, webClientUrl } from "../../utils/environment";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prismaClient } from "../prisma/prisma"; // Adjusted the path to match the correct location

export const betterAuthClient = betterAuth({
  baseURL: serverUrl,
  basePath: "/authentications",
  database: prismaAdapter(prismaClient, {
    provider: "postgresql",
  }),
  trustedOrigins: [webClientUrl],
  emailAndPassword: {
    enabled: true,
  },
  user: {
    modelName: "User",
  },
  account: {
    modelName: "Account",
  },
  session: {
    modelName: "Session",
  },
  verification: {
    modelName: "Verification",
  },
});