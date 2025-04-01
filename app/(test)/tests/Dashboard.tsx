// components/Dashboard.tsx
import StatsCard from "./components/StatsCard";
import Chart from "./components/Chart";
import PropertyCard from "./components/PropertyCard";

const Dashboard = () => {
  const stats = [
    { title: "Properties for Sale", value: 684, color: "blue" },
    { title: "Properties for Rent", value: 546, color: "orange" },
    { title: "Total Customer", value: 5732, color: "green" },
    { title: "Total City", value: 90, color: "purple" },
  ];

  const revenueData = [
    { month: "Jan", value: 800000 },
    { month: "Feb", value: 600000 },
    { month: "Mar", value: 400000 },
    { month: "Apr", value: 200000 },
    { month: "May", value: 600000 },
    { month: "Jun", value: 800000 },
    { month: "Jul", value: 500000 },
  ];

  const topAgents = [
    { name: "Bonny Chagur", image: "/images/agent1.jpg" },
    { name: "Chynita Heree", image: "/images/agent2.jpg" },
    { name: "David Yers", image: "/images/agent3.jpg" },
    { name: "Hayder Jahid", image: "/images/agent4.jpg" },
    { name: "Benny Chagur", image: "/images/agent5.jpg" },
  ];

  const latestSales = [
    {
      name: "Metro Jayakar Apartment",
      price: "$535",
      location: "North Carolina, USA",
      image: "/images/property1.jpg",
    },
    {
      name: "Leto Ji Hotel & Apartment",
      price: "$460",
      location: "Carolina Sun, UK",
      image: "/images/property2.jpg",
    },
    {
      name: "Star Sun Hotel & Apartment",
      price: "$500",
      location: "North Carolina, USA",
      image: "/images/property3.jpg",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-950 text-white p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search Property, Customer, etc.'
            className='p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
          <span className='text-sm text-gray-400'>
            Hawkins Maru - Company Manager
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold mb-4'>Total Revenue</h2>
          <Chart data={revenueData} />
          <p className='text-sm text-gray-400'>
            Last Month: $217,000 | Running Month: $236,535 (0.8%)
          </p>
        </div>

        <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold mb-4'>Property Referrals</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-gray-300'>Social Media</span>
              <span className='text-gray-300'>64%</span>
            </div>
            <div className='w-full bg-gray-800 h-2 rounded-full'>
              <div
                className='bg-purple-500 h-2 rounded-full'
                style={{ width: "64%" }}
              ></div>
            </div>
            {/* Дополнительные категории */}
            <div className='flex justify-between'>
              <span className='text-gray-300'>Website</span>
              <span className='text-gray-300'>36%</span>
            </div>
            <div className='w-full bg-gray-800 h-2 rounded-full'>
              <div
                className='bg-purple-500 h-2 rounded-full'
                style={{ width: "36%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>Top Agent</h2>
            {topAgents.map((agent, index) => (
              <div key={index} className='flex items-center space-x-2 mb-2'>
                <img
                  src={agent.image}
                  alt={agent.name}
                  className='w-10 h-10 rounded-full border-2 border-green-500'
                />
                <span className='text-gray-300'>{agent.name}</span>
              </div>
            ))}
          </div>
          <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>Customer</h2>
            <p className='text-gray-300'>Total Customers: 500K</p>
            <p className='text-gray-300'>New Customers This Month: 12K</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
        <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold mb-4'>Latest Sales</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {latestSales.map((sale, index) => (
              <PropertyCard
                key={index}
                {...sale}
                icon='/images/property-icon.png'
              />
            ))}
          </div>
        </div>

        <div className='bg-gray-900 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold mb-4'>Property List</h2>
          <div className='flex space-x-4 mb-4'>
            <button className='bg-purple-500 px-4 py-2 rounded-full text-white hover:bg-purple-600'>
              Popular
            </button>
            <button className='bg-gray-800 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700'>
              Recommended
            </button>
            <button className='bg-gray-800 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700'>
              Newest
            </button>
            <button className='bg-gray-800 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700'>
              Most Recent
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {latestSales.map((sale, index) => (
              <PropertyCard
                key={index}
                {...sale}
                icon='/images/property-icon.png'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
