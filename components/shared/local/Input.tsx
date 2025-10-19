"use client";
import { cn } from "@/lib/utils/utils";
import React from "react";
import { InputProps } from "./@types/Input.types";


const Input: React.FC<InputProps> = ({
  title,
  width,
  type,
  id,
  required,
  value,
  onChange,
  register,
}) => {
  return (
    <div className='w-full relative flex-grow block lg:block'>
      <input
        required={required}
        id={id}
        type={type || "text"}
        placeholder={title}
        value={value}
        onChange={onChange}
        {...register}
        className={cn(
          width
            ? `pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none w-${width}`
            : `w-full pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none`,
        )}
      />
    </div>
  );
};
export default Input