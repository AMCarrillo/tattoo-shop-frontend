import React from 'react'
import '../styles/Gallery.css';
import tattoo1 from '../assets/tattoo1.jpg';
import tattoo2 from '../assets/tattoo2.jpg';
import tattoo3 from '../assets/tattoo3.jpg';
import tattoo4 from '../assets/tattoo4.jpg';
import tattoo5 from '../assets/tattoo5.jpg';
import tattoo6 from '../assets/tattoo6.jpg';
import tattoo7 from '../assets/tattoo7.jpg';
import tattoo8 from '../assets/tattoo8.jpg';
import tattoo9 from '../assets/tattoo9.jpg';
import tattoo10 from '../assets/tattoo10.jpg';

function Gallery() {
  return (
    <div className="row"> 
      <div className="column">
        <img src={tattoo1} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo2} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo3} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo4} alt="tattoo" style={{width:`100%`}}/>
      </div>
      <div className="column">
        <img src={tattoo5} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo6} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo7} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo8} alt="tattoo" style={{width:`100%`}}/>
      </div>  
      <div className="column">
        <img src={tattoo9} alt="tattoo" style={{width:`100%`}}/>
        <img src={tattoo10} alt="tattoo" style={{width:`100%`}}/>
        
      </div>
    </div>
  );
}

export default Gallery