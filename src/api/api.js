import { useSelector, useDispatch } from 'react-redux'
import { AUTHENTICATION_TYPES } from './reducers/authenticationReducer'
import { history } from './store'
import axios from 'axios'
import * as sys from './actions/systemActions'

const api = {
  store: useSelector,
  dispatch: useDispatch,
  types: {
    auth: {
        ...AUTHENTICATION_TYPES
    },/*
    sys: {
        ...SYSTEM_SETTING_TYPES
    }*/
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
api.fetch.interceptors.request.use(
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

// Setting up interceptor to add token
api.fetch.interceptors.request.use(
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
api.fetch.interceptors.response.use(
  response => response,
  error => {
    // Redirect to login
    if (
      error.response &&
      error.response.status === 401 &&
      history.location.pathname !== '/login' &&
      history.location.pathname !== '/logout'
    ) {
     sys.logout()
    }

    return Promise.reject(error);
  }
);


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

export function login(username,password) {
    const { name, route } = api.types.auth.LOGIN
    return api.post(name, route, {username, password})
}

export function register(username,password) {

}

export function logout() {
  console.log("logged out")
}

/**Update internal value**/
/**
* I.E. update the navigation toggle
*/
/*
export function updateSystemValues(key, value) {
    return api.dispatch({
      type: api.types.sys.SYSTEM_SETTINGS_UPDATE,
      payload: {
        [key] : [value]
      }
    })
}
*/
export function getSystemValues() {
    return api.store(state => (state.system))
}
