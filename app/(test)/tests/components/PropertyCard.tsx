// components/PropertyCard.tsx
interface PropertyCardProps {
    name: string;
    price: string;
    location: string;
    image: string;
    icon: string;
  }
  
  const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, location, image, icon }) => {
    return (
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img src={image} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <img src={icon} alt="Property Icon" className="w-5 h-5" />
            <h3 className="text-lg font-semibold text-gray-200">{name}</h3>
          </div>
          <p className="text-sm text-gray-400">{location}</p>
          <p className="text-purple-500 font-bold mt-2">{price}</p>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;