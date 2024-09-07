"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'

interface SearchItem {
    title: string,
    width?: string
}

export const Input: React.FC<SearchItem> = ({title, width}) => {
  console.log(width)
    const [isSearchOpen, setIsSearchOpen] = useState(false);  
    return (
      <div className={`w-full relative flex-grow ${isSearchOpen ? 'block' : 'hidden'} lg:block`}>
        <input
          type="text"
          placeholder={`${title}`}
          className={cn(
            width === undefined ? `w-full pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none` :
            `w-[${width}] pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none`
          )}
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
    )
  }
