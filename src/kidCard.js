import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

function KidCard({ kid, events }) {
  let event = events.map((event) => {
    return <li>{event.name}</li>;
  });

  return (
    <Card>
      <Card.Content>
        <Card.Header>{kid.name}</Card.Header>
      </Card.Content>
      <Card.Meta>{event}</Card.Meta>
    </Card>
  );
}

export default KidCard;
