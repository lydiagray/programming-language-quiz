import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState, history){
    const routerMidd = routerMiddleware(history)
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, routerMidd))
    return store
}