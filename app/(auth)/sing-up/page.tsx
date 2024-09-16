import SingUp from '@/components/SingUp/SingUp'
import React from 'react'
const page = () => {
  return (
    <section>
      <SingUp />
    </section>
  )
}

page.getLayout = (page: React.ReactNode) => page;


export default page