import Head from "next/head";
import Navbar from "@/components/navbar";

export default function Das() {
  return (
    <>
      <Head>
        <title>Dashboard | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className='flex-1 flex flex-row bg-gray-50'>
          <div className='flex-1 flex justify-center bg-white'>
          </div>
        </div>
      </div>
    </>
  );
}