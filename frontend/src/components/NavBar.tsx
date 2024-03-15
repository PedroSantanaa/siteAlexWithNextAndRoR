import Link from 'next/link'
import React from 'react'
import Logout from './Logout'
import { getSession } from '@/actions'

const NavBar = async () => {
  const session = await getSession()
  return (
    <nav>
      <Link href='/'>Login</Link>
      <Link href='cadastro'>Cadastro</Link>
      <Link href='perfil'>Perfil</Link>
      <Link href='novo-projeto'>Novo Projeto</Link>
      <Link href='meus-projetos'>Meus Projetos</Link>
      <Logout />
    </nav>

  )
}

export default NavBar