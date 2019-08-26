import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";



const panes = [
    { menuItem: 'Login', render: () => <LoginPage>Tab 1 Content</LoginPage> },
    
    { menuItem: 'Sign Up', render: () => <SignUp>Tab 2 Content</SignUp> },
   
  ]
  
  const NavTab = () => <Tab panes={panes} />
  
  export default NavTab;