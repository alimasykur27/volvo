import { useState, useEffect } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={'h-full fixed top-0 left-0 bottom-0 flex flex-col ' + (expanded ? 'w-64 bg-gray-50 border border-gray-300 shadow-2xl' : 'w-14 bg-transparent') }>
      <div onClick={() => setExpanded(!expanded)} className={'h-8 w-8 my-4 ' + (expanded ? 'mx-3' : 'mx-auto')} style={{ background: "url('/menu.png')", backgroundSize: "2rem" }} />      
      <div className={'flex flex-col ' + (expanded ? 'block' : 'hidden')}>
        <div className='mx-6 my-2 text-blue-500 text-lg font-semibold'>MENU</div>
        <a href='#' className='mx-6 my-1 text-gray-600 hover:text-gray-900'>Dashboard</a>
        <a href='#' className='mx-6 my-1 text-gray-600 hover:text-gray-900'>Inspection</a>
        <a href='/service' className='mx-6 my-1 text-gray-600 hover:text-gray-900'>Service</a>
        <a href='/troubleshooting' className='mx-6 my-1 text-gray-600 hover:text-gray-900'>Troubleshooting</a>
        <a href='/pareto' className='mx-6 my-1 text-gray-600 hover:text-gray-900'>Pareto Problem</a>
        <a href='#' className='mx-6 my-3 text-red-700 hover:text-red-400'>Log Out</a>
      </div>
    </div>
  );
}