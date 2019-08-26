import React from "react";
import Trip from "./Trip";
import TripForm from "./TripForm";

//add data regarding existing Trips
const tripData = {
  destination: "NYC",
  startdate: "May 2",
  enddate: "May 14",
  places: ["Statue of Liberty", "Empire State Building", "Central Park"]
};

const TripList = () => {
  return (
    <div>
      <button>Create a New Trip</button>
      <TripForm />
      <h2>Existing Trips:</h2>
      <Trip tripData={tripData} />
    </div>
  );
};

export default TripList;
