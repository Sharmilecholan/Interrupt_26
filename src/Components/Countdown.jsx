import React, { useState, useEffect } from "react";
import "../Styles/Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-02-20T00:00:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="time-block">
        <h1>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days || "00"}</h1>
        <p>DAYS</p>
      </div>
      <div className="time-block">
        <h1>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours || "00"}</h1>
        <p>HRS</p>
      </div>
      <div className="time-block">
        <h1>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes || "00"}</h1>
        <p>MINS</p>
      </div>
      <div className="time-block">
        <h1>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds || "00"}</h1>
        <p>SEC</p>
      </div>
    </div>
  );
};

export default Countdown;
