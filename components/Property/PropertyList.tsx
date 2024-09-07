"use client"

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
import Link from 'next/link'
import { GetAllProperty } from '@/lib/api/property/property-quary'


function Property() {
  const {data, isLoading} = GetAllProperty()
  return (
    <>
    <div className='w-full h-full'>
        <div className='flex items-center mb-6  '>
        <h1 className='text-black font-[700] text-3xl'>Property</h1>
        <Link href="/property-list/add-property" className='ml-auto'>
        <Button/>
        </Link>
        </div>
        <div className='bg-white w-full max-h-max rounded-lg p-5 mb-9'>
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
          <div className='w-full h-full grid gap-6 grid-cols-2 mt-6'>
            {isLoading 
              ? "Loading..."
              :data?.length
              ? data.map((item: any, index: any) => (
                <PropertyCard key={index} data={item} opt={"horizontal"}/>
                ))
              : "Data Error"
              }
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Property



// const r = 
//   ["https://s3-alpha-sig.figma.com/img/381f/f34d/8b852e126a37114f685e6654451d9886?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSidyoflYT8sbDxRNO9hv2iydqxS1b8fEYsqaztBJ2xlRZdN0x~njsDAsYqwgCvfqzbLS1hEwp0QEItABcFftYy4pzSND3IPjwi31p5XoHrtSyOxQ9dBWIUdLBPqgHuerzB2f96PHxtBHk5kqu--jLxPEn735zTYAOE0r0tauaMNC44J7dvSxy~82yPlh3Oet3sLDES~b8R45fKYBB5RumH0wjwfB70WDUXymj3tjf4FeaV9YQJTIpdYDFkdM4pMBEZLbbaOt-rOSkDkmAz09SRgqkaQCUAUKQVzWNHF02~hkL37SHDEwwTZLdwBLQ0YTGZjPP~qOSaKRy8CFZBNfg__", 
//   "https://s3-alpha-sig.figma.com/img/53fa/ca06/193aa81711bf7676271b20f0108c665a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLDhQ66F4rIzHRCG3vdFSwCbIwy3ooCGoB2p44ioYqzyxHM3tqWPFmYx47EPsIagYGztzEr-C5CXh-T-VsQOXgkPzb5GgtB8LLUlg958V6oGLHc~dRfvldLdk7UQzDLlFp7Wsjz-I9mcUFKONFKHY3OIkq7-Q7gVjxzu2D4vVXmw0Rf1c2FbbwcFxa3FWb3K8gZ0lMAqR20GYZg-VZtIcqdT2oJ7~TgPlL4PAVWNKrtyYd7QtFFm8sTku5SGV0MA41A3fmY2lQS2LO~5QxusoiuV6dF04ASyKigD3j34iuIhbafwBENBlVahIAjgriO2yVPJjKQXczHOcWhxuMOYlw__",
//   "https://s3-alpha-sig.figma.com/img/b769/7481/886e13886510c9182edac4bca6685184?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ET~RR0cEb7KR2wFxy8iwPpytWBF~ijbTiJu70iCrixV7slTJX42M4moy3BUQHEKzN-2QcZfucv7U7E82rw4uxochaxHIQAQ48E-e~phwCTJA6zHqAwKZWO7OoXSjU87CdPRCazDpWR8jPlF0NgTzmjwD8eIOV5xUAyV~Gv33ZVnk6gmeHnA82FDB598Oye62LsmT0l99N-rW7xFP5emaC1jHmEoG2O1Fx3ymeCuvTD9NTyC-9vo6UppeIBJSr~b6D7WaA57gfqxK~MSva3Ci0dKqrQN~JsCd-PrBTr8XZiKtXAlcaIumcVnWo1RYhMszttiU5Ckq9Ly09rE78v~UBg__", 
//   "https://s3-alpha-sig.figma.com/img/d05f/faac/f9f6e524e3a83933e136991e57fa0c30?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iUtssIeeSqSPrDTjYWGuoWUSIwQsMGN8RK1pFSOTizDajTj9XaM6XMDqSBjgVYLVdBtHAuULHq5NRtZFXozDFktfEqlrekpR~-Hw1J8aNVUJL~nk~8vlL7ylusHaaDIVhnVHZWW7SAi8P5di~T~z1J6hPZXGqhgSML-6F5iBvILkhH1gOGKaXUzvXxpMF7rgousRD~-jcgOiZmrqclHbSPZurOEosNRLzzPIjNGC3MCRi2aoBNn0sj80lD-XUqfHYQxQoIEV85rD9Qr9UUM8HXK9xdMfdk9wNJuPYf0K8Uc2BIyqc3Zt7C7IulU1Yv3p2Ac-N5UhZKfWI6tC-ybHwg__",
//   "https://s3-alpha-sig.figma.com/img/c641/d571/af993ca3fe1a5758b7dfcf0737ba17a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PrMAT005StwPBq0K~0YaA8OiYt6bdlPw786oLV9IT4SIMfpNxCVy-ZPSDs5x2OdEBxNce3MCGs-KdC286CEafGSnZzlY5m0IugZ6rvyzQKCBt24d79pp9h4grffsfQFoEvCgfxVM7DBd5PNtC~iS8WYFDonfk7oFRPJR2sMtpLo7bQp4dq4uHKfodYUjx9JOnLkdZOsepC4bQXdcHGUH8i8v6Y1Tfw46pnSads-6WfrHeiHHeJyfWgfhvTY1FpV4yOhkkk~pkPExO~12SDRBTjZutkiotIRLMi2n7xngldpgEROL5XtCBUAUgLL7wWGO55H~w4hjZ~sPnqLX0bINdw__",
//   "https://s3-alpha-sig.figma.com/img/b7da/5e7a/3bc708669b72d79fbbef355c74eb0a2d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGuPM4kcoNZcZ8jbX7OZeT5Q-oKfRexXHrV4IeLE~f7sGzVKN2sruenEL8dxrtH4yZZfW-pfIzuQQTwvuOFkKd46daEoyc3lbrnkzDuLYZoNYfC-ErBQC8v0k8YyLGgianRWt-faqQSGlXJeZbHGxDuq6Wh0fli~Wr8r~fe3Ha6RZmRIOZpOfUttfLg4irmAROy2fYviTI2pUuliqDOtaKfl0mitzkG7zCvm9jdpyIrGCrSygW4ZLKxMtbRJUbUIglFAQyw8wGO25uFXjYfgVORafDtwBxjaYzcGw6EbNOvHB4gsY08EKuzApS0NidI39tQQPL83I-DhDWqCDSvluw__",
//   "https://s3-alpha-sig.figma.com/img/ea6b/7a4b/79fb0610e27a8e5dea1d2f46eb687997?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ACD1h3qrmQOUtlWiKz4bQT8byZq5NvIiFRI1jp3PbHyLQgkfupZqyHLXOahIF--i0AouOXx0dUnufONOjPILNV7AQVnFZAHwx8gxynYeTBjjxAMWCJLvlcIBgGvWU32aCovum1k6AkeJ7NMJ87Te4Qfm50gSm2ZtdyaaZBnm0Nh0YWl8vR6OAxaJquRaQpkVLuW8Bytvtr42VvvAHapIJo5O~bNJ7xBS-PGlLUgV8b3OUu2dwcugow9atz9aOJfQJDGXHdQfbheKU4NHd2CDIjH2hX4CY0xtQWSImaRuVVH4c9BEhk2m~~aIBbQe3uq~LfBul49gE7kYJEnEFcpAFA__", 
//   "//s3-alpha-sig.figma.com/img/56e5/891a/99a7b0aa3ac2cb73c3c7c567fa24ffbc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=et0~OoyiH3pa85ws6R-jaQI3tr3cgPtPS~d6OqY5GE6yXDvHLJN4IKdQy8LkCk2rD866HBa4fKaMVQ2QnuEU9K-xb3gS6lR8~kFDnK5UsKxrbWYfqgZdIdAILHugc4rT7VolZ073Qjl-XSswzosiR9iCETs2h3oWLMSyTJUrHPIThjcw0aOQdyze6foTdxN1ocE6YqAp84Y3Pr~YzHdyEF7XQyCjayomvjEksk~TnICSEVh4YHeta1Zwl3va13LoOcLYcYTT74KCbSmmA~DdeycKFEQsZ5poVz9JIjvM8gTJso26qW9HomJSGCZA6S8x2v86HEIf1TkLwhuBjT~d0Q__"
// ]
