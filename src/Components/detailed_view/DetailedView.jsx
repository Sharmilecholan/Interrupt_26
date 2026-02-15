import React from "react";
import "../../Styles/detailed_view.css";
import events from "../../data/events.json";
import workshop from "../../data/workshop.json";
import { useParams } from "react-router-dom";

const DetailedView = ({type}) => {
  const params = useParams();
  const title = type === "workshop" ? "Generative AI + RAG Workshop – Build Intelligent Academic Systems" : params.id;

  console.log(type);
  
  const event = type === "workshop" ? workshop[title] : events[title];

  console.log(import.meta.env.PUBLIC_URL);

  return (
    <section className="event-details">
      <div className="card-container">
        <div className="event-card">
          {/* Event Title */}
          <h1 className="event-title">{title}</h1>

          <div className="new-container">
            <div className="poster-container">
              <img src={event.image} alt="Event Poster" className="poster-image" />
            </div>

            <div className="content-container">
              <div className="grid">
                <strong style={{ color: "gold", fontWeight: "500" }}>📅 Date</strong>
                <p style={{ color: "gold", fontWeight: "500"}}>:</p>
                <p style={{ color: "white", fontWeight: "500" }}> {event.date}</p>
                <strong style={{ color: "gold", fontWeight: "500" }}>⏳ Timing</strong>
                <p style={{ color: "gold", fontWeight: "500" }}>:</p>
                <p style={{ color: "white", fontWeight: "500" }}>{event.time}</p>
                <strong style={{ color: "gold", fontWeight: "500" }}>📍 Venue</strong>
                <p style={{ color: "gold", fontWeight: "500" }}>:</p>
                <p style={{ color: "white", fontWeight: "500" }}>{event.venue}</p>
              </div>
            </div>
          </div>

          {/* Prizes Section */}
          {type === "event" && (
            <div className="prizes-container">
              <div className="prizes">
                <h3>🏅 Prizes 🏅</h3>
                <div className="prize-icons">
                  <div className="prize gold">
                    <span role="img" aria-label="gold-medal">
                      🥇
                    </span>
                    <p>
                      <strong>&#8377;{event.prize.Winner}</strong>{" "}
                    </p>
                  </div>
                  <div className="prize silver">
                    <span role="img" aria-label="silver-medal">
                      🥈
                    </span>
                    <p>
                      <strong>&#8377;{event.prize["Runner Up"]}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="event-info">
            <h2 className="event-desc-title">Event Description :</h2>
            {Object.keys(event.description).map((key) => (
              <div className="each-round">
                {event.description[key].title != "" && (
                  <h4 style={{ color: "gold", textAlign: "start", fontSize: "120%" }}>
                    {key} : {event.description[key].title}
                  </h4>
                )}
                <p>{event.description[key].para}</p>

                {event.description[key].list.length > 0 && (
                  <ul className="event-points">
                    {event.description[key].list.map((point) => (
                      <li className="event-point">{point}</li>
                    ))}
                  </ul>
                )}

                {event.description[key].para1 != "" && <p>{event.description[key].para1}</p>}
              </div>
            ))}
          </div>

          <div className="event-info">
            <h2 className="event-desc-title">Event Rules :</h2>
            <ul className="event-points">
              {event.event_rules.map((point) => (
                <li className="event-point">{point}</li>
              ))}
            </ul>
          </div>

          <div className="event-info">
            <h2 className="event-desc-title">Event Requirements :</h2>
            <ul className="event-points">
              {event.event_requirements.map((point) => (
                <li className="event-point">{point}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="event-desc-title">Contact:</h2>
            {Object.keys(event.contact).map((item) => (
              <p style={{ textIndent: "20px", color: "white", fontSize: "90%" }}>
                {item} : {event.contact[item]}
              </p>
            ))}
          </div>

          {/* Register Button and Contact Info */}
          <div className="registration-container">
            <div className="registration">
              <a href={event.form} target="_blank">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedView;
