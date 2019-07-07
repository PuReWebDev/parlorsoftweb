import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Login } from '../components/pages/authentication/login'
import { Register } from '../components/pages/authentication/register'
import { Home } from '../components/pages/home'


export const GuestRoutes = () => (
  <>
    <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </>
)
