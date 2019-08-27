import React from "react";
import Chat from "./Chat";
import TripInfo from "./TripInfo";
import { Link } from "react-router-dom";

//

const Trip = props => {
  console.log(props);
  return (
    <div className="trip">
      <h1>New York City!</h1>

      <Chat />
      <TripInfo
        tripData={props.tripData}
        destination={props.tripData.destination}
        startDate={props.tripData.startdate}
        endDate={props.tripData.enddate}
        places={props.tripData.places}
      />
      <Link to="/trip-form">
        <button>Edit Trip</button>
      </Link>
    </div>
  );
};

export default Trip;
