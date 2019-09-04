import { createStore, combineReducers } from 'redux'
import { initialState } from './config/initialState'
import authenticationReducer from './reducers/authenticationReducer'
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();

/**@reducers*/
const exportReducers = combineReducers({
    authenticationReducer: authenticationReducer
})

export const store = createStore(exportReducers,{})
