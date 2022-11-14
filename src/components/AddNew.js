import { useRef } from 'react';

function AddNew(props) {
    const titleInputRef = useRef();
    const yearInputRef = useRef();
    const typeInputRef = useRef();


    // const titleMovieInputRef = useRef();
    // const yearMovieInputRef = useRef();
    // const typeMovieInputRef = useRef();
 
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredYear = yearInputRef.current.value;
        const enteredType = typeInputRef.current.value;

        // Nu gaan we deze data opslaan in een constante ----------------------------------------------
        const filmsData = {
            title: enteredTitle,
            year: enteredYear,
            type: enteredType,
        }

        props.onAddFilms(filmsData);
        console.log(filmsData);

    }


    // function submitMovieHandler(event) {
    //     event.preventDefault();

    //     const enteredMovieTitle = titleMovieInputRef.current.value;
    //     const enteredMovieYear = yearMovieInputRef.current.value;
    //     const enteredMovieType = typeMovieInputRef.current.value;

    //     // Nu gaan we deze data opslaan in een constante ----------------------------------------------
    //     const moviesData = {
    //         title: enteredMovieTitle,
    //         year: enteredMovieYear,
    //         type: enteredMovieType,
    //     }

    //     props.onAddMovies(moviesData);
    //     console.log(moviesData);

    // }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input type='text' required id="title" ref={titleInputRef} ></input>
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input type='number' required id="year" ref={yearInputRef} ></input>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <input type='text' required id="type" ref={typeInputRef} ></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default AddNew;