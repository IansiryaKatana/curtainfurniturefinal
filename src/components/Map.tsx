import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Dragon Mart location coordinates
    const position: [number, number] = [25.1725, 55.4137];

    // Initialize map
    const map = L.map(mapRef.current).setView(position, 15);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker
    const marker = L.marker(position).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center; padding: 8px;">
        <strong style="display: block; font-size: 16px; margin-bottom: 4px;">VIP Curtains & Furniture</strong>
        <p style="margin: 4px 0; color: #6A8A8F; font-size: 14px;">Dragon Mart, International City</p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=25.1725,55.4137" 
          target="_blank" 
          rel="noopener noreferrer"
          style="color: #C9B27C; text-decoration: underline; font-size: 14px; font-weight: 500;"
        >
          Open in Google Maps
        </a>
      </div>
    `);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full min-h-[400px] relative z-0" />;
};

export default Map;
