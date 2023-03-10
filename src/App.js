import "./App.css";

import MapDisplay from "./Components/Map/map";
import Pdf from "./Components/Pdf/pdf";
import { useState } from "react";
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

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function Cont() {
    return (
      <section id="container">Please specify coordinates to display</section>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (latitude !== null && longitude !== null) {
      console.log("Success");
      let zoom = 15;
      const position = [parseInt(latitude), parseInt(longitude)];
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
    } else {
      console.log("fail");
      console.log(typeof longitude);
    }
  }

  function Form() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Submit Coordinates</button>
      </form>
    );
  }

  function Display() {
    if (latitude === null && longitude === null) {
      return <MapDisplay latitude={latitude} longitude={longitude} />;
    } else {
      return <Cont />;
    }
  }

  return (
    <div className="App">
      <Form />
      <Display />
      <Pdf />
    </div>
  );
}

export default App;
