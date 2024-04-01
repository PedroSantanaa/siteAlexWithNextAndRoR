import { getSession } from '@/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getSession()

  if (session === false) {
    redirect('/')
  }
  return (
    <div>page</div>
  )
}

export default page