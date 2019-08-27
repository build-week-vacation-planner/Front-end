import React from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";

//add data regarding existing Trips

const TripList = () => {
  const tripData = [
    {
      id: 1,
      destination: "NYC",
      startDate: "May 2",
      endDate: "May 14",
      places: ["Statue of Liberty", "Empire State Building", "Central Park"]
    },
    {
      id: 2,
      destination: "Paris",
      startDate: "June 10",
      endDate: "June 25",
      places: ["Eiffel Tower", "Louvre", "Versailles"]
    }
  ];

  return (
    <div>
      <Header />
      <h2>Existing Trips:</h2>
      tripData.map(trip =>
      {
        <Link to={`/trip/${id}`}>
          <div className="trip-preview">
            <h2>{trip.destination}</h2>
            <p>
              {trip.startDate} to {trip.endDate}
            </p>
            <span>"Arrow Icon"</span>
          </div>
        </Link>
      }
      )
      <Trip tripData={tripData} />
      <br />
      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
