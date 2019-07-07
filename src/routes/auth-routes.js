import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Login } from '../components/pages/authentication/login'
import { Register } from '../components/pages/authentication/register'
import { Home } from '../components/pages/home'


export const AuthRoutes = () => (
  <>
    <Route exact path="/dashboard" component={Home} />
  </>
)
