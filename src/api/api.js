import { useSelector, useDispatch } from 'react-redux'
import { AUTHENTICATION_TYPES } from './reducers/authenticationReducer'
import { history } from './store'
import axios from 'axios'

const api = {
  store: useSelector,
  dispatch: useDispatch,
  types: {
    ...AUTHENTICATION_TYPES
  },
  post: async (type, route, payload) => {
      return await api.fetch.post(route,{...payload})
  },
  get: async (type, route, id="") => {
      return await api.fetch.get(`${route}/${id}`)
  }
}

api.fetch = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
  timeout: 150000,
  headers: {
    Accept: 'application/json',
  },
});

// Setting up interceptor to add token
/*
api.interceptors.request.use(
  config => {
    if (
      localStorage.getItem('authentication') &&
      localStorage.getItem('authentication-expires') > Date.now()
    ) {
      const token = JSON.parse(localStorage.getItem('authentication'));
      return {
        ...config,
        headers: {
          ...config.headers,
          common: {
            ...config.headers.common,
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        },
      };
    }

    return config;
  },
  error => Promise.reject(error)
);

// Setting up intercepter to redirect to login for unauthenticated user
api.interceptors.response.use(
  response => response,
  error => {
    // Redirect to login
    if (
      error.response &&
      error.response.status === 401 &&
      history.location.pathname !== '/login' &&
      history.location.pathname !== '/logout'
    ) {
     logout()
    }

    return Promise.reject(error);
  }
);
*/

export function test() {
  return true
}

export function get(model="user",filter) {

}

export function getSelector() {
  return useSelector
}

export function getDispatch() {
  return useDispatch
}

/**
 MODEL FUNCTIONS :D
**/

export function getUser() {
    return api.store(state => state.authenticationReducer.user)
}

export async function login(username,password) {
    const { name, route } = api.types.AUTHENTICATION_TYPES.LOGIN
    api.post(name, route, {username, password})
}

export function register(username,password) {

}

export function logout() {
  console.log("logged out")
}
