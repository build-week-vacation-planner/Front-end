import React, { useState } from "react";
import "./App.css";
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

 import ChatIndex from './ChatApp/ChatIndex';
 import ChatApp from './ChatApp/ChatIndex'
 //import TestChatIndex from './ChatApp/MessageFolder/TestChatIndex'



function App() {
  return (
    <div className="App">
      <ChatIndex/>
      {/* <TestChatIndex/> */}
      <Route exact path="/" render={props => <Welcome {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props => <FormikSignupForm {...props} />} />
      <PrivateRoute exact path="/trip-list" component={TripList} />
      <PrivateRoute exact path="/trip-form" component={TripForm} />
      <PrivateRoute exact path="/trip-info" component={TripInfo} />
      <PrivateRoute exact path="/trip-messages" component={ChatApp} />
      <PrivateRoute path="/menu" component={Menu} />
    </div>
  );
}

export default App;
