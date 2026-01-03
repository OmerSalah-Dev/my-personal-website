import Header from './header/header';
import Hero from './home/heroPage/hero';
import About from './home/about-me/about';
import Skills from './home/skill/skill';
import Certifications from './home/certifications/certification';
import Connect from './home/connect-me/connect';
import Footer from './footer/footer';
import './App.css';
function App() {
  return (
    <>
     <div className="app-header-container">
        <Header />
     </div>

      <div className="app-body-container">
       <div className="section-spacing">
        <Hero />
       </div>
       <hr className="section-divider" />

       <div className="section-spacing">
        <About />
       </div>
       <hr className="section-divider" />

       <div className="section-spacing">
        <Certifications />
       </div>
        <hr className="section-divider" />

       <div className="section-spacing">
        <Skills />
       </div>
       <hr className="section-divider" />

       <div className="section-spacing">
        <Connect />
       </div>
       <hr className="section-divider" />
        <Footer />
      </div>
      
     
    </>
  );
}

export default App;