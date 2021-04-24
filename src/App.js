import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import NotesPage from './pages/notes-page/notes-page';
import ClassCounter from './pages/class-counter';
import Profile from './pages/profile';

import Navigation from './components/navigation';
import Theme from './components/theme';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Switch>
          <Route path="/notes">
            <NotesPage />
          </Route>

          <Route path="/counter">
            <ClassCounter title="Class Component Example" initialValue={10} />
          </Route>

          <Route path="/profile">
            <Profile title="Secured Profile Page" />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
