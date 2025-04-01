// components/Chart.tsx
interface ChartData {
  month: string;
  value: number;
}

const Chart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  return (
    <div className='space-y-4'>
      {data.map((item, index) => (
        <div key={index} className='flex justify-between items-center'>
          <span className='text-gray-300'>{item.month}</span>
          <div className='w-3/4 bg-gray-800 h-4 rounded-full shadow-inner'>
            <div
              className='bg-blue-500 h-4 rounded-full shadow-md'
              style={{ width: `${(item.value / 800000) * 100}%` }}
            ></div>
          </div>
          <span className='text-gray-300'>${item.value / 1000}K</span>
        </div>
      ))}
    </div>
  );
};

export default Chart;
