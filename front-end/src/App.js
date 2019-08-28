import React, { useState } from "react";
import "./App.css";
import TripList from "./components/TripList";
import { Route } from "react-router-dom";
import TripForm from "./components/TripForm";
import Welcome from "./components/Welcome";
import TripInfo from "./components/TripInfo";
import Chat from "./components/Chat";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import Menu from "./components/Menu";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Route exact path="/" render={props => <Welcome {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props => <SignupForm {...props} />} />
      <Route
        path="/trip-list"
        render={props => <TripList {...props} user={user} setUser={setUser} />}
      />
      <Route path="/trip-form" render={props => <TripForm {...props} />} />
      <Route path="/trip-info" render={props => <TripInfo {...props} />} />
      <Route path="/trip-messages" render={props => <Chat {...props} />} />
      <Route exact path="/menu" render={props => <Menu {...props} />} />
    </div>
  );
}

export default App;
