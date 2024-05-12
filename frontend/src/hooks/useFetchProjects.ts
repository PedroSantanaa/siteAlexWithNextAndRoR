'use client'
import dotenv from 'dotenv';
dotenv.config();
import { useState, useEffect, useCallback } from "react";
import apiInstance from "@/utils/axios";
import { getJwt, getSession } from "@/actions";
import { redirect } from "next/navigation";


export interface Project {
  id: number,
  name: string,
  created_at: string,
  updated_at: string,
  user_id: number,
  category_id:number
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

      setProjects(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { projects, loading, error };
};