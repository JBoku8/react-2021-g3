import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import Theme from './components/theme';
import { Loader } from './components/loader';

import * as routes from './utils/routePaths';

const NotesPage = React.lazy(() => import('./pages/notes-page/notes-page'));
const ClassCounter = React.lazy(() => import('./pages/class-counter'));
const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const FakerTexts = React.lazy(() => import('./pages/faker-texts'));
const ReduxCounter = React.lazy(() => import('./pages/redux-counter'));

function Routes() {
  return (
    <Theme>
      <Suspense fallback={<Loader message="Pages is loading..." />}>
        <Switch>
          <Route path={routes.NOTES_PATH}>
            <NotesPage />
          </Route>

          <Route path={routes.COUNTER_PATH}>
            <ClassCounter title="Class Component Example" initialValue={10} />
          </Route>

          <Route path={routes.PROFILE_PATH}>
            <Profile title="Secured Profile Page" />
          </Route>

          <Route path={routes.FAKER_TEXT_PATH}>
            <FakerTexts />
          </Route>

          <Route path={routes.REDUX_COUNTER_PATH}>
            <ReduxCounter />
          </Route>

          <Route path={routes.AUTH_PATH}>
            <AuthPage />
          </Route>

          <Route path={routes.HOME_PATH}>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Theme>
  );
}

export default Routes;
