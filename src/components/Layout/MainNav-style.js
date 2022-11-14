import styled from "styled-components";

const MainNavContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0px;
    padding: 0px;
    ul{
        display: flex;
        list-style: none;
        width: 600px;
        justify-content: space-around;
    }
    a{
        color: white !important;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        ul{
            display: block;
            text-align: center;
        }
        li{
            margin: 5px 0;
            padding: 5px;
        }
    }
`;

export default MainNavContainer;