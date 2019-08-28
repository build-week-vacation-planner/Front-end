import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";

//add data regarding existing Trips
const initialTrip = [
  {
    vacationid: "",
    vacationlocation: "",
    startdate: "",
    enddate: "",
    thingstodo: []
  }
];

const TripList = props => {
  console.log("tripList props", props);
  const [user, setUser] = useState({});
  const [trip, setTrip] = useState([]);
  const [tripToEdit, setTripToEdit] = useState(initialTrip);
  const [editing, setEditing] = useState(false);
  const [newTrip, setNewTrip] = useState({
    vacationid: "",
    vacationlocation: "",
    startdate: "",
    enddate: "",
    thingstodo: []
  });

  const editTrip = () => {
    setEditing(true);
  };

  const saveEdit = (e, trip) => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://build-week-vacationplanner.herokuapp.com/vacation/{vacationid}`,
        tripToEdit,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
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

  const addTrip = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(
        `https://build-week-vacationplanner.herokuapp.com/{userid}/vacation`,
        newTrip,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log("axios post data", res);
        setNewTrip(res.data);
      })
      .catch(err => console.log(err.response));
  };
  // need to render props to pass addTrip down to TripForm

  const deleteTrip = trip => {
    axiosWithAuth()
      .delete(
        `https://build-week-vacationplanner.herokuapp.com/vacation/delete/{vacationid}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        const updatedTrip = trip.filter(trip => trip.id !== trip.id);
        setTrip(updatedTrip);
      })
      .catch(err => console.log(err.response));
  };

  const getTrip = () => {
    axiosWithAuth()
      .get(
        `https://build-week-vacationplanner.herokuapp.com/users/getcurrentuser`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        setTrip(res.data.vacationParticipants);
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
          <Link
            to={`/trip/${trip.vacation.vacationid}`}
            key={trip.vacation.vacationid}
          >
            <div className="trip-preview">
              <h2>{trip.vacation.vacationlocation}</h2>
              <p>
                {trip.vacation.startdate} to {trip.vacation.enddate}
              </p>
              <Trip {...props} trip={trip} deleteTrip={deleteTrip} />
              <span>"Arrow Icon"</span>
            </div>
          </Link>
        );
      })}

      <Link to="/trip-form">
        <button>Create a New Trip</button>
      </Link>
    </div>
  );
};

export default TripList;
