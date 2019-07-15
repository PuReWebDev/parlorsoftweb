import { createStore, combineReducers } from 'redux'
import { initialState } from './config/initialState'
import authenticationReducer from './reducers/authenticationReducer'

/**@reducers*/
const exportReducers = combineReducers({
    authenticationReducer: authenticationReducer
})

export const store = createStore(exportReducers,initialState)
