import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);
  function addNote(text) {
    setNote((prevArr) => {
      return [...prevArr, text];
    });
  }
  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />

      {notes.map((note, index) => {
        return <Note key={index} id={index} note={note} delete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
