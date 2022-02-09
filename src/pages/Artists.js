import * as React from 'react';
import '../styles/Artists.css';
import mainImage from '../assets/mainBlur.jpg';
import artist1 from '../assets/Artist1.jpg';
import artist2 from '../assets/Artist2.jpg';
import artist3 from '../assets/Artist3.jpg';

function Artists() {
    return (
        
        <div className="home" style={{ backgroundImage: `url(${mainImage})` }}>
            <div className="card">
                <img src={artist1} alt="Avatar"/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nulla ornare mi nibh,
                        quis molestie lectus tempus id. Aliquam quis commodo
                        enim. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas. Nulla
                        quis elit felis. Vestibulum ullamcorper diam vitae
                        sagittis pretium. Donec ipsum ante, venenatis vitae
                        interdum id, sodales ac augue.</p>
                </div>
            </div>
            <div className="card">
                <img src={artist2} alt="Avatar"/>
                <div className="container">
                    <h4><b>John Doe22</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
            <div className="card">
                <img src={artist3} alt="Avatar"/>
                <div className="container">
                    <h4><b>John Doe33</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default Artists;
