import React from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";

//add data regarding existing Trips

const TripList = () => {
  return (
    <div>
      <Header />
      <h2>Existing Trips:</h2>
      {/* {tripData.map(trip => {
        <div className="trip-preview">
          <h2>{trip.destination}</h2>
          <p>
            {trip.startDate} to {trip.endDate}
          </p>
          <span>"Arrow Icon"</span>
        </div>;
      })} */}
      <Trip />
      <br />
      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
