import FilmItemContainer from '../FilmItem-style';


function SeriesItem(props) {
    const onAlertHandler = () => {
        alert('Trailer not aviable')
    }
    
    return(
        <FilmItemContainer>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.country}</p>
                    <p>{props.year}</p>
                </div>
                {/* <div>
                    <button onClick={onAlertHandler}>Watch trailer</button>
                </div> */}
        </FilmItemContainer>
    )
};

export default SeriesItem;