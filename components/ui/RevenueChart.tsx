"use client"
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  lastMonth: number;
  runningMonth: number;
}

const data: DataItem[] = [
  { name: 'Jan', lastMonth: 800000, runningMonth: 450000 },
  { name: 'Feb', lastMonth: 600000, runningMonth: 350000 },
  { name: 'Mar', lastMonth: 580000, runningMonth: 340000 },
  { name: 'Apr', lastMonth: 400000, runningMonth: 200000 },
  { name: 'May', lastMonth: 700000, runningMonth: 550000 },
  { name: 'Jun', lastMonth: 700000, runningMonth: 550000 },
  { name: 'Jul', lastMonth: 500000, runningMonth: 350434 },
];

const RevenueChart: React.FC = () => {
  const { totalRevenue, percentageChange } = useMemo(() => {
    const totalRevenue = data.reduce((sum, item) => sum + item.runningMonth, 0);
    const lastMonthRevenue = data[data.length - 2].lastMonth;
    const runningMonthRevenue = data[data.length - 1].runningMonth;
    const percentageChange = ((runningMonthRevenue - lastMonthRevenue) / lastMonthRevenue * 100);
    
    return { 
      totalRevenue, 
      percentageChange: percentageChange.toFixed(1)
    };
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 ">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Total Revenue</h2>
          <div className="flex items-center">
            <span className="text-3xl font-bold">${(totalRevenue / 1000).toFixed(0)}k</span>
            <span className={`ml-2 px-2 py-1 text-sm rounded ${parseFloat(percentageChange) > 0 ? 'bg-green-100 text-green-800 rounded-lg' : 'bg-red-100 text-red-800 rounded-lg'}`}>
              {percentageChange}%
            </span>
          </div>
          <p className="text-sm text-gray-500">Than last month</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>
      <ResponsiveContainer width="100%" height={360} >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value: number) => `${value / 1000}k`} />
          <Tooltip 
            formatter={(value: number) => [`$${(value / 1000).toFixed(0)}k`, 'Revenue']}
            labelFormatter={(label: string) => `Month: ${label}`}
          />
          <Legend />
          <Bar dataKey="lastMonth" fill="#475BE8" name="Last Month"  />
          <Bar dataKey="runningMonth" fill="#CFC8FF" name="Running Month" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;