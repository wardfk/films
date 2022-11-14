import SerieItem from "./SerieItem";
import FilmListContainer from "../FilmList-style";

function SerieList(props){
    return(
        <FilmListContainer>
            <h2>Series</h2>
            {/* SerieItems komt van Home.js */}
            {props.series.map((serieItems) => (
                <SerieItem 
                    key={serieItems.id}
                    title={serieItems.title}
                    year={serieItems.year}
                    country={serieItems.country}
                />
            ))}
        </FilmListContainer>
        
    )
};

export default SerieList;