import "./App.css";

import MapDisplay from "./Components/Map/map";
import Pdf from "./Components/Pdf/pdf";
import { useState } from "react";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ latitude, longitude });
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

  return (
    <div className="App">
      <Form />
      <MapDisplay latitude={latitude} longitude={longitude} />
      <Pdf />
    </div>
  );
}

export default App;
