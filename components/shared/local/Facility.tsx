import React, { useState } from "react";

const initialFacility = {
  bath: false,
  kitchen: true,
  balcony: false,
  wifi: true,
  parkingArea: true,
  smokingArea: true,
};

const Facility = () => {
  const [facility, setFacility] = useState(initialFacility);

  // Обработчик клика для переключения состояния
  const handleToggle = (key: keyof typeof facility) => {
    setFacility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {Object.entries(facility).map(([key, isActive]) => (
        <div
          key={key}
          onClick={() => handleToggle(key as keyof typeof facility)}
          className={`cursor-pointer p-1 w-auto h-auto flex items-center justify-center rounded-md transition-colors select-none ${
            isActive
              ? "ring-1 ring-gray-300 text-black"
              : "bg-primary_color text-white"
          }`}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default Facility;
