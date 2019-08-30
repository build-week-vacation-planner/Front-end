import React from "react";
import TripInfo from "./TripInfo";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components"
import edit from '../styling/images/edit.svg';
import chat from '../styling/images/chat.svg';
import deletei from '../styling/images/deletei.svg';

const Trip = props => {
  const deleteTrip = () => {
    axiosWithAuth()
      .delete(
        `https://build-week-vacationplanner.herokuapp.com/vacation/delete/${props.trip.vacation.vacationid}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log(res);
        props.getTrip();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <StyledDiv>
      <StyledHeader>{props.trip.vacation.vacationlocation}</StyledHeader>
      <TripInfo
        tripData={props.trip}
        // destination={props.trip.vacation.vacationlocation} 
        startDate={props.trip.vacation.startdate}
        endDate={props.trip.vacation.enddate}
        places={props.trip.vacation.thingstodo}
      />
      <div>
        <Link to={`/trip-form-update/${props.trip.vacation.vacationid}`}>
          <StyledIcon className="edit-btn"><img src={edit} /> </StyledIcon>
        </Link>
        <StyledIcon onClick={deleteTrip}><img src={deletei} /></StyledIcon>
        <Link to={`/trip-chat/${props.trip.vacation.vacationid}`}>
          <StyledIcon className="edit-btn"><img src={chat} /></StyledIcon>
        </Link>
      </div>
    </StyledDiv>
  );
};



const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  height: 100px;
`

const StyledWrap = styled.div`
  display: inline-block;
  width: 600px;
`

const StyledIcon = styled.button`
  border: none;
  background: none;
`

const StyledHeader = styled.h1`
  font-size: 18px 
  color: #484848;
  line-height: 30px; 
  font-weight: 700;
`

export default Trip;
