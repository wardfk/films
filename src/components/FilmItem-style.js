import styled from "styled-components";

const FilmItemContainer = styled.li`
    background-color: black;
    color: #E30A13;
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px 5px;
    text-align: center;
    border-radius: 15px; 
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(227, 10, 19, .5);
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
        box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.4);
        margin-top: 15px;
        cursor: pointer;
    } 
    @media screen and (max-width: 600px){
        width: 120px;
        height: 120px;
        margin: 5px 5px;
        box-shadow: -0px 0px 10px rgba(227, 10, 19, .3);
        h3{
            font-size: 0.8rem;
        }
        p{
            font-size: 0.6rem;
        }
    }
`;
 export default FilmItemContainer;