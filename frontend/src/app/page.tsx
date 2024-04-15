import { SessionData, getSession } from "@/actions";
import LoginForm from "@/components/LoginForm";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Login =  async () =>{
  const session = await getSession(); 
  if (session !== false) {
   redirect('/meus-projetos')
  }
  return (
    <LoginForm />
 );
}

export default Login