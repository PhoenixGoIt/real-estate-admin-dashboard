import React from 'react'
import { Input } from '../ui/Input'
import { TypeSelect } from '../ui/Selects'
import Link from 'next/link'
import { property_list } from '@/lib/link'
import Image from 'next/image'

const AddProperty = () => { 
  return (
    <div className='w-full h-full'>
      <h1 className='text-xl font-[700] text-primary_color mb-6'>AddProperty</h1>
        
        <div className='bg-white w-full max-h-max rounded-lg p-5 mb-9'>
            <Link href={property_list} className='flex items-center justify-start mb-6'>
                <Image src={"/forward.svg"} alt="forward" width={15} height={15} className='w-auto h-auto' />
                
            </Link> 
            <form className=''>
                <div className='mb-6 w-[45%] ml-6' >
                    <div className='mt-6'>
                      <div className='mb-3'><label className='text-md font-[500]'>Name<span className='text-red-600'>*</span></label></div>
                      <Input title='Name'/>
                    </div>

                    {/* <div className='flex mt-6'>
                      <TypeSelect />
                      <span className='text-red-600 ml-3 text-xl'>*</span>
                    </div> */}
                    <div className='mt-6'> 
                      <div className='mb-3'><label className='text-md font-[500]'>Description</label></div>
                      <Input title='Description'/>
                    </div>
                    <div className='mt-6'>
                      <div className='mb-3'><label className='text-md font-[500]'>Price<span className='text-red-600'>*</span></label></div>
                      <Input title='Price'/>
                    </div>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default AddProperty