import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/artists" exact element={<Artists />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
