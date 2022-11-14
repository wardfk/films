import MovieItem from "./MovieItem";
import FilmListContainer from "../FilmList-style";

function MovieList(props){
    return(
        <FilmListContainer>
            <h2>Movies</h2>
            {/* MovieItems komt van Home.js */}
            {/* {props.movies.filter(filterMovie => filterMovie.country === 'Belgium').map(filteredMovie => (
                <MovieItem 
                    key={filteredMovie.id}
                    title={filteredMovie.title}
                    year={filteredMovie.year}
                    country={filteredMovie.country}
                />
            ))} */}
            {props.movies.map((movieItems) => (
                <MovieItem 
                    key={movieItems.id}
                    title={movieItems.title}
                    year={movieItems.year}
                    country={movieItems.country}
                />
            ))}
        </FilmListContainer>
        
    )
};

export default MovieList;