import { logout } from '@/actions'
import { LogoutButton, LogoutContainer } from '@/app/styled-components/LogoutForm'
import Image from 'next/image'
import React from 'react'

const LogoutForm = () => {
  return (
    <LogoutContainer action={logout}>
      <LogoutButton><Image src='/logout.svg' alt='logout' width={30} height={30}/></LogoutButton>
    </LogoutContainer>
  )
}

export default LogoutForm