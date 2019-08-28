import React from "react";
import Chat from "./Chat";
import TripInfo from "./TripInfo";
import { Link } from "react-router-dom";

//

const Trip = props => {
  console.log(props);
  return (
    <div className="trip">
      <h1>{props.trip.destination}</h1>

      <Chat />
      <TripInfo
        tripData={props.trip}
        destination={props.trip.destination}
        startDate={props.trip.startdate}
        endDate={props.trip.enddate}
        places={props.trip.places}
      />
      <Link to="/trip-form">
        <button>Edit Trip</button>
      </Link>
    </div>
  );
};

export default Trip;
