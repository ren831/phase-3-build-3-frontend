import React from "react";
import { Card } from "semantic-ui-react";

function EventCard({ event, days, start_time, length }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <h2>{event}</h2>
        </Card.Header>
        <Card.Meta>
          <b>Days:</b> {days}
        </Card.Meta>
        <Card.Description>
          {" "}
          <b>Start Time: </b>
          {start_time}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <b>length </b>
        {length}-Hour
      </Card.Content>
    </Card>
  );
}

export default EventCard;
