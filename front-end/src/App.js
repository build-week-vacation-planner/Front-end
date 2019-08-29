import React, { useState } from "react";
import TripList from "./components/TripList";
import { Route } from "react-router-dom";
import TripForm from "./components/TripForm";
import Welcome from "./components/Welcome";
import TripInfo from "./components/TripInfo";
//import Chat from "./components/Chat";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import Menu from "./components/Menu";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import FormikSignupForm from "./components/SignupForm";
import GlobalStyle from "./styling/Global";
import styled from "styled-components";

import ChatIndex from "./ChatApp/ChatIndex";
import ChatApp from "./ChatApp/ChatIndex";

import ChatBotApp from './ChatBackup/ChatBotApp'

function App() {
  return (
    <div className="App">
      <ChatIndex />
      {/* <ChatBotApp/> */}

      <Route exact path="/" render={props => <Welcome {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props => <FormikSignupForm {...props} />} />
      <PrivateRoute path="/trip-list" component={TripList} />
      <PrivateRoute path="/trip-form" component={TripForm} />
      <PrivateRoute path="/trip-info" component={TripInfo} />
      <PrivateRoute path="/trip-messages" component={ChatBotApp} />
      <PrivateRoute path="/menu" component={Menu} />
      <GlobalStyle />
    </div>
  );
}

export default App;
