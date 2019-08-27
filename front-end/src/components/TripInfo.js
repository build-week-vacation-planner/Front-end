import React from "react";

const TripInfo = props => {
  return (
    <div>
      <h3>Your Trip:</h3>
      <h2>{props.destination}</h2>
      <p>{props.startDate}</p>
      <p>{props.endDate}</p>
      <p>{props.places}</p>
    </div>
  );
};

export default TripInfo;
