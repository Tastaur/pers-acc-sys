import {combineReducers, compose, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import personalReducer from './personalReducer'
import infoReducer from './infoReducer'
import carsReducer from './carsReducer'


let reducers = combineReducers({
  personalPage: personalReducer,
  infoPage: infoReducer,
  carsPage: carsReducer,
  form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
));
window.store = store

export default store
