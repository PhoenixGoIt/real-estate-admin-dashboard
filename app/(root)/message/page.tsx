import Message from '@/components/Message/Message'
import React from 'react'

const page = () => {
  return (
    <section className='w-full h-full'>
      <h1 className='text-black font-[700] text-3xl mb-4'>Message</h1>
      <Message />
    </section>
  )
}

export default page