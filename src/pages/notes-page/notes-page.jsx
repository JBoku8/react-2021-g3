import { useState } from "react";
import AddNoteForm from "../../components/forms/add-note-form";
import NoteList from "../../components/list/note-list";

import noteListData from "../../data/note-list";

function NotesPage(props) {
  const [noteList, setNoteList] = useState(noteListData);

  const addNewNote = (newNote) => {
    // console.log("NEW_NOTE", newNote);
    const newList = [...noteList, newNote];
    // newObject !== oldObject
    setNoteList(newList);
  };

  const onItemClick = (itemId) => {
    const itemIndex = noteList.findIndex((item) => item.id === itemId);
    if (!noteList[itemIndex].done) {
      const newListState = [
        ...noteList.slice(0, itemIndex),
        {
          ...noteList[itemIndex],
          done: true,
        },
        ...noteList.slice(itemIndex + 1),
      ];
      setNoteList(newListState);
    } else {
      const newListState = noteList.filter((n) => n.id !== itemId);
      setNoteList(newListState);
    }
  };

  return (
    <div className="row">
      <h2>Notes Page</h2>
      <div className="col-4">
        <AddNoteForm addNewNote={addNewNote} />
      </div>
      <div className="col-8 d-flex flex-wrap">
        <NoteList data={noteList} onItemClick={onItemClick} />
      </div>
    </div>
  );
}
export default NotesPage;
