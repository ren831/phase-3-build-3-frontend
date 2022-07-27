import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [length, setLength] = useState("");
  const [kidId, setKidId] = useState("");
  const [days, setDays] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const params = {
      name: name,
      start_time: startTime,
      event_length: length,
      days: days,
      kid_id: kidId,
    };

    fetch("http://localhost:9292/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((r) => r.json())
      .then((data) => {
        addEvent(data);
      });
  }

  return (
    <div>
      <h3>Add New Event</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="Start Time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text"
          name="Length"
          placeholder="Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <input
          type="text"
          name="kid_id"
          placeholder="kid_id"
          value={kidId}
          onChange={(e) => setKidId(e.target.value)}
        />
        <input
          type="text"
          name="Days"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
