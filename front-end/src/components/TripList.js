import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

//add data regarding existing Trips
// const tripData = [
//   {
//     id: 1,
//     destination: "NYC",
//     startDate: "May 2",
//     endDate: "May 14",
//     places: ["Statue of Liberty", "Empire State Building", "Central Park"]
//   },
//   {
//     id: 2,
//     destination: "Paris",
//     startDate: "June 10",
//     endDate: "June 25",
//     places: ["Eiffel Tower", "Louvre", "Versailles"]
//   }
// ];

const TripList = () => {
  const [trip, setTrip] = useState([]);

  const getTrips = id => {
    axios
      .get(`https://build-week-vacationplanner.herokuapp.com/vacation/${id}`)
      .then(res => {
        console.log(res);
        setTrip(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      <Header />
      <h2>Existing Trips:</h2>
      {trip.map(trip => {
        return (
          <div className="trip-preview">
            <h2>{trip.destination}</h2>
            <p>
              {trip.startDate} to {trip.endDate}
            </p>
            <span>"Arrow Icon"</span>
          </div>
        );
      })}
      <Trip trip={trip} />
      <br />
      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
