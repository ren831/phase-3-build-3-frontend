import React from "react";
import { Card } from "semantic-ui-react";
import FormList from "./FormList";
import NavyBar from "./NavBar";

function KidPage({ addKid, kidArr, kid }) {
  return (
    <main>
      <NavyBar />
      <FormList addKid={addKid} />
      <h4>kids</h4>
      {kidArr}
      <Card>{kid}</Card>
    </main>
  );
}

export default KidPage;
