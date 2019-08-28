import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

//add data regarding existing Trips
const initialTrip = [
  {
    id: "",
    destination: "",
    startDate: "",
    endDate: "",
    places: []
  }
];

const TripList = () => {
  const [tripToEdit, setTripToEdit] = useState(initialTrip);
  const [trip, setTrip] = useState([]);
  const [editing, setEditing] = useState(false);

  const editTrip = () => {
    setEditing(true);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios
      .put(
        `https://build-week-vacationplanner.herokuapp.com/vacation/{vacationid}`,
        tripToEdit
      )
      .then(res => {
        console.log("axios data", res);
        const updatedTrip = trip.map(trip =>
          trip.id === tripToEdit.id ? res.data : trip
        );
        setTrip(updatedTrip);
        setEditing(false);
      })
      .catch(err => console.log(err.response));
  };

  const getTrip = id => {
    axios
      .get(
        `https://build-week-vacationplanner.herokuapp.com/vacation/{vacationid}`
      )
      .then(res => {
        console.log(res.data);
        setTrip(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <div>
      <Header />
      <h2>Existing Trips:</h2>
      {trip.map(trip => {
        return (
          <Link to={`/trip/${trip.vacationid}`} key={trip.vacationid}>
            <div className="trip-preview">
              <h2>{trip.vacationlocation}</h2>
              <p>
                {trip.startdate} to {trip.enddate}
              </p>
              <span>"Arrow Icon"</span>
            </div>
          </Link>
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
