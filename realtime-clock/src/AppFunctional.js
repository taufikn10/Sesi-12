import React, { useState } from "react";
import "./App.css";

function AppFunctional() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <div className="App">
      <h1>Functional Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default AppFunctional;
