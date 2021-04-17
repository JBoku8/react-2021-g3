import { useState } from 'react';

import HomePage from './pages/home-page';
import NotesPage from './pages/notes-page/notes-page';
import Navigation from './components/navigation';

import ClassCounter from './pages/class-counter';
import Theme from './components/theme';

import './App.css';

function MyApp() {
  const [page, setPage] = useState({
    homePage: false,
    notesPage: true,
    classCounter: false,
  });

  const [currentPage, setCurrentPage] = useState('notesPage');

  const updatePage = (pageKey) => {
    const updateActivePage = { ...page };
    let newCurrentPage = '';

    Object.keys(updateActivePage).forEach((key) => {
      if (key === pageKey) {
        updateActivePage[pageKey] = true;
        newCurrentPage = pageKey;
      } else {
        updateActivePage[key] = false;
      }
    });

    setPage(updateActivePage);
    setCurrentPage(newCurrentPage);
  };

  return (
    <div className="container">
      <Navigation page={currentPage} setPage={updatePage} />
      <Theme mode={currentPage}>
        {page.homePage && <HomePage />}
        {page.notesPage && <NotesPage />}
        {page.classCounter && (
          <ClassCounter title="Class Component Example" initialValue={10} />
        )}
      </Theme>
    </div>
  );
}

export default MyApp;
