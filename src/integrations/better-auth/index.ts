import { betterAuth } from "better-auth";
import { serverUrl } from "../../utils/environment";
import (serverUrl)
export const betterAuthClient = betterAuth({
 baseUrl: serverUrl,
 basePath: "/authintecation",
 user:{
    modelName: "User",
 },
 account:{
    modelName: "Account",
 },
 session:{
    modelName: "Session",
 }
 
})  