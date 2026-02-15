import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/sponsors.css";
import sponsors from "../../data/sponsors.json";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="sponsors-page-wrapper">
      {/* 1. NEW CTA SECTION (Active Now) */}
      <div className="sponsor-cta-box" data-aos="zoom-in">
        <h2>Want To Sponsor Us?</h2>
        <p>
          Join us in making Interrupt '26 a grand success. Partner with the 
          Association of Computer Engineering Students (ACES) and showcase your 
          brand to a talented pool of students and tech enthusiasts.
        </p>
        <div className="cta-btn-container">
          <a href="/brochure.pdf" download className="cta-brochure-btn">
            DOWNLOAD BROCHURE
          </a>
        </div>
      </div>

      {/* 2. ORIGINAL SPONSOR LISTING (Commented out for future use)
      <div className="sponsors-container">
        <h1>Global Educational Sponsor</h1>
        {sponsors.sponsers.length === 0 ? (
          <h1>To be Updated Soon</h1>
        ) : (
          <div className="sponsors-grid">
            {sponsors.sponsers.map((sponsor, index) => (
              <div key={index} className="sponsor-card" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      */}
    </div>
  );
};

export default Sponsors;