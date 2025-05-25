'use server'
import { auth } from '@/auth'
import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/sidebar'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const session = await auth();
  if(!session?.user){
    redirect('/')
  }
  
  return (
    <div className='flex h-screen'>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}
export default page;