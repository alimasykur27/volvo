import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Auth from '@/components/auth'

export default function Pareto() {
  return (
    <Auth>
      <Head>
        <title>Pareto Problem | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1 ml-64 mt-14 mr-8 bg-gray-50 flex flex-col'>
          <div className='mt-4 mb-2 ml-4 text-gray-700 text-3xl font-semibold'>
            Pareto Problem
          </div>
          <div className='w-full flex flex-row my-4'>
            <img src='/pareto/pareto1.jpg' className='w-[55%] my-4 mx-auto' />
            <img src='/pareto/pareto2.jpg' className='w-[40%] my-4 mx-auto'/>
          </div>
          <div className='flex flex-row m-2'>
            <img src='/pareto/pareto3.jpg' className='flex-1 my-4 mx-auto'/>
          </div>
        </div>
      </div>
    </Auth>
  )
}
