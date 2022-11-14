import styled from "styled-components";

const FormContainer = styled.div`
    border-radius: 15px; 
    width: 40%;
    padding: 20px;
    box-shadow: inset 0px 0px 15px rgba(255, 255, 255, .4);
    div{
        display: flex;
        flex-direction: column;
        margin: 10px 0px;
    }
    label{
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    input{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        border: 1px solid white;
        background-color: transparent;
        height: 25px;
        border-radius: 30px;
        padding: 5px 15px;
        color: white;
        font-size: 1.1rem;
    }
    button{
        background-color: black;
        color: #E30A13;
        font-size: 1.2rem;
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

export default FormContainer;