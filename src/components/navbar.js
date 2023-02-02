import { useState, useEffect } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)

  const logout = () => {
    fetch('/api/logout', { method: 'POST' }).then(res => {
      if (res.redirected) {
        window.location = res.url
      }
      return
    })
  }

  return (
    // <div className={'h-full fixed top-0 left-0 bottom-0 flex flex-col ' + (expanded ? 'w-64 bg-gray-50 border border-gray-300 shadow-2xl' : 'w-14 bg-transparent') }>
    <div className='h-full fixed top-0 left-0 bottom-0 flex flex-col w-56 bg-gray-50 border border-gray-200 shadow-2xl'>
      {/* <div onClick={() => setExpanded(!expanded)} className={'h-8 w-8 my-4 cursor-pointer ' + (expanded ? 'mx-3' : 'mx-auto')} style={{ background: "url('/menu.png')", backgroundSize: "2rem" }} />       */}
      {/* <div className={'flex flex-col ' + (expanded ? 'block' : 'hidden')}> */}
      <div className='flex flex-col block'>
        <div className='flex flex-row py-4 border border-b-gray-300'>
          <div className='h-9 w-9 ml-4 p-2 rounded-full border-2 border-gray-500' style={{ background: "url('/user.png')", backgroundSize: "1.7rem", backgroundPosition: "center" }} />
          <div className='flex-1 mx-3 my-auto text-sm text-gray-800 cursor-default'>Admin</div>          
          <a onClick={(event) => logout()} className='mx-4 my-auto text-sm text-red-700 hover:text-red-400 cursor-pointer'>Log Out</a>
        </div>
        <div className='mx-4 mt-4 mb-2 text-blue-500 text-lg font-semibold cursor-default'>MENU</div>
        <a href='/' className='px-4 py-2 border-r-4 border-r-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-100 hover:border-r-blue-400'>Dashboard</a>
        <a href='/inspection' className='px-4 py-2 border-r-4 border-r-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-100 hover:border-r-blue-400'>Inspection</a>
        <a href='/service' className='px-4 py-2 border-r-4 border-r-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-100 hover:border-r-blue-400'>Service</a>
        <a href='/troubleshooting' className='px-4 py-2 border-r-4 border-r-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-100 hover:border-r-blue-400'>Troubleshooting</a>
        <a href='/pareto' className='px-4 py-2 border-r-4 border-r-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-100 hover:border-r-blue-400'>Pareto Problem</a>
      </div>
    </div>
    
  );
}