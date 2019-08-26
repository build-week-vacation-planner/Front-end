import React from "react";
import Trip from "./Trip";

//add data regarding existing Trips
const placeData = [{ destination: "Halekala", date: "May2-31" }];

const TripList = () => {
  return (
    <div>
      <button>Create a New Trip</button>
      <Trip />
    </div>
  );
};

export default TripList;
