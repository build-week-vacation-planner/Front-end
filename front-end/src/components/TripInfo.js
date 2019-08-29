import React from "react";
import styled from "styled-components";

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

const StyledBold = styled.p`
  font-weight: 800;
  color: #484848; 
  margin-top: 15px;
  margin-bottom: 5px;
`

const StyledP = styled.p`
    color: #484848;
  font-weight: 400;
  margin-right: 35px;
`

const StyledHeader = styled.h1`
  font-size: 24px 
  color: #484848;
  line-height: 30px; 
  margin-bottom: 30px;
  font-weight: 900;
`

export default TripInfo;
