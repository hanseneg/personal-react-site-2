import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import './style.css'
import Header from './Header'
import Movie from './Movie'
import Search from './Search'
import Random from './Random'
import About from './About'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b" 


function App() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
            setMovies(jsonResponse.Search)
            setLoading(false)
            })
    }, [])

    const search = searchValue => {
        setLoading(true)
        setErrorMessage(null)

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search)
                    setLoading(false)
                } else {
                    setErrorMessage(jsonResponse.Error)
                    setLoading(false)
                }
            })
    }
        
    return (
        <div>
            
        <div className="App">
            <Header /> 
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
           
            
            <Search search={search} />
            <p className="App-intro">Find your favorite movie poster!</p>
            <div className="movies">
                {loading && !errorMessage ? (
                <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                    <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>
            
        </div>
        </div>
    )
}

export default App