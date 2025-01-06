import L from 'leaflet';

// Kustomisasi icon marker
const customMarker = new L.Icon({
  iconUrl: '/icon/icon.1.png', // Path ke gambar marker
  iconSize: [32, 32],          // Ukuran icon
  iconAnchor: [16, 32],        // Titik anchor icon
});

export default customMarker;
