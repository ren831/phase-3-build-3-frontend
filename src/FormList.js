import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormList({ addKid }) {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const params = {
      name: name,
    };

    fetch("http://localhost:9292/kids", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((r) => r.json())
      .then((data) => {
        addKid(data);
      });
  }

  return (
    <div>
      <h3>Add New Kid</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Kid</button>
      </form>
    </div>
  );
}

export default FormList;
