'use client'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    fetch('/locations.json')
      .then((response) => response.json())
      .then((data) => setMarkers(data))
      .catch((error) => console.error("Error loading JSON:", error));

    // Cleanup function for map when component unmounts
    return () => {
      // Optional cleanup (depends on Leaflet's behavior in Next.js)
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-sky-500 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="p-6 border-b text-center flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white mb-4">Persebaran Produk</h2>
          <p className="text-white">Berikut adalah peta persebaran produk kami di wilayah Sumatra Barat.</p>
        </div>

        <div className="map-container">
          <MapContainer
            center={[0.9471, 100.4172]}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                icon={marker.icon ? L.icon({ iconUrl: marker.icon, iconSize: [50, 50], iconAnchor: [16, 32], popupAnchor: [0, -32] }) : undefined}
              >
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
