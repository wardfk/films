import styled from "styled-components";

const FilmItemContainer = styled.li`
    background-color: black;
    color: #E30A13;
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2px;
    text-align: center;
    border-radius: 15px; 
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
    button{
        background-color: #E30A13;
        color: black;
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: bold; 
        padding: 8px;
        border: none;
        border-radius: 50px;
        width: 200px;
        margin: auto;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        margin-top: 15px;
        cursor: pointer;
    } 
`;
 export default FilmItemContainer;