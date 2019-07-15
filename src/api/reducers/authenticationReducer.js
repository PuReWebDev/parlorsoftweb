

const initialState = {
  user: {
    id: null,
    email: ""
  }
}

export default function authenticationReducer(prevState=initialState, {type,payload}) {
    switch( type ) {
      case "TEST":
          return {payload}
    break;
    default:
        return prevState
    }
}
