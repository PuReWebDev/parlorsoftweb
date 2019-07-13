import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Header } from '../templates/header'

/*Guest Pages*/
import { Login } from '../pages/login'
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
        <Route exact path="/" render={() => {}} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
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
            <Route exact path="/" render={() => {}} />
            <Route path="/logout" component={Login} />
          </div>
    </Router>
  </>
  );
}