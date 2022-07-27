import React from "react";
import KidCard from "./kidCard";
import NavBar from "./NavBar";
import KidPage from "./KidPage";

function Home({ kidArr, addKid }) {
  return (
    <div>
      <NavBar />
      <KidPage kid={kidArr} addKid={addKid} />
    </div>
  );
}

export default Home;
