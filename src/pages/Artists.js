import * as React from 'react';
import '../styles/Artists.css';
import mainImage from '../assets/mainBlur.jpg';
import artist1 from '../assets/Artist1B.jpg';
import artist2 from '../assets/Artist3.jpg';
import artist3 from '../assets/Artist4B.jpg';

function Artists() {
    return (
        <div className="artists-bg" style={{ backgroundImage: `url(${mainImage})` }}>
            <ul className='card-container'>
                <li>
                    <div className="card">
                        <img src={artist1} alt="Avatar"/>
                        <h4><b>John Sievers</b></h4>
                        <hr style={{width:`85%`}}></hr>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nulla ornare mi nibh,
                            quis molestie lectus tempus id. Aliquam quis commodo
                            enim. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas. Nulla
                            quis elit felis.</p>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={artist2} alt="Avatar"/>
                        <h4><b>Marcus Goss</b></h4>
                        <hr style={{width:`85%`}}></hr>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nulla ornare mi nibh,
                            quis molestie lectus tempus id. Aliquam quis commodo
                            enim. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas. Nulla
                            quis elit felis.</p>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={artist3} alt="Avatar"/>
                        <h4><b>Clark Wiles</b></h4>
                        <hr style={{width:`85%`}}></hr>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nulla ornare mi nibh,
                            quis molestie lectus tempus id. Aliquam quis commodo
                            enim. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas. Nulla
                            quis elit felis.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Artists;
