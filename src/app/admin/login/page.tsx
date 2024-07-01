"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {Architects_Daughter} from "next/font/google";
import {Button, Card,CardBody,CardFooter,CardHeader, Input} from "@nextui-org/react"
import { apiClient } from '@/lib';
import ADMIN_API_ROUTES from '@/utils';
import { useAppStore } from '@/store';
import { useRouter } from 'next/navigation';
// import router from 'next/router';

const fontype = Architects_Daughter({subsets:["latin"],weight:"400",style:"normal"});
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {setUserInfo}=useAppStore();
    const router=useRouter();
    const handleLogin=async ()=>{
      try{
         const response=await apiClient.post(ADMIN_API_ROUTES.LOGIN,{email,password});
         if(response.data.userInfo){
            setUserInfo(response.data.userInfo);
            router.push("/admin");
      }}
      catch(error){
        console.log(error);
      }
    };
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url("https://img.freepik.com/premium-photo/night-landscape-dark-forest-river_21085-1473.jpg?w=1060")`}}>
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl"></div>
    <Card className="shadow-2xl bg-opacity-20 w-[400px]">
     <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
        <div className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} className="cursor-pointer"/>
             <span className="text-xl uppercase font-medium italic text-[#951]">
                <span className={fontype.className}>
                    ...Traveller Admin Login...
                </span>
             </span>
        </div>
     </CardHeader>
     <CardBody className="flex flex-col items-center w-full justify-center">
        <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            color="danger"/>

            <Input placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            color="danger"/>
        </div>
     </CardBody>
     <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <Button color="danger" variant="shadow" className="w-full capitalize" size='lg' onClick={handleLogin}>Login</Button>
     </CardFooter>
    </Card>    
    Login</div>
   )
}

export default Login;