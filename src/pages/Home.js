import MainNav from "../components/Layout/MainNav";
import FilmList from "../components/FilmList";
import MovieList from "../components/Movies/MovieList";
import SerieList from "../components/Series/SerieList";
import { useState, useEffect, useRef } from "react";



// const filmsSeriesArray = [
//     {
//         id: 1,
//         title: 'Titanic',
//         year: 1994,
//         type: 'movie',
//     },
//     {
//         id: 2,
//         title: 'The Simpsons',
//         year: 1994,
//         type: 'serie',
//     },
//     {
//         id: 3,
//         title: 'Taxi',
//         year: 1998,
//         type: 'movie',
//     },
//     {
//         id: 4,
//         title: 'The Sopranos',
//         year: 1979,
//         type: 'serie',
//     },
//     {
//         id: 5,
//         title: 'Peaky Blinders',
//         year: 2013,
//         type: 'serie',
//     }
// ]


const Home = () => {


    const [loading, setLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);
    const [loadedSeries, setLoadedSeries] = useState([]);

    
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

    useEffect(() => {
        setLoading(true);
        fetch('https://netflix-e1d54-default-rtdb.europe-west1.firebasedatabase.app/series.json'
        ).then(response => {
           return response.json();
        }).then(data => {
            // hier veranderen we het object naar een array
            const series = [];

            for(const key in data){
                const serie = {
                    id: key,
                    ...data[key]
                }
                series.push(serie);
            }

            setLoading(false);
            setLoadedSeries(series);
        });
    }, [])


    if(loading){
        return <div><strong>Loading...</strong></div>
    }



    return(
        <div style={{backgroundColor:'#E30A13', padding: '20px'}}>
            <MainNav />
            <MovieList movies={loadedMovies}/>
            <SerieList series={loadedSeries}/>
            {/* <FilmList films={filmsSeriesArray}/> */}
        </div>
    )
}

export default Home;