import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'

export default function Pareto() {
  return (
    <>
      <Head>
        <title>Pareto Problem | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1 mt-14 mx-8 bg-gray-50 flex flex-col'>
          <div className='flex-1 flex flex-row'>
            <img href='#' className='flex-1 h-80 m-4 bg-gray-400' />
            <img href='#' className='flex-1 h-80 m-4 bg-gray-400' />
          </div>
          <div className='flex flex-row m-2'>
            <div className='flex-1 h-64 m-2 bg-gray-400'>

            </div>
            <div className='flex-1 h-64 m-2 bg-gray-400'>

            </div>
            <div className='flex-1 h-64 m-2 bg-gray-400'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
