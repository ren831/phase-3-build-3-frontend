import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KidCard from "./kidCard";
import Events from "./Events";
import EventCard from "./EventCard";
import KidPage from "./KidPage";

function App() {
  const [kids, setKids] = useState([]);
  const [events, setEvents] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/kids")
      .then((r) => r.json())
      .then((data) => setKids(data));
  }, []);

  let kidArr = kids.map((kid) => {
    return <KidCard key={kid.id} kid={kid} events={kid.events} />;
  });

  function addKid(newKid) {
    const updatedKid = [...kids, newKid];
    setKids(updatedKid);
  }

  function addEvent(newEvent) {
    const updateEvent = [...events, newEvent];
    setEvents(updateEvent);
  }

  let eventArr = kids.map((kid) => {
    return kid.events.map((event) => {
      return (
        <EventCard
          key={event.id}
          event={event.name}
          days={event.days}
          length={event.event_length}
          kid_id={event.kid_id}
          start_time={event.start_time}
        />
      );
    });
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <KidPage kidArr={kidArr} addKid={addKid} eventArr={eventArr} />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Events"
          element={<Events eventArr={eventArr} addEvent={addEvent} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
