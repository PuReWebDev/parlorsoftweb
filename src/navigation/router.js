import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Header } from '../templates/header'
import { history } from '../api/store'
/*App Pages*/
import { Error404, Error500 } from '../common/error/'
import { StyleGuide } from '../pages/dev/styleguide'
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
      <Header isAuth={true} pathname={history.location.pathname} />
          <div className="content-wrapper">
          <Switch>
            <Route exact path="/" render={()=>{}} />
            <Route path="/dashboard" render={() => {}} />
            <Route path="/clients" render={() => {}} />
            <Route path="/mychair" render={() => {}} />
            <Route path="/maps" render={() => {}} />
            <Route path="/logout" component={Login} />
            <Route path="/styleguide" component={StyleGuide} />
            <Route component={Error404} />
          </Switch>
          </div>
    </Router>
  </>
  );
}
