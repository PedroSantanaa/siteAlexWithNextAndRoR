import Link from 'next/link'
import React from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from "@/getSession"

const NavBar = async () => {
  const session = await getSession()
  console.log(session)
  return (
    <nav>
      <Link href='/'>Login</Link>
      <Link href='cadastro'>Cadastro</Link>
      <Link href='perfil'>Perfil</Link>
      <Link href='novo-projeto'>Novo Projeto</Link>
      <Link href='meus-projetos'>Meus Projetos</Link>
      {session!=false && <LogoutForm />}
    </nav>

  )
}

export default NavBar