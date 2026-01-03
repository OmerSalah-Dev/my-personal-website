import "./hero.css";
import ProfilerImage from "./images/great-robot.png";
import Honeycomb from "./honeycomb/honeycomb";

function Hero() {
  return (
    <div className="scroll-target" id="home">
      <Honeycomb />
      <div className="hero-main-container">

        <div className="left-hero-section">
          <div className="hero-hook-container">
            <span className="hero-hook-emoji">⚡</span>
            <span className="hero-hook-text">Pharmacist</span>
            <span className="hero-hook-dot"></span>
            <span className="hero-hook-text">Developer</span>
          </div>
          
          <h1 className="hero-intro">
            <span className="hero-greeting">Hello, I’m </span>
            <span className="hero-name-gradient">Omer</span>
            <span className="hero-wave-emoji">👋</span>
          </h1>
          <p className="hero-desc">
            Pharmacist turned web developer with a passion for building <span className="hero-desc-highlight">clean</span>, <span className="hero-desc-highlight">functional</span> websites.
          </p>
        </div>

          <div className="right-hero-section floating-container">
            <div className="bobble bobble-1"></div>
            <div className="bobble bobble-2"></div>
            <div className="bobble bobble-3"></div>
            <div className="bobble bobble-4"></div>
            <div className="hero-glow-orb"></div>
            <img
              className="profile-image animation"
              src={ProfilerImage}
              alt="Profile"
            />
          </div>

      </div>
    </div>
  );
}

export default Hero;
