import React, { useState } from "react";

function CreateArea(props) {
  const [prestitle, setTitle] = useState("");
  const [presContent, setContent] = useState("");
  function handleChange(event) {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    if (name === "title") setTitle(value);
    else setContent(value);
  }
  function handleSubmit(event) {
    props.addItems(prestitle, presContent);
    event.preventDefault();
    setContent("");
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={prestitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={presContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
