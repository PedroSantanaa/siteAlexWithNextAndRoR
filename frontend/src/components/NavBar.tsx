'use client'
import React, { useEffect, useState } from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from "@/actions"
import { NavBarContainer, NavbarStyled, NavbarLinkStyled, NavBarContent } from '@/app/styled-components/NavbarStyled'
import Link from 'next/link'
import { usePathname} from 'next/navigation'

interface SessionData {
  jwt: string;
}

const NavBar = () => {
  const [session, setSession] = useState<SessionData | false | null >(null);
  const path = usePathname();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      if (sessionData !== undefined) {
        setSession(sessionData);
      }
    };
    fetchSession();
  }, []);
  return (
    <NavBarContainer>
      <NavBarContent>
        <h1>Icone de diminuir menu</h1>
        <h1>Logo</h1>
      </NavBarContent>
      <NavbarStyled>
        {session == false && <NavbarLinkStyled href='/' router={path === '/'}> Login </NavbarLinkStyled>}
        {session == false && <NavbarLinkStyled href='cadastro' router={path === '/cadastro'}>Cadastro</NavbarLinkStyled>}
        {session!=false && <NavbarLinkStyled href='perfil' router={path === '/perfil'}>Perfil</NavbarLinkStyled>}
        {session!=false && <NavbarLinkStyled href='novo-projeto' router={path === '/novo-projeto'}>Novo Projeto</NavbarLinkStyled>}
        {session!=false && <NavbarLinkStyled href='meus-projetos' router={path === '/meus-projetos'}>Meus Projetos</NavbarLinkStyled>}
        {session!=false && <LogoutForm />}
      </NavbarStyled>
    </NavBarContainer>  
  )
}

export default NavBar