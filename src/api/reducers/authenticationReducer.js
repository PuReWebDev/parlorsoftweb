

const initialState = {
  user: {
    id: null,
    email: ""
  }
}

export const AUTHENTICATION_TYPES = {
  LOGIN:    {
    type: "auth:login",
    route: "/login"
  },
  REGISTER: {
    type: "auth:register",
    route: "/register"
  },
  TEST: {
    type: "test",
    route: "/healthcheck"
  }
};

export default function authenticationReducer(prevState=initialState, {type,payload}) {
    switch( type ) {
    case AUTHENTICATION_TYPES.TEST.type:
        return {payload}
    break;
    case AUTHENTICATION_TYPES.LOGIN.type:
        return {...prevState, payload}
    break;
    case AUTHENTICATION_TYPES.REGISTER.type:
        return {...prevState, payload}
    break;
    default:
        return prevState
    }
}
