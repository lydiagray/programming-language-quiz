import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import {Provider} from 'react-redux'
import App from '../src/components/App'
import configureStore from './store'
import createHistory from 'history/createBrowserHistory'

let history = createHistory()
let store = configureStore({}, history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)