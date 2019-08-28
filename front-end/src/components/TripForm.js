import React from "react";

const TripForm = props => {
  return (
    <div>
      <h3>New Trip</h3>
      <form>
        <input type="text" name="destination" placeholder="Enter destination" />
        <input type="text" name="startdate" placeholder="Enter start date" />
        <input type="text" name="enddate" placeholder="Enter end date" />
        <input type="text" name="places" placeholder="Enter place to see" />
        <button>Add another place</button>
        <button>Add Trip</button>
      </form>
    </div>
  );
};

export default TripForm;
