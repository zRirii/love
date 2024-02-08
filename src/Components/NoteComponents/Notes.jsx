import { useState, useEffect } from "react";
import "../../Assets/Styles/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

const LOCAL_STORAGE_KEY = "Notes";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const addNoteHandler = () => {
    // Create a new note object
    const newNote = {
      id: uuid(),
      text: inputText
    };

    // Update the state with all existing notes and the new one
    setNotes((prevNotes) => [...prevNotes, newNote]);

    // Clear the textarea
    setInputText("");

    // Save the updated notes to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...notes, newNote]));
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);

    // Save the updated notes to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredNotes));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (data) {
      setNotes(data);
    }
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={addNoteHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;