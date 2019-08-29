import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components'

const Welcome = () => {
  return (
    <StyledDiv>
      <StyledWrapper>
      <StyledHeader>Welcome on Vacation Planner!</StyledHeader>
      <StyledP >Please login or sign up below</StyledP>
      <Link to="/signup">
        <StyledButton>Sign Up</StyledButton>
      </Link>
      <Link to="/login">
        <StyledButton primary>Login</StyledButton>
      </Link>
      </StyledWrapper>
    </StyledDiv>
  );
};

const StyledButton = styled.button`
  background-color: #FE5B5E;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  padding: 12px 25px;
  width: 190px; 
  border-radius: 4px;
  margin: 5px 10px 10px 0px;
  font-family: 'Cereal';
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  
  ${props => props.primary && css`
  background-color: white;
  color: #484848;
  border: 1px solid #EBEBEB;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Cereal;
  padding: 12px 25px; 
  border-radius: 4px;
  margin: 20px 0px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  `}

`

const StyledHeader = styled.h1`
  font-size: 24px 
  color: #484848;
  line-height: 30px; 
  margin-bottom: 30px;
  font-weight: 900;
`

const StyledP = styled.p`
  color:  #58626D;
  margin-bottom: 20px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

`

const StyledWrapper = styled.div`
  display: inline-block;
  width: 600px;
`

export default Welcome;
