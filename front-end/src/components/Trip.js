import React from "react";
import Chat from "./Chat";
import TripInfo from "./TripInfo";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Trip = props => {
  const deleteTrip = () => {
    axiosWithAuth()
      .delete(
        `https://build-week-vacationplanner.herokuapp.com/vacation/delete/${props.trip.vacation.vacationid}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log(res);
        props.getTrip();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="trip">
      <h1>{props.trip.vacation.vacationlocation}</h1>

      <Chat />
      <TripInfo
        tripData={props.trip}
        destination={props.trip.vacation.vacationlocation}
        startDate={props.trip.vacation.startdate}
        endDate={props.trip.vacation.enddate}
        places={props.trip.vacation.thingstodo}
      />
      <Link to={`/trip-form-update/${props.trip.vacation.vacationid}`}>
        <button className="edit-btn">Edit Trip</button>
      </Link>
      <button onClick={deleteTrip}>Delete Trip</button>
      <Link to={`/trip-chat/${props.trip.vacation.vacationid}`}>
        <button className="edit-btn">Trip Chat</button>
      </Link>
    </div>
  );
};

export default Trip;
