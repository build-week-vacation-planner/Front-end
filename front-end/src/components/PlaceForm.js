import React from "react";

const PlaceForm = () => {
  return (
    <div>
      <h3>Add a Place</h3>
      <form>
        <input type="text" name="destination" placeholder="Enter destination" />
        <input type="text" name="date" placeholder="Enter dates" />
        <input type="text" name="places" placeholder="Enter places" />
        <button>Add Place</button>
      </form>
    </div>
  );
};

export default PlaceForm;
