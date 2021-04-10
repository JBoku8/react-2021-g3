import HomePage from "./pages/home-page";
import NotesPage from "./pages/notes-page/notes-page";
import Navigation from "./components/navigation";

import "./App.css";
import { useState } from "react";
import ClassCounter from "./pages/class-counter/class-counter";
import Theme from "./components/theme";

function MyApp() {
  const [page, setPage] = useState({
    homePage: false,
    notesPage: false,
    classCounter: true,
  });

  const [currentPage, setCurrentPage] = useState("classCounter");

  const updatePage = (pageKey) => {
    const updateActivePage = { ...page };
    let newCurrentPage = "";

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
