import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'

export default function Troubleshooting() {
  return (
    <>
      <Head>
        <title>Troubleshooting | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1 flex flex-row bg-gray-50'>
          <div className='flex-1 flex justify-center bg-white'>
            <img src='/service-img.jpg' className='m-auto items-center' />
          </div>
          <div className='px-8 flex-1 flex flex-col bg-gray-200'>
            <div className='my-24 flex-1 h-64 m-2'>
              <h1 className='mb-4 text-gray-700 text-3xl font-semibold'>ADT A40G Troubleshooting Report</h1>
              <p className='mb-6 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar non quam ac malesuada. Nunc hendrerit enim ac ligula vestibulum, a finibus tortor efficitur. Sed congue gravida ante, sed interdum turpis sagittis nec. Aenean mattis massa in ante sagittis rhoncus. Morbi a magna dolor. Donec bibendum pretium neque sed porta. Nam vitae vestibulum felis, at consectetur diam. Nulla ultricies tempus enim nec volutpat.</p>
              <div className='w-full flex'>
                <button className='w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-gray-800 font-medium tracking-widest'>DOWNLOAD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
