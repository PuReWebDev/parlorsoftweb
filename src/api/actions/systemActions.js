export function loginRequest() {
  store.dispatch({
    type: 'LOGIN_REQUEST',
    data: {
      isFetchingAuthentication: true,
      isAuthenticated: false,
    },
  });
}

export function loginSuccess(response) {
  store.dispatch({
    type: 'LOGIN_SUCCESS',
    data: {
      isFetchingAuthentication: false,
      isAuthenticated: true,
      token: response.data,
      message: '',
    },
  });

  const { lastPage } = store.getState().appState.authentication;

  history.push(lastPage || '/');
}

export function loginError(err) {
  const error = common.getErrorMessage(err);

  store.dispatch({
    type: 'LOGIN_ERROR',
    data: {
      isFetchingAuthentication: false,
      isAuthenticated: false,
      message: error,
    },
  });
}

export function logout(manual) {
  localStorage.removeItem('authentication');
  localStorage.removeItem('authentication-expires');

  store.dispatch({
    type: 'LOGOUT',
    data: {
      isAuthenticated: false,
      token: {},
      lastPage: history.location.pathname,
    },
  });

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
}

export function genericError(err) {
  const error = common.getErrorMessage(err);

  store.dispatch({
    type: 'GENERIC_ERROR',
    data: {
      isFetching: false,
      message: error,
    },
  });
}
