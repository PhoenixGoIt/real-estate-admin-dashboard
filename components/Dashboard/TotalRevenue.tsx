import Count from '@/lib/Count';
import BarChart from '@/lib/chart/BarChart';
import Image from 'next/image'
import React from 'react'
import RevenueChart from '../ui/RevenueChart';

export const TotalRevenue = () => {
  return (
    <section className='mt-6 w-full h-[500px] bg-white rounded-lg p-5 shadow-md'>
        <RevenueChart />
    </section>
  )
}
