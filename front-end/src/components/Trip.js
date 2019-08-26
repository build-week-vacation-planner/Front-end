import React from "react";
import TripForm from "./TripForm";
import Chat from "./Chat";

const Trip = props => {
  return (
    <div>
      <h1>Hawaii!</h1>
      <Chat />
      //mapping existing place informtion
      <TripForm />
      //add new place information
    </div>
  );
};

export default Trip;
