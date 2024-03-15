'use server'
import { getIronSession } from "iron-session"
import { sessionOptions } from "./lib"
import { cookies } from "next/headers"
import apiInstance from "./utils/axios"
import { redirect } from "next/navigation"
import { AxiosResponse } from "axios"

interface Response {
  headers: Headers;
  status: number;
  // Outras propriedades da sua resposta HTTP
}

// interface UserData{

//     id:3,
//     email: string,
//     name: string,

// }

interface SessionData {
  jwt_session: string;}

export const getSession =  async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  // const tokenJWT = session.jwt_session;
  if (Object.keys(session).length === 0) {
    return false
  }
  
  const userPromise = apiInstance.get('/current_user',{
    headers: {
      'Authorization': `Bearer ${session.jwt_session}`
    }
  })
  userPromise.then(response => {
  // Aqui você pode acessar os dados da resposta
  return response.data
  }).catch(error => {
    // Tratamento de erro
    return {error: 'Error getting user data'};
  });
}

export const login =  async (formData: FormData) => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  const formEmail = formData.get('email') as string
  const formPassword = formData.get('password') as string
  
  const requestData = {
    "user":{
      "email": formEmail,
      "password": formPassword
    }
  }

  const response:Response = await apiInstance.post('/login', requestData)
  if (response.headers && response.headers.get('Authorization') && response.status === 200) {
    const authorizationHeader: string | null = response.headers.get('Authorization');
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    // Extrai o token JWT removendo 'Bearer ' do início do valor do cabeçalho
    const tokenJWT: string = authorizationHeader.substring(7);
    if (Object.keys(session).length === 0) {
      session.jwt_session = tokenJWT
      await session.save()
    }
    redirect('/meus-projetos')

    // Agora você pode usar o token JWT como necessário
    console.log('Token JWT:', tokenJWT);
  }else{
    return {error: 'Invalid credentials'}
  }
  }else{
  return {error: 'Invalid credentials'}}

}

export const logout =  async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  session.destroy()
  redirect('/')
}
