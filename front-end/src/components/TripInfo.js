import React from "react";
import styled from "styled-components";

const TripInfo = props => {
  return (
    <div>
      <h2>{props.destination}</h2>
      <StyledP>{props.startDate} - {props.endDate}</StyledP>
      <StyledP>{props.places}</StyledP>
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
  padding: 5px;
`

const StyledHeader = styled.h1`
  font-size: 18px 
  color: #484848;
  line-height: 30px; 
  margin-bottom: 30px;
  font-weight: 600;
  align-self: center;
`

export default TripInfo;
