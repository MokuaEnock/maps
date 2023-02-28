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
  function Cont() {
    return (
      <section id="container">Please specify coordinates to display</section>
    );
  }

  function Ddisplay() {
    const [lat, lng, zoom] = [-1.2921, 36.8219, 15]; // Nairobi coordinates

    const position = [parseInt(lat), parseInt(lng)];

    if (lat === null && lng === null) {
      return <Cont />;
    } else {
      <MapContainer center={position} zoom={zoom} className="custom-map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Nairobi</Popup>
        </Marker>
      </MapContainer>;
    }
  }

  return <Ddisplay />;
};

export default MapDisplay;
