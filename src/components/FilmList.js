import FilmItem from "./FilmItem";
import FilmListContainer from "./FilmList-style";

function FilmList(props){
    return(
        <FilmListContainer>
            {/* filmItems komt van Home.js */}
            {props.films.map((filmItems) => (
                <FilmItem 
                    key={filmItems.id}
                    title={filmItems.title}
                    year={filmItems.year}
                    type={filmItems.country}
                />
            ))}
        </FilmListContainer>
        
    )
};

export default FilmList;