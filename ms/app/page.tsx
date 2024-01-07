import getCurrentUser from "./actions/getcurrentuser";

 

export   async  function Home() {

  const user = await getCurrentUser();
  console.log(user);
  
  return (
  <div>
    
  </div>
  )
}


export default Home;