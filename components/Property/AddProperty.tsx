"use client"
import React from 'react'
import { Input } from '../ui/Input'
import { TypeSelect } from '../ui/Selects'
import Link from 'next/link'
import { property_list } from '@/lib/link'
import Image from 'next/image'
import { TextArea } from '../ui/TextArena'
import MapBox from '../ui/MapBox'
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
                      <TextArea title='Description'/>
                    </div>
                    <div className='mt-6'>
                      <div className='mb-3'><label className='text-md font-[500]'>Price<span className='text-red-600'>*</span></label></div>
                      <Input title='Price'/>
                    </div>
                    <div className='flex mt-6'>
                      <TypeSelect />
                      <span className='text-red-600 ml-3 text-xl'>*</span>
                    </div>
                    <div className='w-[450px] h-[350px]  mt-6'>
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="p-4 w-full max-w-3xl">
                        <h1 className="text-2xl font-bold mb-4">Выбор местоположения на карте</h1>
                        <MapBox />
                      </div>
                    </div>
                    </div>
                    <div>

                    </div>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default AddProperty