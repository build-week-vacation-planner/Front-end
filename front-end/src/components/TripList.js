import React, { useState } from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

//add data regarding existing Trips

const TripList = () => {
  const [vacations, setVacations] = useState();

  const fetchVacations = id => {
    axios
      .get(`https://build-week-vacationplanner.herokuapp.com/vacation/${id}`)
      .then(res => {});
  };
  return (
    <div>
      <Header />
      <h2>Existing Trips:</h2>

      {/* <Trip /> */}
      <br />
      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
