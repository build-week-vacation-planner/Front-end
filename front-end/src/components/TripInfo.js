import React from "react";

const TripInfo = props => {
  return (
    <div>
      <h3>Your Trip:</h3>
      <h2>{props.trip.vacation.vacationlocation}</h2>
      <p>{props.trip.vacation.startDate}</p>
      <p>{props.trip.vacation.endDate}</p>
      <p>{props.trip.vacation.places}</p>
    </div>
  );
};

export default TripInfo;
