import { useRef } from 'react';
import FormContainer from '../Form-style';

function AddNewMovie(props) {


    const titleMovieInputRef = useRef();
    const yearMovieInputRef = useRef();
    const countryMovieInputRef = useRef();
 
    


    function submitMovieHandler(event) {
        event.preventDefault();

        const enteredMovieTitle = titleMovieInputRef.current.value;
        const enteredMovieYear = yearMovieInputRef.current.value;
        const enteredMovieCountry = countryMovieInputRef.current.value;

        // Nu gaan we deze data opslaan in een constante ----------------------------------------------
        const moviesData = {
            title: enteredMovieTitle,
            year: enteredMovieYear,
            country: enteredMovieCountry,
        }

        props.onAddMovies(moviesData);
        console.log(moviesData);

    }
    return(
        <FormContainer>
            <h2>Add New Movie</h2>
            <form onSubmit={submitMovieHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' required id="title" ref={titleMovieInputRef} ></input>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type='number' required id="year" ref={yearMovieInputRef} ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type='text' required id="country" ref={countryMovieInputRef} ></input>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </FormContainer>
    )
}

export default AddNewMovie;