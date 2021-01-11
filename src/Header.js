import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="App-header">
                <h2>Movie Posters</h2>
                <Link to='/' className='link'><h4>Home</h4></Link>
                <Link to='/random' className='link'><h4>Random Poster</h4></Link>
                <Link to='/about' className='link'><h4>About</h4></Link>
            </header>
        </div>
    )
}
  
export default Header