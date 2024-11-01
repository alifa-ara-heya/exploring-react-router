import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                {/* to avoid reloading every time we click on the nav options, we will use Link To */}
                {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a> */}
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;