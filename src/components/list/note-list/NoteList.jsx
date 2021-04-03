import NoteListItem from "./NoteListItem";

import "./note-list.css";

function NoteList({ data, onItemClick }) {
  return (
    <>
      {data.map((item) => {
        return (
          <NoteListItem item={item} key={item.id} onItemClick={onItemClick} />
        );
      })}
    </>
  );
}

export default NoteList;
