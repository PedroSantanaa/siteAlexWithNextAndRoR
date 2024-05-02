'use client'
import { useState, useEffect } from "react";
import apiInstance from "@/utils/axios";
import dotenv from 'dotenv';
import { getJwt, getSession } from "@/actions";
import { redirect } from "next/navigation";

dotenv.config();

interface Project {
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
        const response = await apiInstance.get("http://localhost:3001/projects", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        setProjects(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return { projects, loading, error };
};