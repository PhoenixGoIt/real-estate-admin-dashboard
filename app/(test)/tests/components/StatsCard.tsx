// components/StatsCard.tsx
interface StatsCardProps {
  title: string;
  value: number;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, color }) => {
  return (
    <div className='bg-gray-900 p-4 rounded-lg text-center shadow-md'>
      <h3 className='text-sm text-gray-400'>{title}</h3>
      <p className={`text-2xl font-bold text-${color}-500`}>{value}</p>
    </div>
  );
};

export default StatsCard;
