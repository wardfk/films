import react, { useState } from "react";
import FormContainer from '../components/FilmList-style';
import MainNav from '../components/Layout/MainNav';



function Contact () {
    const [formMessage, setFormMessage] = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }

    return(
        <div style={{backgroundColor:'#E30A13', padding: '20px'}} >
            <MainNav />
            <FormContainer>
                <form >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="First name & last name"
                        className="name"
                        onBlur={(e) => handleForm(e)}
                        required
                        /><br />
                        
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Email"
                        className="email"
                        onBlur={(e) => handleForm(e)}
                        required
                        /><br />
                    <textarea name="message" className="message" placeholder="Write your messege here" cols="30" rows="10" onBlur={(e) => handleForm(e)} required></textarea><br />
                    <span onClick={() => sendForm() } >Enviar</span>
                </form>
            </FormContainer>
        </div>
    );
};

export default Contact;
