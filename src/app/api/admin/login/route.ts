import { NextResponse } from "next/server";
import prisma from "../../../../../src/lib/prisma";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { SHA256 } from "crypto-js";
const createToken=async (email:string, userId:number)=>{
    return await new SignJWT({email,userId,isAdmin:true}).setProtectedHeader({alg:"HS256"}).setExpirationTime("48h").sign(new TextEncoder().encode(process.env.JWT_KEY as string));
}

export async function POST(request: Request) {
    // console.log(request.headers);
    try{ 
        const{email, password} = await request.json();
        if(!email||!password){
            return NextResponse.json({message:"Please provide email and password"}, {status: 400});
        }   
    const user=await prisma.admin.findUnique({where:{email,password:SHA256(password).toString() }})
    console.log({password:SHA256(password).toString()})
    if(!user){
        return NextResponse.json({message:"Invalid credentials"}, {status: 401});
    }
    else{
        const token=await createToken(user.email,user.id);
        cookies().set("access token", token);
        return NextResponse.json({
            userInfo:{
                id:user.id,
                email:user.email,
            }
        });
    }
    }
    catch(error){
        return NextResponse.json({message:"Something went wrong"}, {status: 500});
    }
}