import { cn } from "@/lib/utils/utils";
import React from "react";
import { ButtonSharedProps } from "./@types/ButtonShared.types";



const ButtonShared: React.FC<ButtonSharedProps> = ({
  isPending,
  onClick,
  title,
  type,
  width,
  style,
  height,
}) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={cn(
          " relative w-full bg-primary_color text-white rounded-lg font-[400]",
          width === "full"
            ? "w-full"
            : width === "auto"
              ? "w-auto"
              : width
                ? `w-[${width}]`
                : "w-[140px]",
          height ? `h-[${height}]` : "h-[50px]",
          style,
        )}
        onClick={onClick}
      >
        {isPending? '' : title}
        {isPending? <div className='absolute top-[50%] left-[50%] w-[30px] h-[30px] translate-x-[-50%] translate-y-[-50%]'>
      <hr className='absolute w-[15px] h-[15px] border-0 rounded-full bg-[#19A68C] animate-spinSlow animation-delay--1.5s' />
      <hr className='absolute w-[15px] h-[15px] border-0 rounded-full bg-[#F63D3A] animate-spinSlow animation-delay--1s' />
      <hr className='absolute w-[15px] h-[15px] border-0 rounded-full bg-[#FDA543] animate-spinSlow animation-delay--0.5s' />
      <hr className='absolute w-[15px] h-[15px] border-0 rounded-full bg-[#193B48] animate-spinSlow' />
    </div> : ''}
      </button>
    </div>
  );
};

export default ButtonShared