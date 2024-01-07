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

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
 
import {  useRouter } from "next/navigation"
import Link from "next/link"
import axios from 'axios';
import { useToast } from "./ui/use-toast"
 
 



const formSchema = z.object({
    hospital_name: z.string().min(1 ,{
        message:"required"
    }).max(50),
    email:z.string().email(),
    register_no:z.string().min(1 ,{
        message:"required"
    }),
    city:z.string().min(3),
    pincode:z.string().min(1 ,{
        message:"required"
    }),
    address:z.string().min(1 ,{
        message:"required"
    }),
    emergency_ward_no:z.string().min(1,{
        message:"required"
    }),
    phone:z.string().min(10),
    no_ambulance:z.string().min(1 ,{
        message:"required"
    }),
    state:z.string().min(3),
     
    password: z.string().min(6),
    confirm_password: z.string().min(6),
  })
  
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm"], 
})

const SignupForm = ()=>{
  const { toast } = useToast();
 const router = useRouter();
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        hospital_name:"",
        email:"",
    register_no:"",
    city:"",
    pincode:"",
    address:"",
    emergency_ward_no:"",
    phone:"",
    no_ambulance:"",
    state:"",
    password:"",
    confirm_password:"" 
    },
  
  })
  
const  [isloding , setisloding] = useState(false);
 
   async function onSubmit(values: z.infer<typeof formSchema>) {
    setisloding(true);
    axios.post('/api/register', values).then(()=>{
      form.reset();
     router.refresh(); 
    toast({
      variant:"sucess",
      title: "Registed",
      description: "login your account",   
    }) 

    router.push("/login");

    }).catch((err)=>{   
 
      toast({ 
        variant:"destructive",
        title: "Uh oh! Something went wrong." ,
        description: "server error",   
      }) 
        
    }) .finally(()=>{
      setisloding(false);
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


<Card className="w-[100%] md:w-[60%] h-auto">
  <CardHeader>
  <CardTitle className="text-3xl">Register</CardTitle> 
  </CardHeader>
  <CardContent>
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  >  
 
 <div className="gap-3 grid md:grid-cols-2 grid-cols-1">  
     
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
          name="register_no"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Hospital Register Number" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="City" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Phone" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Address" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="emergency_ward_no"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="emergency ward number" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="State" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Pincode" {...field} />
              </FormControl> 
               <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="no_ambulance"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Number Ambulanve Available " {...field} />
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
          name="confirm_password"
          render={({ field }) => (
            <FormItem  > 
              <FormControl>
                <Input disabled={isloding} className="outline-none  focus:outline-none " placeholder="Confirm Password" {...field} />
              </FormControl> 
        
              <FormMessage  className="text-xs text-rose-500  -translate-y-2  translate-x-1"/>
        
            </FormItem>
          )}
        />
        






          </div>
 
    <div className="mt-5 flex justify-between items-center">
    <Button type="submit" className={" w-[40%]"  }  >{isloding?"Loding..":"Register"}</Button>
    <p className="text-gray-500 text-sm">You have alerday register? <Link href={"/login"} className="text-rose-500">login</Link></p>
    </div>
   
      </form>
    </Form>
  </CardContent>
 
 
</Card>

 
    
 
 
 

    </>) 
}


export default  SignupForm;