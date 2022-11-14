import MainNav from "../components/Layout/MainNav";
import SerieList from "../components/Series/SerieList";
import { useState, useEffect } from 'react';

const Series = () => {
    const [loading, setLoading] = useState(true);
    const [loadedSeries, setLoadedSeries] = useState([]);
    

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
        <div  style={{backgroundColor:'#E30A13', padding: '20px'}}>
            <MainNav />
            <SerieList series={loadedSeries}/>
        </div>
    )
}

export default Series;