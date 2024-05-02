'use client'
import { useState, useEffect } from "react";
import apiInstance from "@/utils/axios";
import dotenv from 'dotenv';
import { getJwt, getSession } from "@/actions";
import { redirect } from "next/navigation";
import { useFetchCurrentUser } from "./useFetchCurrentUser";

dotenv.config();

interface Company {
  id: number,
  cnpj: string,
  nome_fantasia: string,
  razao_social: string,
  cep: string,
  estado: string,
  rua: string,
  bairro: string,
  cidade: string,
  numero: string,
  complemento: string,
  registro_estadual: string,
  registro_municipal: string,
  created_at: string,
  updated_at: string,
  user_id: number,
}
export const useFetchCompany = (id:number) => {
  const [company, setCompany] = useState<Company>();
  const [error, setError] = useState<string | null >(null);
  const [loading, setLoading] = useState<boolean | null >(null);

  useEffect(() => {
    async function loadData() {
      const sessionData = await getSession();
      if (sessionData === false) {
        redirect('/');
      }

      const jwt = await getJwt();
      if (jwt === false) {
        setError("Usuário nao atenticado");
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await apiInstance.get(`http://localhost:3001/companies`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        setCompany(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  return { company, loading, error };
};