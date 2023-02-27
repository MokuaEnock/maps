import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapDisplay = (latitude, longitude) => {
  const [lat, lng, zoom] = [-1.2921, 36.8219, 13]; // Nairobi coordinates

  const position = [lat, lng];
  console.log(latitude, longitude);

  return (
    <MapContainer center={position} zoom={zoom} className="custom-map">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Nairobi</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDisplay;
