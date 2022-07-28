import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

function KidCard({ kid, events }) {
  let event = events.map((event) => {
    return <li>{event.name}</li>;
  });

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <b>{kid.name}</b>
        </Card.Header>
        id:{kid.id}
      </Card.Content>
      <Card.Meta>{event}</Card.Meta>
    </Card>
  );
}

export default KidCard;
