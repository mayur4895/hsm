import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 

      <div className="h-[100vh]  w-full  flex items-center justify-center ">
        <div className=" w-full  flex   justify-center ">  
         
               {children}
        </div>
      
      </div>
     );
  }
   
  export default AuthLayout;