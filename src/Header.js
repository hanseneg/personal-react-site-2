import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="App-header">
                <Link to='/App'><h2>Movie Posters</h2></Link> 
                <Link to='/App'></Link><h4>Home</h4>
                <Link to='/Random'></Link><h4>Random Poster</h4>
                <Link to='/About'></Link><h4>About</h4>
            </header>
        </div>
    )
}
  
export default Header