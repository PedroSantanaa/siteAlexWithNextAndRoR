import { getJwt, getSession } from '@/actions'
import apiInstance from '@/utils/axios';
import { redirect } from 'next/navigation'
import React from 'react'

interface Project {
  id: number,
  name: string,
  created_at: string,
  updated_at: string,
  user_id: number,
  category_id:number
}
interface Response {
  headers: Headers;
  status: number;
  data: Project[];
}

const getData = async () =>{
  const session = await getSession()
  
  if (session === false) {
    redirect('/')
  }
  const jwt = await getJwt()
  const responsePromise:Response = await apiInstance.get('/projects',{
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  })
  return responsePromise.data
  // responsePromise.then(response =>{
  //   return response.data

  // })
}

const MyProjects = async() => {
  const apiData = await getData()

  return (
    <div className='container'>
      <div className='title'>
        <h1>MEUS PROJETOS</h1>
        <p>Confira o andamento dos seus projetos cadastrados.</p>
      </div>
      <div>
        <div className='filtroContainer'>
          <div className='filtro'>Filtro 1</div>
          <div className='filtro2'>Filtro 2</div>
        </div>
        <div className='projetos'>{
          apiData.map((project:Project) => {
            return (
              <div key={project.id} className='projeto'>
                <div className='projetoNome'>{project.name}</div>
                <div className='projetoData'></div>
              </div>
            )
          })
        }</div>
      </div>
    </div>
  )
}

export default MyProjects