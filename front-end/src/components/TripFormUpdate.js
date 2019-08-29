import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const TripFormUpdate = props => {
  const [newVacation, setNewVacation] = useState({
    vacationlocation: "",
    thingstodo: "",
    startdate: "",
    enddate: ""
  });

  const [userid, setUserId] = useState();

  const id = props.match.params.id;

  const update = id => {
    axiosWithAuth()
      .put(
        `https://build-week-vacationplanner.herokuapp.com/vacation/${id}/`,
        newVacation
      )
      .then(res => {
        console.log(res);
        props.history.push("/trip-list");
      })
      .catch(err => {
        console.error(err.response);
      });
  };

  const getData = id => {
    axiosWithAuth()
      .get(
        `https://build-week-vacationplanner.herokuapp.com/vacation/${id}/`,
        newVacation
      )
      .then(res => {
        console.log(res);
        setNewVacation({
          vacationlocation: res.data.vacationlocation,
          thingstodo: res.data.thingstodo,
          startdate: res.data.startdate,
          enddate: res.data.enddate
        });
      })
      .catch(err => {
        console.error(err.response);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    update(id);
  };

  useEffect(() => {
    console.log("getting data");
    getData(id);
  }, [id]);

  const handleChange = e => {
    return setNewVacation({
      ...newVacation,
      [e.target.name]: e.target.value
    });
  };

  const [friendList, setFriendList] = useState();

  const addFriend = () => {
    axiosWithAuth()
      .put(
        `https://build-week-vacationplanner.herokuapp.com/user/${friendList}/vacation/${id}`
      )
      .then(res => {
        console.log(res);
        props.history.push("/trip-list");
      })
      .catch(err => console.log(err.response));
  };

  const handleFriendChange = e => {
    return setFriendList(e.target.value);
  };

  const handleFriend = e => {
    e.preventDefault();
    addFriend();
    setFriendList("");
  };

  return (
    <div>
      <Header />
      <StyledPack>
        <StyledDiv>
          <StyledHeader>Update trip</StyledHeader>
          <form onSubmit={handleSubmit}>
            <StyledGroup>
              <StyledLabel>Destination</StyledLabel>
              <StyledInput
                type="text"
                name="vacationlocation"
                placeholder="Enter your destination"
                onChange={handleChange}
                value={newVacation.vacationlocation}
              />
            </StyledGroup>

            <StyledGroup>
              <StyledLabel>Start date</StyledLabel>
              <StyledInput
                type="text"
                name="startdate"
                placeholder="Start Date"
                onChange={handleChange}
                value={newVacation.startdate}
              />
            </StyledGroup>

            <StyledGroup>
              <StyledLabel>End date</StyledLabel>
              <StyledInput
                type="text"
                name="enddate"
                placeholder="End Date"
                onChange={handleChange}
                value={newVacation.enddate}
              />
            </StyledGroup>

            <StyledGroup>
              <StyledLabel>Places</StyledLabel>
              <StyledInput
                type="text"
                name="thingstodo"
                placeholder="Enter place to see"
                onChange={handleChange}
                value={newVacation.thingstodo}
              />
              <StyledAdd>
                <a>+ Add another place</a>
              </StyledAdd>
            </StyledGroup>

            <StyledButton>Update Trip</StyledButton>
          </form>

          <form onSubmit={handleFriend}>
            <StyledGroup>
              <StyledLabel>Add Friend</StyledLabel>
              <StyledInput
                type="text"
                name="friendList"
                placeholder="Add Friend"
                onChange={handleFriendChange}
                value={friendList}
              />
            </StyledGroup>
            <StyledButton>Add Friend</StyledButton>
          </form>
        </StyledDiv>
      </StyledPack>
    </div>
  );
};

// Styled components
const StyledInput = styled.input`
  width: 600px;
  height: 48px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 21px;
  padding-left: 12px;
  margin-bottom: 19px;

  :focus {
    border: 2px solid #008489;
    outline: none;
    padding-left: 11px;

    :placeholder {
      color: #484848;
    }
  }
`;

const StyledDates = styled.input`
  width: 295px;
  height: 48px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 21px;
  padding-left: 12px;
  margin-bottom: 19px;
  font-family: "Cereal";
  color: #767676;

  :focus {
    border: 2px solid #008489;
    outline: none;
    padding-left: 11px;
  }

  ::placeholder {
    color: #767676;
    font-family: "Cereal";
  }
`;

const StyledDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledDiv = styled.div`
  width: 600px;
  margin-top: 40px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: #484848;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 700;
`;

const StyledButton = styled.button`
  background-color: #fe5b5e;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Cereal";
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;

  :hover {
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
    cursor: pointer;
  }
`;

const StyledAdd = styled.div`
  display: flex;
  width: 100%;
  color: #008489;
  flex-direction: flex-end;
  width: 600px;
  display: flex;
  justify-content: flex-end;
  margin-top: -5px;
`;

const StyledHeader = styled.h1`
  font-size: 24px 
  color: #484848;
  line-height: 30px; 
  margin-bottom: 30px;
  font-weight: 900;
`;

const StyledPack = styled.div`
  display: flex;
  justify-content: center;
`;

export default TripFormUpdate;
