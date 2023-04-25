import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [addNote, setAddNote] = useState("");
  const noteLimits = 250;
  const handleChange = (e) => {
    if (noteLimits - e.target.value.length >= 0) {
      setAddNote(e.target.value);
    }
  };
  const handleSaveChange = () => {
    if (addNote.trim().length > 0) {
      handleAddNote(addNote);
      setAddNote("");
    }
  };
  return (
    <div className="bg-light-paste rounded-lg p-4 mb-2.5">
      <textarea
        rows="7"
        cols="32"
        placeholder="type to add a note..."
        value={addNote}
        onChange={handleChange}
        className="border-none resize-none rounded-md p-2 bg-light-paste focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <small>{noteLimits - addNote.length} remaining</small>
        <button
          onClick={handleSaveChange}
          className="bg-gray-200 border-none rounded-full py-1 px-3 hover:bg-gray-400 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
