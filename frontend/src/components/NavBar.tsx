import Link from 'next/link'
import React from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from "@/actions"

const NavBar = async () => {
  const session = await getSession()
  return (
    <nav>
      {session == false && <Link href='/'>Login</Link>}
      {session == false && <Link href='cadastro'>Cadastro</Link>}
      {session!=false && <Link href='perfil'>Perfil</Link>}
      {session!=false && <Link href='novo-projeto'>Novo Projeto</Link>}
      {session!=false && <Link href='meus-projetos'>Meus Projetos</Link>}
      {session!=false && <LogoutForm />}
    </nav>

  )
}

export default NavBar