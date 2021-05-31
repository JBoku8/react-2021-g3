import { useContext } from 'react';

import NoteListItem from './NoteListItem';
import { NotesContext } from '../../../contexts/NotesProvider';

import './note-list.css';

function NoteList(props) {
  const { noteList } = useContext(NotesContext);
  return (
    <>
      {noteList.map((item) => (
        <NoteListItem item={item} key={item.id} />
      ))}
    </>
  );
}

export default NoteList;
