import Head from 'next/head'
import Navbar from '@/components/navbar'
import Auth from '@/components/auth'

export default function Troubleshooting() {
  return (
    <Auth>
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
            <img src='/troubleshoot-img.jpg' className='m-auto items-center' />
          </div>
          <div className='px-8 flex-1 flex flex-col bg-gray-200'>
            <div className='my-24 flex-1 h-64 m-2'>
              <h1 className='mb-4 text-gray-700 text-3xl font-semibold'>ADT A40G Troubleshooting Report</h1>
              <p className='mb-6 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar non quam ac malesuada. Nunc hendrerit enim ac ligula vestibulum, a finibus tortor efficitur. Sed congue gravida ante, sed interdum turpis sagittis nec. Aenean mattis massa in ante sagittis rhoncus. Morbi a magna dolor. Donec bibendum pretium neque sed porta. Nam vitae vestibulum felis, at consectetur diam. Nulla ultricies tempus enim nec volutpat.</p>
              <div className='dropdown mx-auto flex flex-col'>
                <button className='w-[50%] px-6 py-2 mx-auto border-2 border-gray-800 rounded-full text-center text-gray-800 font-medium tracking-widest cursor-default'>DOWNLOAD</button>
                <ul className='dropdown-menu hidden w-[50%] mx-auto border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-400'>
                  <a href='/api/download/2018%20English%20-%20Application%20at%20failure%20%28Primary%20Application%29.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Application at Failure 2018</a>
                  <a href='/api/download/Defect%20code%202022%20English.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Defect Code 2022</a>
                  <a href='/api/download/Failure%20Report%202022.pdf' className='px-4 py-2 block text-gray-800 cursor-pointer hover:bg-gray-300'>Failure Report 2022</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}
