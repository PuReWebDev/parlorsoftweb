import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Header } from '../templates/header'
/*App Pages*/
import { Error404, Error500 } from '../common/error/'
/*Guest Pages*/
import Login from '../pages/login'
import { Register } from '../pages/register'

function checkAuth() {

}

function checkRoutes() {

}

export function GuestRouter() {
  checkAuth()
  checkRoutes()
  return (
    <>
    <Router>
      <Header isAuth={false} />
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Error404} />
      </div>
    </Router>
  </>
  );
}

export function AuthRouter() {
  checkAuth()
  checkRoutes()

  return (
    <>
    <Router>
      <Header isAuth={true} />
          <div className="content-wrapper">
          <Switch>
            <Route exact path="/" render={()=>{}} />
            <Route path="/dashboard" render={() => {}} />
            <Route path="/clients" render={() => {}} />
            <Route path="/mychair" render={() => {}} />
            <Route path="/maps" render={() => {}} />
            <Route path="/logout" component={Login} />
            <Route component={Error404} />
          </Switch>
          </div>
    </Router>
  </>
  );
}
