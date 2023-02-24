import Head from "next/head";
import Navbar from "@/components/navbar";
import { GrServices } from "react-icons/gr";
import Auth from "@/components/auth";
import { getJson } from "@/lib/contentData";

export async function getStaticProps() {
  let contentData = getJson()
  return {
    props: {
      contentData: contentData.dashboard
    }
  }
}

export default function Dashboard({ contentData }) {
  return (
    <Auth>
      <Head>
        <title>Dashboard | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className='flex-1 ml-56 mt-14 bg-gray-50 flex flex-col'>
          <div className='flex flex-row m-4 h-16'>
            <div className='flex w-3/5 bg-white'>
              <div className="flex-1 flex flex-row justify-center items-center">
                <div className="text-3xl text-black font-normal m-2">ARTICULATED HAULERS VOLVO</div>
              </div>
            </div>
            <div className='flex w-1/5'></div>
            <div className='flex w-1/5'>
              <div className="flex-1 flex flex-row justify-center items-center">
                <button className='px-4 py-2 mx-auto bg-blue-500 border-2 border-blue-500 rounded-full text-white text-center font-medium tracking-widest hover:bg-white hover:text-blue-500 active:bg-blue-100'>Save Search</button>
              </div>
            </div>
          </div>
          <div className='flex flex-row h-32 mx-2'>
            <div className='flex-1 m-2'>
              <div className="flex h-full bg-white">
                <div className="flex-1 flex flex-row justify-center items-center">
                  <GrServices className="text-4xl text-black m-2" />
                  <div className="text-4xl text-red-500 font-normal m-2">{contentData.modelUnit}</div>
                </div>
              </div>
            </div>
            <div className='flex-1 m-2 bg-gray-400'>
              <div className="flex h-full bg-white">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="text-4xl text-red-500 font-normal m-2">{contentData.siteUnit}</div>
                  <div className="text-l text-black font-light m-2">SITE UNIT</div>
                </div>
              </div>
            </div>
            <div className='flex-1 m-2 bg-gray-400'>
              <div className="flex h-full bg-white">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="text-4xl text-red-500 font-normal m-2">{contentData.statusUnit}</div>
                  <div className="text-l text-black font-light m-2">STATUS UNIT</div>
                </div>
              </div>
            </div>
            <div className='flex-1 mx-2 bg-gray-400'>
              <div className="flex h-full bg-white">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="text-4xl text-red-500 font-normal m-2">{contentData.actualPa}</div>
                  <div className="text-l text-black font-light m-2">ACTUAL PA</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row mt-8'>
            <img src='/pareto/pareto1.jpg' className='w-[55%] my-4 mx-auto' />
            <img src='/pareto/pareto2.jpg' className='w-[40%] my-4 mx-auto'/>
          </div>
        </div>
      </div>
    </Auth>
  );
}