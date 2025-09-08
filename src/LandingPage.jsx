// src/LandingPage.jsx
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="landing-grid">
          {/* Left Side - Welcome */}
          <div className="landing-left">
            <h1>Welcome to Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="tagline">Fresh plants for your home & garden</p>
            <Link to="/plants">
              <button className="get-started-button">Get Started</button>
            </Link>
          </div>

          {/* Right Side - About Us */}
          <div className="landing-right">
            <p className="about-us-text">
              At <b>Paradise Nursery</b>, we are passionate about bringing nature closer to you. 
              Our mission is to provide a wide range of high-quality plants that not only 
              enhance the beauty of your surroundings but also contribute to a healthier 
              and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, 
              we have something for every plant enthusiast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

