import React from 'react'

import {Switch, Route, Link} from 'react-router-dom'

import './style.css'
import Home from './Home'
import Random from './Random'
import About from './About'




function App() {
    return (
        <div>
            
            
                <header className="App-header">
                    <h2>Movie Posters</h2>
                    <Link to='/'><h4>Home</h4></Link>
                    <Link to='/random'><h4>Random Poster</h4></Link>
                    <Link to='/about'><h4>About</h4></Link>
                </header>
            
            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route path='/random'>
                    <Random />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch> 
            <Home />
        </div>
    )
}

export default App