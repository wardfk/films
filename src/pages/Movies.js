import MainNav from "../components/Layout/MainNav";
import MovieList from "../components/Movies/MovieList";
import { useState, useEffect } from 'react';

const Movies = () => {

    const [loading, setLoading] = useState(true);
    // const [loadedAll, setLoadedAll] = useState([]);

    const [loadedMovies, setLoadedMovies] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        fetch('https://netflix-e1d54-default-rtdb.europe-west1.firebasedatabase.app/movie.json'
        ).then(response => {
           return response.json();
        }).then(data => {
            // hier veranderen we het object naar een array
            const movies = [];

            for(const key in data){
                
                const movie = {
                    id: key,
                    ...data[key]
                }
                movies.push(movie);
            }

            setLoading(false);
            setLoadedMovies(movies);
        });
    }, [])
    


    if(loading){
        return <div><strong>Loading...</strong></div>
    }
    return(
        <div style={{backgroundColor:'#E30A13', padding: '20px'}}>
            <MainNav />
            <MovieList movies={loadedMovies}/>
        </div>
    )
}

export default Movies;