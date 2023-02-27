import "./App.css";

import MapDisplay from "./Components/Map/map";
import Pdf from "./Components/Pdf/pdf";
import { useState } from "react";

function App() {
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");

  function Form() {
    return (
      <form>
        <input type="number" placeholder="Enter Latitude" />
        <input type="number" placeholder="Enter Longitude" />
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
