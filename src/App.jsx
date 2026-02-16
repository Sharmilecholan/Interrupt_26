import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import "./App.css";
import TeamPage from "./Components/our_team/TeamPage";
import DetailedView from "./Components/detailed_view/DetailedView";
import Events from "./Components/events/Events";
import Sponsors from "./Components/sponsors/Sponsor";
import Workshop from "./Components/workshop/Workshop";
import Gallery from "./Components/gallery/Gallery";
import Rule from "./Components/rules/Rule";
import WorkshopRegistration from "./Components/WorkshopRegistration";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<DetailedView />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/workshop/:id" element={<DetailedView />} />
          <Route path="/rules" element={<Rule />} />
          <Route path="/workshop-registration" element={<WorkshopRegistration />} />
        </Routes>
      </Router>
    </div>
  );
}
