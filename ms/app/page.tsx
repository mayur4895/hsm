 

import * as React from "react"
 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
 
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { signOut } from "next-auth/react"
 import prisma from "@/app/libs/prismadb"
 

  

export async function  Home() {
  
 
 const hospitals = await prisma.user.findMany();
 console.log(hospitals);
 
 
 
 
  return (
    <div className="flex flex-col gap-5 justify-center items-center" >
<header className="w-full  shadow-md py-3 items-center h-auto flex justify-between px-6">
  <div className="">
      LOGO.
  </div>
  <div className="flex flex-row gap-5">
  <Avatar>
  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/64/64572.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar> 
    
  </div>
</header>
 <div className="text-3xl text-gray-800 font-semibold">Hospital Registeration</div>
 <div className="w-[90%]">
 <Table>
  <TableCaption>A list of your recent registeration hospital.</TableCaption>
  <TableHeader>
    <TableRow className="border">
    
      <TableHead className="text-left whitespace-nowrap">NO</TableHead>
      <TableHead className="text-left whitespace-nowrap">Date & Time</TableHead> 
      <TableHead className="text-left whitespace-nowrap">Hospital Name</TableHead>
      <TableHead className="text-left whitespace-nowrap">Email</TableHead>
      <TableHead className="text-left whitespace-nowrap">Address</TableHead>
      <TableHead className="text-left whitespace-nowrap">Phone</TableHead>
 
      <TableHead>City</TableHead>
      <TableHead className="text-left whitespace-nowrap">State</TableHead>
      <TableHead className="text-left whitespace-nowrap">Pincode</TableHead>
      <TableHead className="text-left whitespace-nowrap">Hospital Registeratiom Date</TableHead>
      <TableHead className="text-left whitespace-nowrap">Hospital Registeration Number</TableHead>
      <TableHead className="text-left whitespace-nowrap">Hospital Registeration photo</TableHead>
      <TableHead className="text-left whitespace-nowrap">Emergency ward no</TableHead>
      <TableHead className="text-left whitespace-nowrap">no of ambulances</TableHead>
      <TableHead className="text-left whitespace-nowrap">status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="border">{
    
    hospitals.map((cur,index)=>{
      return(
      <TableRow key={cur.id}>
        <TableCell className="text-left whitespace-nowrap">{index +1 }</TableCell>
        <TableCell className="text-left whitespace-nowrap">INV001</TableCell>
        <TableCell  className="text-left whitespace-nowrap">{cur?.name}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.email}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.address}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.phone}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.city}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.state}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.pincode}</TableCell>
        <TableCell className="text-left whitespace-nowrap">date</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.registerNumber}</TableCell>
        <TableCell className="text-left whitespace-nowrap">file</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.emergencywardno}</TableCell>
        <TableCell className="text-left whitespace-nowrap">{cur.ambulances}</TableCell>
        <TableCell className="text-left whitespace-nowrap">
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Active" className="bg-green-100 border-green-500 text-green-600">Active</SelectItem>
    <SelectItem value="Inactive"  className="bg-rose-100 border-rose-500 text-rose-600">Inactive</SelectItem>
 
  </SelectContent>
</Select> 

        </TableCell>
      </TableRow>
      )
    })

    }
     
   
  </TableBody>
</Table>

 </div>

    </div>
  )
}


export default Home;