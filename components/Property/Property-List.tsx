import React from 'react'
import Button from '../ui/Button1'
import Search from '../ui/Search'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import { PropertyCard } from '../ui/PropertyCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function Property() {

  const data = [
    { name: 'Star Sun Hotel & Apartment', price: 500, image: 'test.webp', location: 'North Carolina, USA'},
    { name: 'Letdo Ji Hotel & Apartment', price: 532, image: 'test.webp', location: 'New Yrk City, USA'},
    { name: 'Metro Jayakar Apartment', price: 300, image: 'test.webp', location: 'North Carolina, USA'},
    { name: 'Star Sun Hotel & Apartment', price: 600, image: 'test.webp', location: 'North Ablion, USA'},
    { name: 'Almander Hotel & Apartment ', price: 343, image: 'test.webp', location: 'Word Carolina, FCE'},
    { name: 'Monter Hotel & Apartment ', price: 8345, image: 'test.webp', location: 'Word Carolina, FCE'},
  ];

  return (
    <>
    <div className='w-full h-full'>
        <div className='flex items-center mb-6  '>
        <h1 className='text-black font-[700] text-3xl'>Property</h1>
        <Button/>
        </div>
        <div className='bg-white w-full h-full rounded-lg p-5'>
          <div>
           <ul className='flex gap-5 w-full mb-5'>
            <li className='w-full'><Search title='Enter an address, city or Zip code' className='w-full pl-10 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500'/></li>
            <li>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Any Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AnyStatus">Any Status</SelectItem>
                <SelectItem value="ForSale">For Sale</SelectItem>
                <SelectItem value="ForRent">For Rent</SelectItem>
              </SelectContent>
            </Select>
            </li>
            <li>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Any Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AnyType">Any Type</SelectItem>
                <SelectItem value="Apartments">Apartments</SelectItem>
                <SelectItem value="Houses">Houses</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Garages">Garages</SelectItem>
                <SelectItem value="Lots">Lots</SelectItem>
              </SelectContent>
            </Select>
            </li>
            <li>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AllCountries">All Countries</SelectItem>
              </SelectContent>
            </Select>
            </li>
            <li>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All States" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AllStates">All States</SelectItem>
              </SelectContent>
            </Select>
            </li>
            <li>
              <button 
                className="w-[80px] flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              >
                <Image 
                  src="/more.svg" 
                  alt="More" 
                  width={16} 
                  height={16} 
                  className="mr-2"
                />
                <span>More</span>
            </button>
            </li>
           </ul>
          </div>
          <div className='flex flex-wrap'>
            {data.map((item, index) => (
              <PropertyCard key={index} data={item} />
            ))}
          </div>
          <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
          {data.map((item, index) => (
              <CarouselItem key={index} className='pl-2 lg:basis-[23%]'>
                <PropertyCard  data={item}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        </div>
    </div>
    </>
    
  )
}

export default Property