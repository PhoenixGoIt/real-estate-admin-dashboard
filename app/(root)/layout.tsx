"use client"

import { SideBar } from "@/components/SideBar"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

const layout = ({children} : {children: React.ReactNode}) => {
  const path = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false);  
  return (
    <div className="flex flex-col h-screen">
    <header className="w-full">
    <div className="bg-white p-[12px]">
      <div className=" flex">
        {/* Logo and menu icon */}
        <div className="flex mr-auto items-center space-x-4">
          <Image src={'logo.svg'} alt='logo' width={35} height={38} className='hidden lg:flex' />
          <Image src={'Menu.svg'} alt='menu' width={18} height={14} className='lg:hidden' />
          <Image 
            src={'search.svg'} 
            alt='search' 
            width={16} 
            height={16} 
            className='lg:hidden cursor-pointer'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <span className="text-xl font-semibold hidden lg:block">Yariga</span>
        </div>
        
        {/* Search input - hidden on mobile unless activated */}
    <div className={`relative ml-[150px] flex-grow mx-4 ${isSearchOpen ? 'block' : 'hidden'} lg:block`}>
      <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image 
          src='/search.svg'
          alt='search'
          width={16}
          height={16}
          className='text-gray-400'
        />
      </div>
      <input
        type="text"
        placeholder="Search Property, Customer etc."
        className="w-[480px] pl-10 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500"
      />
      {/* Кнопка закрытия поиска на мобильных устройствах */}
      {isSearchOpen && (
        <button 
          className="absolute inset-y-0 right-0 pr-3 flex items-center lg:hidden"
          onClick={() => setIsSearchOpen(false)}
        >
          <span className="text-gray-400">×</span>
        </button>
      )}
    </div>
        
        {/* Icons and user info */}
        <div className="flex items-center gap-[15px]">
          
          <Image src={'notification.svg'} alt='notification' width={24} height={24} />
          
          {/* User info - simplified for mobile */}
          <div className="flex items-center space-x-2">
            <div className='bg-black w-[40px] h-[40px] rounded-full'></div>
            {/* <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            /> */}
            <div className="hidden lg:block">
              <p className="text-sm font-medium">Hawkins Maru</p>
              <p className="text-xs text-gray-500">Company Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
    <div className="flex flex-1 overflow-hidden">
      <SideBar />
      <main className="flex-1 overflow-auto p-6 bg-gray-200 rounded-ss-[12px]">
        {children}
      </main>
    </div>
  </div>
  )
}

export default layout

