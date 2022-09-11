import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevVal) => {
      return { ...prevVal, [name]: value };
    });
    console.log(text);
  }
  return (
    <div>
      <form>
        <input
          value={text.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addNote(text);
            setText({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
