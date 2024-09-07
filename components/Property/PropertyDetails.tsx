"use client"
import { GetProperty } from '@/lib/api/property/property-quary'
import { property_list } from '@/lib/link';
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Gallery from '../ui/Gallery';

const PropertyDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)
    const { id } = useParams<{ id: string }>();
    const numericId = parseInt(id, 10);
    const { mutate, data, isPending } = GetProperty()
    useEffect(() => {
        mutate(numericId)
    }, [])
    return (
        <div className='bg-white w-full max-h-max rounded-lg p-5'>
            <Link href={property_list} className='flex items-center justify-start mb-6'>
                <Image src={"/forward.svg"} alt="forward" width={15} height={15} className='w-auto h-auto' />
                <h1 className='text-2xl ml-6 '>Details</h1>
            </Link>
            
            <div className='flex items-center h-[390px] gap-5'>
                            {isPending
                            ?  "Loading data..."
                            : data?.data?.id
                            ? <Image src={data?.data.mainImage} alt="forward" width={550} height={350} className='w-[550px] h-full rounded-lg object-cover'/>
                            : "Not Found"}
                <div className='block items-center justify-center'>
                <Image src={data?.data.images[0]} alt={data?.data.title[0]} width={220} height={100} className='w-[220px] h-[185px] mb-5 rounded-lg' />
                <div 
                  className='relative w-[220px] h-[185px] group cursor-pointer overflow-hidden rounded-lg'
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image 
                    src={data?.data.images[1]} 
                    alt={data?.data.title[1]}
                    width={220} 
                    height={185} 
                    className='object-cover w-full h-full'
                  />
                  <div className='absolute inset-0 bg-black opacity-50'></div>
                  <span className='absolute inset-0 flex items-center justify-center text-white text-xl transition-transform group-hover:scale-150'>
                    +{data?.data.images.length - 2}
                  </span>
                  {isModalOpen && <Gallery isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)} images={data?.data.images} />}
                </div>

                </div>
            </div>
        </div>
  )
}

export default PropertyDetails