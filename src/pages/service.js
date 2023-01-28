import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'

export default function Service() {
  return (
    <>
      <Head>
        <title>Service | Volvo Monitoring ADT A40G</title>
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
              <h1 className='mb-4 text-gray-700 text-3xl font-semibold text-center'>ADT A40G Service</h1>
              <div className='mb-6 text-gray-700'>
                <p>The Service Programme is a checklist of all scheduled maintenance intervals for a specific range of models under normal operating conditions. The scheduled maintenance intervals must be performed as specified in order to maintain the machine for maximum reliability and performance.</p>
                <p>For any factory warranty to be valid, the machine has to be maintained according to this Service Programme. The completed Service Programmes must be kept on file. Some service steps may be performed by an operator unless otherwise specified in the Operator's Manual. All other service steps must be performed by a qualified service technician.</p>
              </div>
              <div className='w-full flex'>
                <button className='w-[50%] px-6 py-2 mx-auto border-4 border-gray-800 rounded-full text-gray-800 font-medium tracking-widest hover:bg-white active:bg-gray-500'>DOWNLOAD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
