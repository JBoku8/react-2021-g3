import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';

import Navigation from './components/navigation';
import Theme from './components/theme';
import { Loader } from './components/loader';

import './App.css';

const NotesPage = React.lazy(() => import('./pages/notes-page/notes-page'));
const ClassCounter = React.lazy(() => import('./pages/class-counter'));
const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const FakerTexts = React.lazy(() => import('./pages/faker-texts'));
const ReduxCounter = React.lazy(() => import('./pages/redux-counter'));

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Suspense fallback={<Loader message="Pages is loading..." />}>
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

            <Route path="/faker-texts">
              <FakerTexts />
            </Route>

            <Route path="/redux-counter">
              <ReduxCounter />
            </Route>

            <Route path="/auth">
              <AuthPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Theme>
    </div>
  );
}

export default App;
