import React from 'react'
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className='flex w-[100%] border items-center justify-center md:w-3xl md:m-auto'>
       <nav className='flex w-[100%]  px-6 py-6 justify-between items-center'>
        <div>
          <h1 className='font-medium text-3xl  text-[#C084FC]'>Sarthi</h1>
        </div>

        <div className='hidden'>
          
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Faq</h2>
            
          
            
        </div>



        <div className="flex gap-6">
            <Menu className='w-5 h-5 text-white' />
            <Search className='w-5 h-5 text-white'/>
            
        </div>  
      </nav> 
    </div>
  )
}
