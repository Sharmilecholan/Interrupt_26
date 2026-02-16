import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Interrupt from "../assets/interrupt-footer.png";
import Countdown from "./Countdown";
import FuturisticButton from "../Components/FuturisticButton";
import { FaCalendarAlt, FaWrench, FaHandshake, FaImages } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="homepage-container" id="home">
        <img src={Interrupt} alt="about interrupt" className="large-logo" data-aos="zoom-in" />
      <div className="content">
        <h3 data-aos='fade-left'>The Annual Technical Fest of ACE</h3>
        <p data-aos='fade-right'>Sri Venkateswara College of Engineering</p>{" "}
      </div>
      <div className="event-dates">
        <p data-aos='flip-left'>20th February 2026</p>
      </div>

      <div className="button-container">

  {/* Left - Events */}
  <div className="side-button">
    <FuturisticButton
      text="Events"
      icon={<FaCalendarAlt />}
      onClick={() => navigate("/events")}
    />
  </div>

  {/* Center - Register Buttons */}
  <div className="center-register-group">
    <button
      className="register-btn events-register"
      onClick={() => window.open("https://takemytickets.co.in/event/699315885b389b1ccf397c34", "_blank")}
    >
      Register for Events
    </button>

    <button
      className="register-btn workshop-register"
      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfvyxNFRUA066ZuuZqGB690o719VgxdTRcTVSfxWsMFf8yV5w/viewform?usp=publish-editor", "_blank")}
    >
      Register for Workshop
    </button>
  </div>

  {/* Right - Workshops */}
  <div className="side-button">
    <FuturisticButton
      text="Workshops"
      icon={<FaWrench />}
      onClick={() => navigate("/workshop")}
    />
  </div>

</div>

      {<Countdown />}
      {<About />}
      {<Footer />}
    </div>
  );
}
