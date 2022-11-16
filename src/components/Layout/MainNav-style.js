import styled from "styled-components";

const MainNavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0px;
    padding: 0 50px;
    &:hover{ 
        .logo {
            color: blue;
        }
    }
    ul{
        display: flex;
        list-style-type: none;
        max-width: 600px;
        width: 100%;
        justify-content: space-around;
        padding: 0px;
    }
    li{
        list-style-type: none;
        padding: 4px 8px;
        margin: 0px 5px;
    }
    a{
        color: white !important;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
    }
    .contact-link{
        border: 1px solid white;
        padding: 4px 8px;
        border-radius: 50px;
    }
    @media screen and (max-width: 520px){
        // flex-direction: column;
        justify-content: space-between;
        padding: 0 20px;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column; 
            text-align: center;
            padding: 0px;
        }
        li{
            margin: 2px 0;
            padding: 3px;
            width: 100%;
            font-size: .7rem;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default MainNavContainer;