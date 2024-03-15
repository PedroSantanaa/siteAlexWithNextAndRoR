'use server';
import { getIronSession } from "iron-session";
import { sessionOptions } from "./lib";
import { cookies } from "next/headers";
import apiInstance from "./utils/axios";
import { SessionData } from "./actions";


export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // const tokenJWT = session.jwt_session;
  if (Object.keys(session).length === 0) {
    return false;
  }

  const userPromise = apiInstance.get('/current_user', {
    headers: {
      'Authorization': `Bearer ${session.jwt_session}`
    }
  });
  userPromise.then(response => {
    // Aqui você pode acessar os dados da resposta
    console.log(response.data); // Dados da resposta
  }).catch(error => {
    // Tratamento de erro
    console.error('Erro ao obter dados do usuário:', error);
  });
};
