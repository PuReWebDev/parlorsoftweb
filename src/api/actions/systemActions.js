const localStorage = window.localStorage

export function loginRequest() {
  return {
    type: 'LOGIN_REQUEST',
    data: {
      isFetchingAuthentication: true,
      isAuthenticated: false,
    },
  };
}

export function loginSuccess(response) {
  return {
    type: 'LOGIN_SUCCESS',
    data: {
      isFetchingAuthentication: false,
      isAuthenticated: true,
      token: response.data,
      message: '',
    },
  };

  /**TODO**/
  //const lastPage = false
  //TODO  const { lastPage } = store.getState().appState.authentication;
  //localStorage.removeItem('authentication');
  //localStorage.removeItem('authentication-expires');
  /**TODO Store tokens*/
  //history.push(lastPage || '/');
}

export function loginError(err) {
  //const error = common.getErrorMessage(err);

  return {
    type: 'LOGIN_ERROR',
    data: {
      isFetchingAuthentication: false,
      isAuthenticated: false,
      message: err,
    },
  };
}

export function logout(manual) {
  localStorage.removeItem('authentication');
  localStorage.removeItem('authentication-expires');

  return {
    type: 'LOGOUT',
    data: {
      isAuthenticated: false,
      token: {},
      //lastPage: history.location.pathname,
    },
  };

/*
  if (
    history.location.pathname !== '/login' &&
    history.location.pathname !== '/logout' &&
    history.location.pathname !== '/password-reset'
  ) {
    if (manual) {
      history.push('/logout');
    } else {
      history.push('/login');
    }
  }
  */
}

export function genericError(err) {
  //const error = common.getErrorMessage(err);

  return {
    type: 'GENERIC_ERROR',
    data: {
      isFetching: false,
      message: err,
    },
  };
}
