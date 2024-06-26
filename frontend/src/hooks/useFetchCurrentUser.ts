'use client'
import { useState, useEffect } from "react";
import dotenv from 'dotenv';
import { getJwt, getSession } from "@/actions";
import { redirect } from "next/navigation";

dotenv.config();

interface User {
  id: number,
  email: string,
  role: number,
  name: string,
  cep: string,
  estado: string,
  rua: string,
  bairro: string,
  cidade: string,
  numero: string,
  complemento: string,
  cpf: string,
  telefone: string,
  created_at: string,
  updated_at: string,
}
export const useFetchCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [error, setError] = useState<string | null >(null);
  const [loading, setLoading] = useState<boolean | null >(null);
  const [jwt, setJwt] = useState<string | false >(false);
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const sessionData:User|false = await getSession();
      if (sessionData === false) {
        redirect('/');
      }

      const jwt = await getJwt();
      setJwt(jwt);
      if (jwt === false) {
        setError("Usuário nao atenticado");
        setLoading(false);
        return;
      }
      setCurrentUser(sessionData);
      setLoading(false);
      
    }

    loadData();
  }, []);

  return { currentUser, loading, error, jwt };
};