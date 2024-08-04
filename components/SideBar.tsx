import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

export const SideBar = () => {
  const path = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>

    <nav className='hidden bg-white lg:block w-[250px] h-screen pt-6 pr-4 pl-4 text-second_text_color'>
      <ul className='mr-auto ml-auto max-w-[220px]'>
        <Link href="/" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'dashboard.svg'} alt='notification' width={24} height={24} className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/' && ' brightness-0 invert '
          )}/>
          <li>Dashboard</li>
        </Link>
        <Link href="/property-list" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/property-list' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'property.svg'} alt='notification' width={24} height={24}  className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/property' && 'group brightness-0 invert '
          )}/>
          <li>Property</li>
        </Link>
        <Link href="/agent" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/agent' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'agent.svg'} alt='notification' width={24} height={24}  className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/agent' && 'group brightness-0 invert '
          )}/>
          <li>Agent</li>
        </Link>
        <Link href="/review" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/review' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'review.svg'} alt='notification' width={24} height={24}  className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/review' && 'group brightness-0 invert '
          )}/>
          <li>Review</li>
        </Link>
        <Link href="/message" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/message' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'message.svg'} alt='notification' width={24} height={24}  className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/message' && 'group brightness-0 invert '
          )}/>
          <li>Message</li>
        </Link>
        <Link href="/my-profile" className={cn(
          'group flex p-5 gap-1 rounded-lg transition-all ',
          path === '/my-profile' 
                    ? 'bg-property_purple text-white'
                    : 'hover:scale-125'
          )
        }>
        <Image src={'profile.svg'} alt='notification' width={24} height={24}  className={cn(
          'text-gray-700 group-hover:brightness-0 group-hover:invert transition-all duration-300',
          path === '/my-profile' && 'group brightness-0 invert '
          )}/>
          <li>My Profile</li>
        </Link>
      </ul>
    </nav>
    </>
  )
}
