import PropTypes from "prop-types"
import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import { App, Home, Attendance, Login, BeltTest, AddEvents, Events } from "./containers"

function checkForLoggedIn(nextState, replace, callback){
  let loggedInUser = localStorage.getItem('token')
  if(!loggedInUser){
    replace(`/login`);
  }

  callback()
}

const PathRoute = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/" component={App} onEnter={checkForLoggedIn}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/belttest" component={BeltTest} />
                <Route path="/events" component={Events} />
                <Route path="/addevents" component={AddEvents} />
            </Route>
            <Route path="/login" component={Login} />
        </Router>
    )
}

PathRoute.propTypes = {
    history: PropTypes.any,
}

export default PathRoute
