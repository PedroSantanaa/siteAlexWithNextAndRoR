import { logout } from '@/actions'
import Image from 'next/image'
import React from 'react'

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button><Image src='/logout.svg' alt='logout' width={30} height={30}/></button>
    </form>
  )
}

export default LogoutForm