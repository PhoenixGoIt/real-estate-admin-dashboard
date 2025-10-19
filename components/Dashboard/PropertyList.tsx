"use client";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared/shadcn/carousel";
import { GetPropertyList } from "@/lib/api/property/property-quary";
import { PropertyCard } from "../shared";

export const PropertyList = () => {
  const { data, isLoading, error } = GetPropertyList();

  return (
    <section className='inline-block w-full  mt-6 rounded-lg bg-white p-5 shadow-md'>
      <div className='flex mb-4'>
        <h2 className='justify-start font-[600] text-xl'>Property List</h2>
      </div>
      <Carousel
        className='w-full'
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className='-ml-1'>
          {isLoading ? (
            "Loading..."
          ) : data?.data.length ? (
            data?.data.map((item: any, index: any) => (
              <CarouselItem key={index} className='pl-2 lg:basis-[26%]'>
                <PropertyCard data={item} />
              </CarouselItem>
            ))
          ) : (
            <span className='ml-auto mr-auto text-xl'>Data Error</span>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
