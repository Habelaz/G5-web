import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
        GithubProvider({
            clientId :process.env.GITHUB_ID as string,
            clientSecret :process.env.GITHUB_SECRET as string
        }),

        GoogleProvider({
            clientId :process.env.GOOGLE_CLIENT_ID as string,
            clientSecret :process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials:{
                "Full name" : {},
                "email" : {},
                "password": {},
            },
            async authorize(credentials,req) {

                
                return null   
            }
        })

    ]
})

export {handler as GET, handler as POST}