import React from "react";
import { Link } from "react-router-dom";
import logo from '../styling/images/logo.svg';
import logout from '../styling/images/logout.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
     {/*  <h1>Vacation Planner</h1>
      <Link to="/menu">
        <button>Hamburger Button</button>
      </Link> */}
        <StyledDiv>
          <StyledWrap>
            <Link to="/trip-list">
            <img src={logo} alt="logo" />
            </Link>
          </StyledWrap>
          <StyledWrap>
            <img src={logout} alt="logout" />
            <Link to="/">
            <StyledP>Logout</StyledP>
          </Link>
          </StyledWrap>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const StyledWrap = styled.a`
  height: 100%;
  margin: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
`

const StyledP = styled.p`
color: #58626d;
margin-left: 5px;
`

export default Header;
