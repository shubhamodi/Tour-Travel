// import { Prisma } from "@prisma/client";
// import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import { PrismaClient } from '@prisma/client/edge'
// const prisma = newPrismaClient();
import prisma from "@/lib/prisma" ;
// const prisma =PrismaClient;
export async function POST(request:Request){
    try{
        const {url,jobType}=await request.json();
        const response = await prisma.jobs.create({data:{url,jobType}});
        return NextResponse.json({jobCreated:true},{status:201});
    }
    catch(error){
        return NextResponse.json({message:"Something went wrong"}, {status: 500});
    }
}