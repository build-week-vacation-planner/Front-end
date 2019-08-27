import React from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";

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
      <Header />
      <h2>Existing Trips:</h2>
      <Trip tripData={tripData} />
      <br />
      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
