import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId :process.env.GITHUB_ID as string,
            clientSecret :process.env.GITHUB_SECRET as string
        }),

        GoogleProvider({
            clientId :process.env.GOOGLE_ID as string,
            clientSecret :process.env.GOOGLE_SECRET as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials:{
                "full name" : {},
                "email" : {},
                "password": {},
            },
            async authorize(credentials,req) {
                return null   
            }
        })
    ],
    pages: {
        signIn : '/auth/signin'
    },
    

}