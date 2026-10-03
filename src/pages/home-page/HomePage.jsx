import './HomePage.scss'
import About from "../../components/layout/about/About";
import Pricing from "../../components/layout/pricing/Pricing";
import ContactUs from "../../components/layout/contactus/ContactUs";
import GlobeTechHero from "/src/assets/img/global-tech-hero.png";
import useSmoothScroll from '../../hooks/useSmoothScroll';

export default function HomePage() {
  const { scrollToElement } = useSmoothScroll();
  
    const handleStartClick = (target) => {
      const element = document.getElementById(target);
  
      scrollToElement(element, 80, 700);
    };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-left">
          <h1 className="home-title">Run your business.<br />
            <span>Grow with confidence.</span>
          </h1>

          <h2 className="home-sub-title">
            Your business, all in one place.
          </h2>

          <p className="home-description">
            GlobeTech is a web-based business management platform that helps
            entrepreneurs track inventory, record sales and expenses, and monitor
            daily profits — all from one centralized system.
          </p>

          <div className="home-actions">
            <button onClick={() => handleStartClick('pricing')} className="home-start-btn">
              Get Started
            </button>
          </div>

          <div className="home-checklist">
            <span>✓ Inventory tracking</span>
            <span>✓ Sales & expenses</span>
            <span>✓ Profit monitoring</span>
          </div>
        </div>

        <div className="home-content-right">
          <div className="home-image-wrapper">
            <img
              src={GlobeTechHero}
              alt="GlobeTech business management dashboard"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>


      <div id='about' className="about-section">
        <About />
      </div>

      <div id='pricing' className="pricing-section">
        <Pricing />
      </div>

      <div id='contact' className="contact-section">
        <ContactUs />
      </div>
    </div>
  )
}
