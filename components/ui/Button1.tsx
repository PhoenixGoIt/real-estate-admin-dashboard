import React from 'react'

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className='ml-auto'>
      <button
        type='button'
        className='bg-primary_color text-white w-[140px] h-[50px] rounded-lg'
        onClick={onClick}
      >
        + Add Property
      </button>
    </div>
  )
}

export default Button