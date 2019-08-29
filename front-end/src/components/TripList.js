import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import Header from "./Header";
//import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
import styled from "styled-components";

//add data regarding existing Trips
const initialTrip = [
  {
    vacationid: "",
    vacationlocation: "",
    startdate: "",
    enddate: "",
    thingstodo: []
  }
];

const TripList = props => {
  // console.log("tripList props", props);
  const [user, setUser] = useState({});
  const [trip, setTrip] = useState([]);
  const [tripToEdit, setTripToEdit] = useState(initialTrip);
  const [editing, setEditing] = useState(false);
  const [newTrip, setNewTrip] = useState({
    vacationid: "",
    vacationlocation: "",
    startdate: "",
    enddate: "",
    thingstodo: []
  });

  const editTrip = () => {
    setEditing(true);
  };

  const saveEdit = (e, trip) => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://build-week-vacationplanner.herokuapp.com/vacation/{vacationid}`,
        tripToEdit,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        console.log("axios data", res);
        const updatedTrip = trip.map(trip =>
          trip.id === tripToEdit.id ? res.data : trip
        );
        setTrip(updatedTrip);
        setEditing(false);
      })
      .catch(err => console.log(err.response));
  };

  // const addTrip = event => {
  //   event.preventDefault();
  //   axiosWithAuth()
  //     .post(
  //       `https://build-week-vacationplanner.herokuapp.com/{userid}/vacation`,
  //       newTrip,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log("axios post data", res);
  //       setNewTrip(res.data);
  //     })
  //     .catch(err => console.log(err.response));
  // };

  const getTrip = () => {
    axiosWithAuth()
      .get(
        `https://build-week-vacationplanner.herokuapp.com/users/getcurrentuser`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        // console.log(res.data);
        setUser(res.data);
        setTrip(res.data.vacationParticipants);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <div>
      <Header />
      <StyledDiv>
        <StyledWrap>
          <StyledWrapper>
            <StyledHeader>My trips</StyledHeader>
            <Link to="/trip-form">
              <StyledButton>Create a New Trip</StyledButton>
            </Link>
          </StyledWrapper>
          {trip.map(trip => {
            return (
              <div className="trip-preview">
                <Trip
                  {...props}
                  trip={trip}
                  setTrip={setTrip}
                  getTrip={getTrip}
                />
                <span>"Arrow Icon"</span>
              </div>
            );
          })}
        </StyledWrap>
      </StyledDiv>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: #FF5B5E;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Cereal;
  border: none;
  padding: 12px 25px; 
  border-radius: 4px;
  margin: 20px 0px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWrap = styled.div`
  display: inline-block;
  width: 600px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 0px;
  color: #484848;
  font-weight: 900;
`;

export default TripList;
