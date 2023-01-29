import Head from "next/head";
import Navbar from "@/components/navbar";
import Auth from "@/components/auth";

export default function Inspection() {
  return (
    <Auth>
      <Head>
        <title>Inspection | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className='flex-1 flex flex-row bg-gray-50'>
          <div className='flex-1 flex justify-center bg-white'>
            <img src='/inspection.jpg' className='m-auto items-center' />
          </div>
          <div className='px-8 flex-1 flex flex-col bg-gray-200'>
            <div className='my-24 flex-1 h-64 m-2'>
              <h1 className='mb-4 text-gray-700 text-3xl font-semibold text-center'>ADT A40G Inspection</h1>
              <div className="text-gray-700 mb-8">
                <p>The Care Inspection "Inspection Report" is a check list to document and report the results of a completed Care Inspection on the machine. All completed "Inspection Reports" must be kept on file by the relevant Volvo dealer. A Care Inspection has two levels, the CSR inspection and the technician inspection.</p>
                <p>- The CSR inspection is used by the Customer Support Representative (CSR) and is a short basic inspection that can be performed without any tools.</p>
                <p>- The Technician Inspection is a more comprehensive inspection and should b</p>
              </div>
              <div className='dropdown mx-auto flex flex-col'>
                <button className='w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-center text-gray-800 font-medium tracking-widest cursor-default'>DOWNLOAD</button>
                <ul className='dropdown-menu hidden w-[50%] mx-auto border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-400'>
                  <a href='/api/download/Care%20Inspection.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Care Inspection</a>
                  <a href='/api/download/Care%20Inspection_2.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Care Inspection 2</a>
                  <a href='/api/download/Inspection%20Program_2.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Inspection Program 2</a>
                  <a href='/api/download/Inspection%20Program_3.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Inspection Program 3</a>
                  <a href='/api/download/Inspection%20Program_4.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Inspection Program 4</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}