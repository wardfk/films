import { Link } from 'react-router-dom';
import MainNavContainer from './MainNav-style';

function MainNav() {
    return(
        <MainNavContainer>
            <div className='logo'>
                <Link to='/'>LOGO</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/series'>Series</Link>
                    </li>
                    <li>
                        <Link to='/add'>Add</Link>
                    </li>
                </ul>
            </nav>
            {/* <div className='contact-link'>
                <Link to='/contact'>Contact</Link>
            </div> */}
        </MainNavContainer>
    )
};

export default MainNav;