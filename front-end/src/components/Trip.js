import React from "react";
import Chat from "./Chat";
import TripInfo from "./TripInfo";
import { Link } from "react-router-dom";

//

const Trip = props => {
  console.log(props);
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
      <Link to="/trip-form">
        <button className="edit-btn">Edit Trip</button>
      </Link>
      <button>Delete Trip</button>
    </div>
  );
};

export default Trip;
