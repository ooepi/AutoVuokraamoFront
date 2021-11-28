import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
                <h1>Car Rental</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/adminpage">Admin</Link>
            </div>
        </nav>
     );
}
 
export default Navbar ;