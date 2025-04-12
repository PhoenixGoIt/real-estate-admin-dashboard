"use client";
import React, { useState } from "react";
import { Input } from "@/components/shered/local/Input";
import { TypeSelect } from "@/components/shered/local/Selects";
import Link from "next/link";
import { property_list } from "@/lib/constants/link";
import Image from "next/image";
import { TextArea } from "@/components/shered/local/TextArena";
import MapBox from "@/components/shered/local/MapBox";
import Facility from "@/components/shered/local/Facility";
import InputFileUpload from "@/components/shered/mui/InputFileUpload";
import Button from "@/components/shered/local/Button2";
const AddProperty = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [square, setSquare] = useState("");
  const [amountBed, setAmountBed] = useState("");
  const [type, setType] = useState("");
  const [Description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [facility, setFacility] = useState("");
  return (
    <div className='ml-auto mr-auto w-[55%] h-full'>
      <h1 className='text-xl font-[700] text-primary_color mb-6'>
        Create Property
      </h1>
      <div className='bg-white w-full max-h-max rounded-lg p-5 mb-7'>
        <Link
          href={property_list}
          className='flex items-center justify-start mb-3'
        >
          <Image
            src={"/forward.svg"}
            alt='forward'
            width={15}
            height={15}
            className='w-auto h-auto'
          />
        </Link>
        <form className='flex'>
          <div className='mb-6 w-full ml-6'>
            <div className='mt-6'>
              <div className='mb-3'>
                <label className='text-md font-[500]'>
                  Name<span className='text-red-600'>*</span>
                </label>
              </div>
              <Input title='Name' />
            </div>

            <div className='flex mt-6 gap-6'>
              <div>
                <div className='mb-3'>
                  <label className='text-md font-[500]'>
                    Square<span className='text-red-600'>*</span>
                  </label>
                </div>
                <Input title='Square' />
              </div>
              <div>
                <div className='mb-3'>
                  <label className='text-md font-[500]'>
                    AmountBed<span className='text-red-600'>*</span>
                  </label>
                </div>
                <Input title='AmountBed' />
              </div>
            </div>

            <div className='mt-6'>
              <div className='mb-3'>
                <label className='text-md font-[500]'>
                  Price $<span className='text-red-600'>*</span>
                </label>
              </div>
              <Input title='Price $' width='100px' />
            </div>

            <div className='flex mt-8'>
              <TypeSelect />
              <span className='text-red-600 text-md font-[500]'>*</span>
            </div>

            <div className='mt-6'>
              <div className='mb-3'>
                <label className='text-md font-[500]'>Description</label>
              </div>
              <TextArea title='Description' />
            </div>
            <div className='mt-6'>
              <InputFileUpload title='Upload Images' />
            </div>
            <div className='w-[450px] h-auto mt-6'>
              <div className='flex items-center justify-center'>
                <div className='w-full max-w-3xl'>
                  <div className='text-md font-[500] mb-4'>
                    <label className='text-md font-[500]'>
                      Location<span className='text-red-600'>*</span>
                    </label>
                  </div>
                  <MapBox />
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <div className='mb-3'>
                <label className='text-lg font-[500]'>Facility:</label>
              </div>
              <Facility />
            </div>
            <div className='mt-12 flex justify-end'>
              <Button title='Сreate Property' type='submit' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
