import { getSession } from '@/actions'
import SignUpForm from '@/components/SignUpForm'
import { redirect } from 'next/navigation'
import React from 'react'

const Cadastro = async () => {
  const session = await getSession()
  if (session !== false) {
    redirect('/meus-projetos')
  }
  return (
    <SignUpForm />
  )
}

export default Cadastro