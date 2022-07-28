import React from "react";

function kidForm() {
  return (
    <div>
      <h3>Update Kid</h3>
      <form onSubmit={handleChange}>
        <input type="text" name="Kid Name" placeholder="Kid Name" />

        <input type="text" name="event id" placeholder="event id" />
        <button type="submit">Update Kid</button>
      </form>
    </div>
  );
}
