import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import questionsReducer from './QuestionsReducer'

const rootReducer = combineReducers(
    {
        questions: questionsReducer,
        router: routerReducer
    })

export default rootReducer