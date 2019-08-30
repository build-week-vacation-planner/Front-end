# Vacation Planner

Vacation Planner is an app that gives anywho who would like to travel the ability to show off the places they have been and remember them for themselves.

Check out the Application [Here](https://vacation-planner.now.sh)


## Link to Product Canvas 
[Product Canvas]()

#### Link to Trello Board
[Trello Board](https://trello.com/b/yS94hG9a/bw-vacation-planner)

### Key Features

- User can sign up and sign in.
- User can create trips.
- User can view existing trips.
- User can update and delete trips.

## Tech Stack

### Front end build using: 
 REACT

 Front end deployed using [Zeit](https://zeit.co/)

 [Back end](https://github.com/build-week-vacation-planner) deployed on [Heroku](https://build-week-vacationplanner.herokuapp.com/)

## Installation

### Clone this repository and navigate into

`git clone https://github.com/build-week-vacation-planner/Front-end.git`

### Install Dependencies

`yarn install`

#### Add Neccessary Environment Viariable

- yarn
- styled components
- react-router-dom
- Formik

#### Start the Application

`yarn start`

---

## Documentation 

This application is deployed on [Zeit](https://vacation-planner.now.sh) with the following routes accessible for login and signup

| Method                              | Functionality                                                                                 | Route                    |
| ----------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------- |
|  _/signup_                | Create a user account                                                                         | `/signup`         |
|  _/login_                  | Login as an user                                                                                  | `/login`          |

#### Request to Axios

#### _/signup_

```  axios
        .post(
          "https://build-week-vacationplanner.herokuapp.com/createnewuser",
          values
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.access_token);
          values.history.push("/login");
        })
        .catch(err => console.log(err.response));
    }
  }
})(SignupForm);
```
      
####  _/login_ 

```      axios
      .post(
        "https://build-week-vacationplanner.herokuapp.com/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        // console.log(res);
        resetForm();
        setSubmitting(false);
        setStatus(res.data);
        localStorage.setItem("token", res.data.access_token);
        values.history.push("/trip-list");
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(Login);
      
        
 ```
 ---
 
 ## Contributors
 
 ### Connor C [GitHub](https://github.com/czclaxton)
  
 ### LC Carrier [GitHub](https://github.com/lccarrier)
 
 ### Kenya Alston [GitHub](https://github.com/Kenya-a)
 
 ### Luis Mendes [GitHub](https://github.com/cvlopes88)
 
 ### Avni Patel Thompson [GitHub](https://github.com/apatelthompson)
 
 
    
