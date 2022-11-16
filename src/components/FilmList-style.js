import styled from "styled-components";

const FilmListContainer = styled.ul`
    background-color: #111;
    padding: 20px;
    margin: 5px 0px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    // flex-direction: column;
    h2{
        width: 100%;
        text-align: center;
        font-size: 1.8rem;
        color: #E30A13;
        text-shadow: 0 0 5px black;
    }
    @media screen and (max-width: 700px){
        
            justify-content: center;
        
    }
`;

export default FilmListContainer;