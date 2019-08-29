import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const TripForm = () => {
  return (
    <div>
      <Header />
      <StyledPack>
        <StyledDiv>
          <StyledHeader>New trip</StyledHeader>
          <form>
            <StyledGroup>
              <StyledLabel>Destination</StyledLabel>
              <StyledInput
                type="text"
                name="destination"
                placeholder="Enter your destination"
              />
            </StyledGroup>

            <StyledDate>
              <StyledGroup>
                <StyledLabel>Start date</StyledLabel>
                <StyledDates type="date" name="startdate" />
              </StyledGroup>

              <StyledGroup>
                <StyledLabel>End date</StyledLabel>
                <StyledDates type="date" name="enddate" />
              </StyledGroup>
            </StyledDate>

            <StyledGroup>
              <StyledLabel>Places</StyledLabel>
              <StyledInput
                type="text"
                name="places"
                placeholder="Enter place to see"
              />
              <StyledAdd>
                <a>+ Add another place</a>
              </StyledAdd>
            </StyledGroup>

            <StyledButton>Add Trip</StyledButton>
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

export default TripForm;
