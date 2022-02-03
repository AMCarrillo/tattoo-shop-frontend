import mainImage from '../assets/main.jpg';
import logoImage from '../assets/logo.jpg';

import '../styles/Home.css';


function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${mainImage})` }}>
            <div className="logoContainer">
                <img src={logoImage} alt='logo'/>
            </div>
        </div>
    );
}

export default Home;


