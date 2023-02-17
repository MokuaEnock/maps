import "./App.css";
import React, { useEffect } from "react";
import L from "leaflet";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup("Hello, world!").openPopup();
  }, []);

  return <section id="map"></section>;
}
