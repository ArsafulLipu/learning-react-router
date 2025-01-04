import {Link} from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div className="navlink">
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/users'>Users</Link>
            <Link to='/footer'>Footer</Link>
            <Link to='/game'>Game</Link>

        </div>
    );
};

export default Header;