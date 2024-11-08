import React from 'react'

interface ButtonProps {
  onClick?: () => void;
  title: string
  type?: "submit" | "reset" | "button" | undefined
}

const Button: React.FC<ButtonProps> = ({ onClick, title, type }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className='bg-primary_color text-white w-[140px] h-[50px] rounded-lg'
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button