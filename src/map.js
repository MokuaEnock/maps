import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

function NairobiMap() {
  return (
    <MapContainer center={[-1.2921, 36.8219]} zoom={13} className="nairobi">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-1.2921, 36.8219]}>
        <Popup>
          Nairobi, the capital city of Kenya.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default NairobiMap;
