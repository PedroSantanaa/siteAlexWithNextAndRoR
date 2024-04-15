'use client'
import React, { useEffect, useState } from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from "@/actions"
import { NavBarContainer, NavbarStyled, NavbarLinkStyled, NavBarContent } from '@/app/styled-components/NavbarStyled'
import { usePathname} from 'next/navigation'

interface SessionData {
  jwt: string;
  expires: Date
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
  }, [path]);
  return (
    <NavBarContainer>
      <NavBarContent>
        <h1>Icone de diminuir menu</h1>
        <h1>Logo</h1>
      </NavBarContent>
      <NavbarStyled>
        {/* {session == false && <NavbarLinkStyled href='/' $isactive={path === '/'}> Login </NavbarLinkStyled>}
        {session == false && <NavbarLinkStyled href='cadastro' $isactive={path === '/cadastro'}>Cadastro</NavbarLinkStyled>} */}
        {session!=false && <NavbarLinkStyled href='perfil' $isactive={path === '/perfil'}>Perfil</NavbarLinkStyled>}
        {session!=false && <NavbarLinkStyled href='novo-projeto' $isactive={path === '/novo-projeto'}>Novo Projeto</NavbarLinkStyled>}
        {session!=false && <NavbarLinkStyled href='meus-projetos' $isactive={path === '/meus-projetos'}>Meus Projetos</NavbarLinkStyled>}
        {session!=false && <LogoutForm />}
      </NavbarStyled>
    </NavBarContainer>  
  )
}

export default NavBar