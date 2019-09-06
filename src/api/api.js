import axios from 'axios';
//import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { AUTHENTICATION_TYPES } from './reducers/authenticationReducer'
import { history } from './store' //This is useful
import * as sys from './actions/systemActions'

const localStoragePrefix = "parlorsoft_"

//Network
const api = axios.create({
  baseURL: `https://localhost.com`,
  timeout: 150000,
  headers: {
    Accept: 'application/json',
  },
});

// Setting up interceptor to add token

api.interceptors.request.use(
  config => {
    if (
      localStorage.getItem(`${localStoragePrefix}authentication`) &&
      localStorage.getItem(`${localStoragePrefix}authentication-expires`) > Date.now()
    ) {
      const token = localStorage.getItem(`${localStoragePrefix}authentication`);
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
      history.location.pathname !== '/logout' &&
      !history.location.pathname.indexOf('/password-reset')
    ) {
      logout()
    }

    return Promise.reject(error);
  }
);

// AUTHENTICATION

/**
 * Logs a user in and gets an auth token used for API requests
 * @param {string} username The user's username/email
 * @param {string} password The user's password
 */
export function oauthToken(res) {

      api.defaults.headers.common.Authorization = `
        Bearer ${res.id}
      `;
      localStorage.setItem(`${localStoragePrefix}authentication`, JSON.stringify(res));
      localStorage.setItem(`${localStoragePrefix}userId`, res.userId)
      localStorage.setItem(
        'authentication-expires',
        Date.now() + res.ttl * 1000
      );
}


/**********************
Network issue debugging
***********************/
function networkFailure(e,methodcall="",die=true) {
	const page = document.getElementsByTagName('body')[0]

	/*****/
	// Full stop
	/****/
  if( die ) {
		page.innerHTML = ""
		page.innerHTML = `
		   <div style="height: 500px;color: white;border: 1px solid gray; border-radius: 25px;text-align: center;padding: 20px;display: block; width: 60%;margin-left:auto;margin-right:auto;">
           <div style="border: 1px solid gray; border-radius: 50px;box-shadow: 0 8px 6px -6px black;padding: 5px;background: white;color: black;">
					 <h3>${e.message}</h3>
			     <small>A network error has occued within the app</small>
           <p>${methodcall}</p>
					 </div>
			 </div>
		`
		document.title="Error Caught - Duo"
	}
}

//Error reporting
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  networkFailure({message: errorMsg},true)
}

export function getUser() {
    return window.localStorage.getItem("parlorsoft_user")
}

export function login(email,password,dispatch) {
	   try {
         const response = api.post("/oauth/token", {
					 email,
					 password
				 }).then(res => {
            dispatch( {
           			type: AUTHENTICATION_TYPES.LOGIN.type,
           			payload: res.data
           	} )
            oauthToken({email,password,...res.data})
      })
	   } catch(e) {
         networkFailure(e,"login")
		 }
}

export function setToken(token) {
  oauthToken(token)
}

export function logout() {
}

export function register(email, password,username, dispatch) {
      try {
				const response = api.post("/api/Users", {
					email:    email,
					password: password,
          username: username
				}).then(res => {
                  dispatch( {
                      type: AUTHENTICATION_TYPES.REGISTER.type,
          						payload: res.data
          				} )

                  oauthToken({email,password,...res.data})
        })
			} catch(e) {
        networkFailure(e,"register")
			}
}

export function checkAuthentication(dispatch){
    let id = localStorage.getItem('userId')
    let token = localStorage.getItem('authentication')
    api.defaults.headers.Authorization = `Bearer ${token}`
    if( id !== null && token !== null ) {
      api.get(`api/Users/${id}`)
          .then(res => {
            dispatch({
                type: AUTHENTICATION_TYPES.LOGIN.type,
                payload: res.data
            })
          })
    }
}
