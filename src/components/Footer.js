import React from 'react';
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /><TwitterIcon /><FacebookIcon />
            </div>
            <p> &copy; 2022 - Made by Ana María Carrillo</p>
        </div>
    );
}

export default Footer;