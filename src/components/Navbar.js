import { useState } from "react";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';

{/* Returns a stateful value, and a function to update it.
The stateful components are keeping track of changing data */}
{/*For proper responsive styling*/ }

function Navbar() {
    const [openLinks, setopenLinks] = useState(false);
    
    const toggleNavbar = () => {
        setopenLinks(!openLinks);  
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/">Menu</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar
