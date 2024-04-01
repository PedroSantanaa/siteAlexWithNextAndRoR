'use server';

import { getSession } from "@/actions";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";



const page = async () =>{
  const session = await getSession()
  if (session !== false) {
    redirect('/meus-projetos')
  }
  return (
    <LoginForm />
 );
}

export default page