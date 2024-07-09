'use client'
import dotenv from 'dotenv';
dotenv.config();
import { useState, useEffect, useCallback } from "react";
import apiInstance from "@/utils/axios";
import { getJwt, getSession } from "@/actions";
import { redirect } from "next/navigation";
import { create } from 'domain';


export interface Document {
  id: number;
  name: string;
  url: string;
}

export interface Project {
  id: number,
  role:number,
  name: string,
  created_at: string,
  updated_at: string,
  user_id: number,
  concessionaria: string,
  cpf: string,
  cnpj: string,
  estado: string,
  latitude: number,
  longitude: number,
  tipo_disjuntor: string,
  valor_disjuntor:string,
  total_power:number,
  status: string,
  documents: Document[]
}
export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null >(null);
  const [loading, setLoading] = useState<boolean | null >(null);

  const loadData = useCallback(async () => {
    setLoading(true);
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

    try {
      const response = await apiInstance.get("http://localhost:3001/projects", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const transformedProjects = response.data.data.map((item: any) => ({
          id: item.attributes.id,
          name: item.attributes.name,
          cpf: item.attributes.cpf,
          cnpj: item.attributes.cnpj,
          estado: item.attributes.estado,
          concessionaria: item.attributes.concessionaria,
          latitude: item.attributes.latitude,
          longitude: item.attributes.longitude,
          tipo_disjuntor: item.attributes.tipo_disjuntor,
          valor_disjuntor: item.attributes.valor_disjuntor,
          total_power: item.attributes.total_power,
          status: item.attributes.status,
          created_at: item.attributes.created_at,
          updated_at: item.attributes.updated_at,
          documents: item.attributes.documents.map((doc: any) => ({
            id: doc.id,
            name: doc.name,
            url: doc.url
          }))
        }));
      setProjects(transformedProjects);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);
  console.log(projects);
  return { projects, loading, error };
};