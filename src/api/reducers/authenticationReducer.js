

const initialState = {
  user: {}
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
    let result = {}
    switch( type ) {
    case AUTHENTICATION_TYPES.TEST.type:
        result = {payload}
    break;
    case AUTHENTICATION_TYPES.LOGIN.type:
        result =  {...prevState, user: payload}
    break;
    case AUTHENTICATION_TYPES.REGISTER.type:
        result = {...prevState, user: payload}
    break;
    default:
        result =  prevState
    }

    return result
}
