import React from 'react'
import Search from '../ui/Search'

const Message = () => {
  return (
    <div className='bg-white w-full h-[93%] rounded-lg mb-6 pr-6 pl-6'>
        <div className='p-3 h-full mb-3 w-[29%] border-r border-gray-300'>
            <div className='mb-3'>
                <Search title='Search' className='w-full pl-10 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500'/>
            </div>
            <div>
                <div className='p-3 flex items-center h-[75px] hover:bg-primary_color hover:text-white rounded-lg transition-all duration-200'>
                    <div className='bg-black w-[40px] h-[40px] rounded-full'></div>
                    <div className='ml-3'>
                        <div className='text-md mb-1'>Jone Anders</div>
                        <div className='text-xs'>Hello, How are you...?</div>
                    </div>
                    <div className='text-sm ml-auto mb-5'>16:34</div>
                </div>
            </div>
        </div>
        <div className='w-[70%]'></div>
    </div>
  )
}

export default Message