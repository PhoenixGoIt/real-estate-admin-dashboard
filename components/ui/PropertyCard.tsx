import Image from 'next/image'
import React from 'react'

interface PropertyCardItem {
  name: string, 
  price: number,
  image: string, 
  location: string
}

interface PropertyCardProps {
  data: PropertyCardItem
}

export const PropertyCard: React.FC<PropertyCardProps> = ({data}) => {
  const {image, name, price, location} = data
  return (
    <div className='w-[330px] mr-8 mb-8'>
      <Image 
        src={`/${image}`} 
        alt={`${name} image`} 
        width={330} 
        height={190} 
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="flex items-center mt-2">
        <span className='text-lg font-[600] mb-1'>{name}</span>
        <div className='rounded-lg bg-secondary_color font-[600] ml-auto w-[55px] h-[35px] flex'>
          <span className='text-primary_color m-auto'>${price}</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className='mr-2'>
          <Image src='/location.svg' alt='location' width={17} height={17}/>
        </span>
        <span className='font-[400] text-sm text-second_text_color'>
          {location}
        </span>
      </div>
    </div>
  )
}