import "./App.css";

import MapDisplay from "./Components/Map/map";
import Pdf from "./Components/Pdf/pdf";
import { useState } from "react";

function App() {
  let [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("printed");
  }

  function Form() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Latitude"
          value={formData.latitude}
          onChange={(e) => {
            setFormData({ ...formData, latitude: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Enter Longitude"
          value={formData.longitude}
          onChange={(e) => {
            setFormData({ ...formData, longitude: e.target.value });
          }}
        />
        <button type="submit">Submit coordinates</button>
      </form>
    );
  }

  return (
    <div className="App">
      <Form />
      <MapDisplay />
      <Pdf />
    </div>
  );
}

export default App;
