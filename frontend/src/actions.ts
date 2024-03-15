'use server'
import { getIronSession } from "iron-session"
import { sessionOptions } from "./lib"
import { cookies } from "next/headers"
import apiInstance from "./utils/axios"

export const getSession =  async () => {
  const session = await getIronSession(cookies(), sessionOptions)
  if (Object.keys(session).length === 0) {
    return null
  }
  
  const user = apiInstance.get('/current_user',{
    headers: {
      'Authorization': `Bearer ${session}`
    }
  })
  return user
}
export const login =  async () => {}
export const logout =  async () => {}
