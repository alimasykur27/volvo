import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Auth from '@/components/auth'
import UploadReport from '@/components/uploadReport'

export default function Service() {
  return (
    <Auth>
      <Head>
        <title>Service | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='ml-56 flex-1 flex flex-row bg-gray-50'>
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
              <div className='dropdown mx-auto mb-4 flex flex-col'>
                <button className='w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-center text-gray-800 font-medium tracking-widest cursor-default'>DOWNLOAD</button>
                <ul className='dropdown-menu hidden w-[50%] mx-auto border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-400'>
                  <a href='/api/download/Service%20Program.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Service Program 1</a>
                  <a href='/api/download/Service%20Program_2.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Service Program 2</a>
                  <a href='/api/download/Service%20Program_3.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Service Program 3</a>
                </ul>
              </div>
              <UploadReport fileName={'ServiceReport.pdf'} />
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}
