import React, {useState, useEffect} from 'react'
import Movie from './Movie'

/* const movieApiUrl = 'https://www.omdbapi.com/?apikey=4a3b711b&' */

/* const movieApiUrl = 'http://img.omdbapi.com/?apikey=4a3b711b&' */

const movieApiUrl = "https://www.omdbapi.com/?s=man&apikey=4a3b711b" 

/* const movieApiUrl = `https://www.omdbapi.com/?s=&apikey=4a3b711b` */

/* const movieApiUrl = 'http://img.omdbapi.com/?apikey=88044aaa' */

/* const movieApiUrl = "https://www.omdbapi.com/?s=man&apikey=1d07e9e3" */


function Random() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch(movieApiUrl)
        .then(response => response.json())
        .then(jsonResponse => {
            setMovies(jsonResponse.Search)
        })
    }, [])
    
    const moviesList = movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />))
        
    const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)]
    
    function handleRandom() {
        console.log(movies)
    }

    return(
        <div>
            {randomMovie}
            <button onClick={handleRandom}>Random Poster</button>
        </div>
    )
}

export default Random