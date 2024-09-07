"use client"
import PropertyDetails from '@/components/Property/PropertyDetails'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
    const pathname = usePathname()
  return (
    <section className=''>
      <PropertyDetails />
    </section>
  )
}

export default page