import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import DummyData from "./dummy_data/DummyData";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState(DummyData);
  const [searchText, setSearchText] = useState("");
  const [darkToggleMode, setDarkToggleMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note-taking-app"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("note-taking-app", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text) => {
    const date = new Date();
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const year = date.toLocaleString("default", { year: "numeric" });
    const dateFormat = day + "/" + month + "/" + year;
    const newNote = {
      id: nanoid(),
      text: text,
      date: dateFormat,
    };
    setNotes([...notes, newNote]);
  };
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  return (
    <div className={`${darkToggleMode && "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-4 min-h-screen">
        <Header
          handleToggleMode={setDarkToggleMode}
          darkToggleMode={darkToggleMode}
        />
        <Search handleSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
};
export default App;
