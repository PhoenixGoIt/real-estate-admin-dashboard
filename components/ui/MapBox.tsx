import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Position {
  lat: number;
  lng: number;
}

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
}

interface MapBoxProps {
  defaultCity?: string;
}

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapBox = ({ defaultCity = 'Москва' }: MapBoxProps) => {
  const [position, setPosition] = useState<Position | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NominatimResult[]>([]);
  const [searchResultPosition, setSearchResultPosition] = useState<Position | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [userCity, setUserCity] = useState<string | null>(null);

  // Получение города на основе координат пользователя
  const fetchCityFromCoords = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      if (!response.ok) {
        throw new Error('Ошибка при получении города');
      }
      const data = await response.json();
      return data.address.city || data.address.town || data.address.village;
    } catch (error) {
      console.error('Ошибка при обратном геокодировании:', error);
      return null;
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ lat: latitude, lng: longitude });

          const city = await fetchCityFromCoords(latitude, longitude);
          if (city) {
            setUserCity(city);
          }
        },
        () => {
          console.error('Не удалось получить местоположение пользователя');
        }
      );
    }
  }, []);

  // Поиск местоположения по запросу только в рамках текущего города
  const handleSearch = async (query: string) => {
    if (query.trim() === '' || !userCity) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )},${encodeURIComponent(userCity)}&format=json&limit=5`
      );

      if (!response.ok) {
        throw new Error('Ошибка при запросе поиска');
      }

      const results: NominatimResult[] = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.error('Ошибка при поиске местоположения:', error);
    }
  };

  // Когда пользователь выбирает место из списка
  const handleSelectLocation = (lat: string, lon: string, displayName: string) => {
    const selectedPosition = { lat: parseFloat(lat), lng: parseFloat(lon) };
    setSearchResultPosition(selectedPosition);
    setPosition(selectedPosition);
    setSearchQuery(displayName); // Обновляем input выбранным адресом
    setSearchResults([]); // Закрываем выпадающий список
  };

  // Переключение видимости карты
  const toggleMapVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    setIsMapVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full">
      <div className="relative mb-4">
        <input
          type="text"
          className="border p-2 rounded-md w-full"
          placeholder="Поиск местоположения"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />

        {searchResults.length > 0 && (
          <ul className="absolute z-10 bg-white border rounded-md shadow-md w-full mt-1 max-h-60 overflow-auto">
            {searchResults.map((result) => (
              <li
                key={result.lat + result.lon}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelectLocation(result.lat, result.lon, result.display_name)}
              >
                {result.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={toggleMapVisibility}
        className="mb-4 bg-blue-500 text-white p-2 rounded-md"
      >
        {isMapVisible ? 'Скрыть карту' : 'Показать карту'}
      </button>

      {isMapVisible && position && (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={defaultIcon}>
            <Popup>Текущее местоположение</Popup>
          </Marker>

          {searchResultPosition && (
            <Marker position={searchResultPosition} icon={defaultIcon}>
              <Popup>Результат поиска</Popup>
            </Marker>
          )}

          <ClickMarker setPosition={setPosition} />
        </MapContainer>
      )}
    </div>
  );
};

// Компонент для установки маркера при клике на карте
function ClickMarker({ setPosition }: { setPosition: (pos: Position) => void }) {
  const map = useMap();

  useEffect(() => {
    map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
    });
  }, [map, setPosition]);

  return null;
}

export default MapBox;
