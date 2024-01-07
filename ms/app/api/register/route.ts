 
 import bcrypt from "bcrypt"
import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb"
 
export async function POST(
    request :Request
) {


    try {
       
    const body = await request.json();


    const {
    hospital_name,
    email,
    register_no,
    city,
    pincode,
    address,
    emergency_ward_no,
    phone,
    no_ambulance,
    state,
    password, 
    } = body;

 const hashpassword = await bcrypt.hash(password,12);

    const emailexist = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
 
if(emailexist){
 throw new Error("Email alerady exists");
}

    const user = await prisma.user.create({
        data:{
             name:hospital_name,
            email,
            city,
            pincode,
            address,
            registerNumber:register_no, 
            emergencywardno: emergency_ward_no,
            phone,
            ambulances:no_ambulance,
            state,
            hashpassword  
        }
    })



    return NextResponse.json(user , {status:200});
 
    } catch (error) {
     throw new Error("Server Error");
    }
} 