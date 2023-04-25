import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="grid md:grid-cols-container gap-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NoteList;
