import React, { useState } from "react";
import "./index.css";

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={`color-circle ${color}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`selected-color ${selectedColor}`}>
          {selectedColor || "None"}{" "}
        </div>
      </div>

      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Picker />
    </div>
  );
};

export default App;
