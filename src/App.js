import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './style.css'
import Home from './Home'
import Random from './Random'
import About from './About'
import Header from './Header'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/random'>
                    <Random />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch> 
        </div>
    )
}

export default App