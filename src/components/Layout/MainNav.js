import { Link } from 'react-router-dom';
import MainNavContainer from './MainNav-style';

function MainNav() {
    return(
        <MainNavContainer>
            <div>
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
        </MainNavContainer>
    )
};

export default MainNav;