import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions} from "next-auth"  
import  CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/libs/prismadb";
import NextAuth from 'next-auth/next';
import bcrypt from 'bcrypt';
 


export const authOptions:AuthOptions = {
   adapter:PrismaAdapter(prisma),
    providers:[
         
        CredentialsProvider({
             name:"credentials",
             credentials:{
                email:{label:"email" ,type:'text'},
                password:{label:"password" ,type:'password'}
             },
             async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                     throw new Error('Invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                })
                if(!user || !user?.hashpassword){
                    throw new Error('Invalid credentials');  
                }
        
        const isPassword =  await bcrypt.compare(credentials?.password , user?.hashpassword)
        
         if(!isPassword){
            throw new Error('Invalid credentials');  
         }
        
            return user;
                   
                  }
                })
     
    
    ],
    pages:{
        signIn:'/login'
    },
    debug:process.env.NODE_ENV =='development',
    session:{
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
     
}



export  default NextAuth(authOptions);