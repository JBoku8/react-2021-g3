import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const NotesContext = React.createContext(null);

// Provider -> store value
// Consumer -> use value

function NotesProviderComponent({ children }) {
  const [noteList, setNoteList] = useState([]);

  const loadTodoListAsync = async () => {
    const list = await API_SERVICE.getTodoListAsync({ start: 60, limit: 20 });
    setNoteList(list);
  };

  useEffect(() => {
    loadTodoListAsync();
  }, []);

  const addNewNote = (newNote) => {
    // console.log('NEW_NOTE', newNote);
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

  NotesContext.displayName = 'NotesContext';

  return (
    <NotesContext.Provider
      value={{ addNewNote, onItemClick, noteList, setNoteList }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProviderComponent;
