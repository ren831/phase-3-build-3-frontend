import React from "react";
import NavyBar from "./NavBar";
import { Card } from "semantic-ui-react";
import EventForm from "./EventForm";

function Events({ event, eventArr, addEvent }) {
  return (
    <div>
      <NavyBar />
      <EventForm addEvent={addEvent} />
      {event}
      <Card>{eventArr}</Card>
    </div>
  );
}

export default Events;
