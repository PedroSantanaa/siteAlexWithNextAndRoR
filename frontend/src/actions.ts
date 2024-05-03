'use server'
import { getIronSession } from "iron-session"
import { sessionOptions } from "./lib"
import { cookies } from "next/headers"
import apiInstance from "./utils/axios"
import { redirect } from "next/navigation"

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

export interface SessionData {
  jwt_session: string;
  expires: Date;}

export const getSession =  async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  if (session.expires && session.expires < new Date()) {
    session.destroy()
    return false
  }
  if (Object.keys(session).length === 0) {
    return false
  }
  try {
    const response = await apiInstance.get('/current_user', {
      headers: {
        'Authorization': `Bearer ${session.jwt_session}`
      }
    });
    return response.data
  } catch (error:any) {
      return error.message
  }
}

export const getJwt =  async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  // const tokenJWT = session.jwt_session;
  if (Object.keys(session).length === 0) {
    return false
  }
  
  return session.jwt_session
  
}

export const login =  async (prevState:{error:undefined | string},formData: FormData) => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  const formEmail = formData.get('email') as string
  const formPassword = formData.get('password') as string
  
  const requestData = {
    "user":{
      "email": formEmail,
      "password": formPassword
    }
  }

 try {
    const response: Response = await apiInstance.post('/login', requestData)

    if (response.headers && response.status === 200 && response.headers.get('Authorization')) {
      const authorizationHeader: string | null = response.headers.get('Authorization');
      if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        // Extrai o token JWT removendo 'Bearer ' do início do valor do cabeçalho
        const tokenJWT: string = authorizationHeader.substring(7);
        if (Object.keys(session).length === 0) {
          const jwtExpirationTime = 10 * 24 * 60 * 60; // 10 dias em segundos
          const expirationDate = new Date(Date.now() + jwtExpirationTime * 1000);
          session.jwt_session = tokenJWT
          session.expires = expirationDate
          await session.save()
        }
        // redirect('/meus-projetos')

        // Agora você pode usar o token JWT como necessário
        // console.log('Token JWT:', tokenJWT);
      }
    } else {
      return { error: 'Email ou Senha incorretos' }
    }
  } catch (error:any) {
    if (error.response && error.response.status === 401) {
      return { error: 'Email ou Senha incorretos' }
    } else if (error.response) {
      // Tratar outros erros de requisição
      return { error: 'Ocorreu um erro, tente novamente em instantes' }
    }
  }

}

export const signup =  async (prevState:{error:undefined | string,success:undefined | string},formData: FormData) => {
  const formName = formData.get('name') as string
  const formEmail = formData.get('email') as string
  const formPassword = formData.get('password') as string
  
  const requestData = {
    "user":{
      "name": formName,
      "email": formEmail,
      "password": formPassword
    }
  }

 try {
    const response: Response = await apiInstance.post('/signup', requestData)
    if (response.headers && response.status === 200) {
      return { success: 'Cadastro realizado com sucesso' }
  }


        // Agora você pode usar o token JWT como necessário
        // console.log('Token JWT:', tokenJWT);
  }
   catch (error:any) {
    if (error.response) {
      return { error: 'Um erro ocorreu ao tentar fazer o cadastro, tente novamente' }}
    }
  }

export const userInfo =  async (prevState:{error:undefined | string, success:undefined | string},formData: FormData) => {
  const jwt = await getJwt()
  const formcpf = formData.get('cpf') as string
  const formphone = formData.get('phone') as string
  const formcep = formData.get('cep') as string
  const formestado = formData.get('estado') as string
  const formrua = formData.get('rua') as string
  const formbairro = formData.get('bairro') as string
  const formcidade = formData.get('cidade') as string
  const formnumero = formData.get('numero') as string
  const formcomplemento = formData.get('complemento') as string

  
  const requestData = {
    "user":{
      "cpf": formcpf,
      "phone": formphone,
      "cep": formcep,
      "estado": formestado,
      "rua": formrua,
      "bairro": formbairro,
      "cidade": formcidade,
      "numero": formnumero,
      "complemento": formcomplemento
    }
  }

 try {
    const response:Response = await apiInstance.put('/additional_user_data', requestData, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    if (response.headers && response.status === 200) {
      return { success: 'Usuário atualizado com sucesso' }
    }

  } catch (error:any) {
    if (error.response && error.response.status === 401) {
      return { error: 'Não foi possivel atualizar o usuário, tente novamente em instantes...' }
    } else if (error.response) {
      // Tratar outros erros de requisição
      return { error: 'Ocorreu um erro, tente novamente em instantes' }
    }
  }

}

export const companyInfo =  async (prevState:{error:undefined | string, success:undefined | string},formData: FormData) => {
  const jwt = await getJwt()
  const session = await getSession()
  const id = session?.id
  const formcnpj = formData.get('cnpj') as string
  const formfantasia = formData.get('fantasia') as string
  const formrazao = formData.get('razao') as string
  const formregistro = formData.get('registro') as string
  const formmunicipal = formData.get('municipal') as string
  const formcep = formData.get('cep') as string
  const formestado = formData.get('estado') as string
  const formrua = formData.get('rua') as string
  const formbairro = formData.get('bairro') as string
  const formcidade = formData.get('cidade') as string
  const formnumero = formData.get('numero') as string
  const formcomplemento = formData.get('complemento') as string

  
  const requestDataCompany = {
    "company":{
      "cnpj": formcnpj,
      "nome_fantasia": formfantasia,
      "razao_social": formrazao,
      "registro_estadual": formregistro,
      "registro_municipal": formmunicipal,
      "cep": formcep,
      "estado": formestado,
      "rua": formrua,
      "bairro": formbairro,
      "cidade": formcidade,
      "numero": formnumero,
      "complemento": formcomplemento
    }
  }
  
  

 try {
    const response:Response = await apiInstance.put(`/companies/${id}`, requestDataCompany,{
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })

    if (response.headers && response.status === 200) {
      return { success: 'Empresa atualizada com sucesso' }
    }

  } catch (error:any) {
    if (error.response && error.response.status === 401) {
      return { error: 'Não foi possivel atualizar a empresa, tente novamente em instantes...' }
    } else if (error.response) {
      // Tratar outros erros de requisição
      return { error: 'Ocorreu um erro, tente novamente em instantes' }
    }
  }

}

export const logout =  async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  session.destroy()
  redirect('/')
}
