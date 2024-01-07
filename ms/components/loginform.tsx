'use client'
 
  import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
 
import {  useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { useToast } from "./ui/use-toast"
 
 



const formSchema = z.object({
    hospital_name: z.string().min(1 ,{
        message:"required"
    }).max(50),
    email:z.string().email(),
 
    password:z.string().min(5,{
        message:"password must be 5 charcters!"
    }),
    uid:z.string().min(5,{
        message:"password must be 5 charcters!"
    })



   
})

const LoginForm = ()=>{
  const { toast } = useToast();
 const router = useRouter();
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        hospital_name:"",
        email:"", 
        password:"",
        uid:""
 
    },
  })

  const  [isloding , setisloding] = useState(false);

   async function onSubmit(values: z.infer<typeof formSchema>) { 
    setisloding(true);
    signIn('credentials',{
   ...values,
   redirect:false
  }).then((callback:any)=>{
    setisloding(false);
   if(callback?.ok){
    toast({
      variant:"sucess",
     title:"Login Successful"
    }) 
    router.refresh(); 
    router.push("/");
   }
   if(callback?.error){
     toast({  
      variant:"destructive",
     title:"Invalid Credentials",
      description:"Login Faild!", 
     }) 
     
    }
   
  }) 
   
  }

  const [isopen , setisopen] = useState(false);
  useEffect(() => {
     setisopen(true);
  }, [setisopen])


if(!isopen){
    return null;
}

    return(<>


<Card className="w-[100%] md:w-[40%]">
  <CardHeader>
  <CardTitle className="text-3xl">Login</CardTitle> 
  </CardHeader>
  <CardContent>
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  >  
 
 <div className="gap-3 grid   grid-cols-1">  
     
        <FormField
          control={form.control}
          name="hospital_name"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Hospital Name" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Email" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />
 
    <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Password" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="uid"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="special access code" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />

 





          </div>
 
    <div className="mt-5 flex justify-between items-center">
    <Button type="submit" className=" w-auto" >{isloding?"Loding...":"Login"}</Button>
    <p className="text-gray-500 text-sm">Not have an account? <Link href={"/register"} className="text-rose-500">Register</Link></p>
    </div>
   
      </form>
    </Form>
  </CardContent>
 
 
</Card>

 
    
 
 
 

    </>) 
}


export default  LoginForm;