"use client"
import React, { useState, useEffect } from 'react';

const data = [
  { name: 'Social Media', value: 64, color: '#8884d8' },
  { name: 'Marketpaces', value: 40, color: '#82ca9d' },
  { name: 'Websites', value: 50, color: '#ffc658' },
  { name: 'Digital Ads', value: 80, color: '#ff8042' },
  { name: 'Others', value: 15, color: '#ff6b6b' },
];

const PropertyReferralsChart = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Задержка для начала анимации после рендеринга компонента
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-xl font-semibold mb-4">Property Referrals</h2>
      <div className="space-y-4 h-full">
        {data.map((item) => (
          <div key={item.name} className="block h-16">
            <div className='flex'>
            <div className="w-32 text-gray-600 font-[600] text-lg mb-3">{item.name}</div>
            <div className="w-12 text-right text-lg font-[600] ml-auto">
              {animate ? `${item.value}%` : '0%'}
            </div>
            </div>

            <div className="flex-grow bg-gray-200 rounded-full overflow-hidden h-2">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: animate ? `${item.value}%` : '0%',
                  backgroundColor: item.color 
                }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReferralsChart;