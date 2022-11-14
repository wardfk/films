import { useRef } from 'react';
import FormContainer from '../Form-style';

function AddNewSerie(props) {


    const titleSerieInputRef = useRef();
    const yearSerieInputRef = useRef();
    const countrySerieInputRef = useRef();
 
    


    function submitSerieHandler(event) {
        event.preventDefault();

        const enteredSerieTitle = titleSerieInputRef.current.value;
        const enteredSerieYear = yearSerieInputRef.current.value;
        const enteredSerieCountry = countrySerieInputRef.current.value;

        // Nu gaan we deze data opslaan in een constante ----------------------------------------------
        const seriesData = {
            title: enteredSerieTitle,
            year: enteredSerieYear,
            country: enteredSerieCountry,
        }

        props.onAddSeries(seriesData);
        console.log(seriesData);

    }
    return(
        <FormContainer>
            <h2>Add New Serie</h2>
            <form onSubmit={submitSerieHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' required id="title" ref={titleSerieInputRef} ></input>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type='number' required id="year" ref={yearSerieInputRef} ></input>
                </div>
                <div>
                <label htmlFor="country">Country</label>
                    <input type='text' required id="country" ref={countrySerieInputRef} ></input>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </FormContainer>
)
}

export default AddNewSerie;