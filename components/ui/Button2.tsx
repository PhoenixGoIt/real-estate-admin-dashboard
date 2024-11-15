import { cn } from '@/lib/utils';
import React from 'react'

interface ButtonProps {
  onClick?: () => void;
  title: string
  type?: "submit" | "reset" | "button" | undefined
  width?: string | "full" | "auto",
  style?: string,
  height?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, title, type, width, style, height }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={cn(
          'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          width === 'full' ? 'w-full' : width === 'auto' ? 'w-auto' : width ? `w-[${width}]` : 'w-[140px]',
          height ? `h-[${height}]` : 'h-[50px]',
          style
        )}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button