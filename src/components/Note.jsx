import { MdDeleteForever } from "react-icons/md";
const Note = ({ note, handleDeleteNote }) => {
  const { id } = note;
  return (
    <div className="p-4 min-h-[170px] note mb-2.5 rounded-xl bg-light-yellow flex flex-col justify-between whitespace-pre-wrap">
      <span>{note.text}</span>
      <div className="note-footer flex items-center justify-between">
        <small>{note.date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon cursor-pointer"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
