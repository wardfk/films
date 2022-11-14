
import MainNav from "../components/Layout/MainNav";
import AddNew from '../components/AddNew';
import AddNewMovie from "../components/Movies/AddNewMovie";
import AddNewSerie from "../components/Series/AddNewMovie";
import AddListContainer from "../components/AddListContainer-style";

import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();

    // api request ----------------------------------------------
    // filmsData halen we van het object die in AddNew.js staat
    // function onAddFilmsHandler(filmsData){
    //     fetch('https://netflix-e1d54-default-rtdb.europe-west1.firebasedatabase.app/all.json', {
    //         method:'POST',
    //         body: JSON.stringify(filmsData),
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     }).then(() => {
    //         alert('Added')
    //         navigate('/', {replace: true});
    //     })
    // }
    function onAddMoviesHandler(moviesData){
        fetch('https://netflix-e1d54-default-rtdb.europe-west1.firebasedatabase.app/movie.json', {
            method:'POST',
            body: JSON.stringify(moviesData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => {
            alert('Added')
            navigate('/', {replace: true});
        })
    }
    function onAddSerieHandler(seriesData){
        fetch('https://netflix-e1d54-default-rtdb.europe-west1.firebasedatabase.app/series.json', {
            method:'POST',
            body: JSON.stringify(seriesData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => {
            alert('Added')
            navigate('/', {replace: true});
        })
    }

    
    
    return(
        <div  style={{backgroundColor:'#E30A13', padding: '20px'}}>
            <MainNav   />
            {/* onAddFilms halen we via props vanuit AddNew.js */}
            {/* de naam onAddFilmsHandler kunnen we zelf kiezen  */}
            {/* <AddNew onAddFilms={onAddFilmsHandler} /> */}
            <AddListContainer>
                <AddNewMovie onAddMovies={onAddMoviesHandler} />
                <AddNewSerie onAddSeries={onAddSerieHandler} />
            </AddListContainer>
            
        </div>  
    )
}

export default Add;