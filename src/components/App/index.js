import React, {Component} from 'react'
import {Switch, Route} from 'react-router'
import getPageRoute from '../../helpers/pagehelper'
import AgeBracket from '../Questions/1-Age-Bracket'

class App extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={getPageRoute(1)} component={ AgeBracket } />
            </Switch>
        )
    }
}

export default App