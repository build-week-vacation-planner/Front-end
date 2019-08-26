import React from "react";
import "./App.css";
import TripList from "./components/TripList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <TripList />
    </div>
  );
}

export default App;
