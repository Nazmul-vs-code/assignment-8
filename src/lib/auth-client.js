import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    
    baseURL: "https://assignment-8-lime.vercel.app"
})

export const { signIn, signUp, signOut, useSession  } = authClient;