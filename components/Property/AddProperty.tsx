"use client"
import React from 'react'
import { Input } from '../ui/Input'
import { TypeSelect } from '../ui/Selects'
import Link from 'next/link'
import { property_list } from '@/lib/link'
import Image from 'next/image'
import { GMap } from '../Map'
const AddProperty = () => { 
  return (
    <div className='ml-auto mr-auto w-[55%] h-full'>
      <h1 className='text-xl font-[700] text-primary_color mb-6'>AddProperty</h1>
        
        <div className='bg-white w-full max-h-max rounded-lg p-5 mb-7'>
            <Link href={property_list} className='flex items-center justify-start mb-3'>
                <Image src={"/forward.svg"} alt="forward" width={15} height={15} className='w-auto h-auto' />
                
            </Link> 
            <form className='flex'>
                <div className='mb-6 w-[70%] ml-6' >
                    <div className='mt-6'>
                      <div className='mb-3'><label className='text-md font-[500]'>Name<span className='text-red-600'>*</span></label></div>
                      <Input title='Name'/>
                    </div>
                    <div className='mt-6'> 
                      <div className='mb-3'><label className='text-md font-[500]'>Description</label></div>
                      <Input title='Description'/>
                    </div>
                    <div className='mt-6'>
                      <div className='mb-3'><label className='text-md font-[500]'>Price<span className='text-red-600'>*</span></label></div>
                      <Input title='Price'/>
                    </div>
                    <div className='flex mt-6'>
                      <TypeSelect />
                      <span className='text-red-600 ml-3 text-xl'>*</span>
                    </div>
                        <div className='w-[450px] h-[350px] ml-auto '>
                           <GMap/>
                      </div>  
                    </div>
            </form>
        </div>
    </div>
  )
}

export default AddProperty