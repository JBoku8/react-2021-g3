import classNames from 'classnames';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import SignIn from './sign-in';
import SignUp from './sign-up';
import { withNoAuthProtected } from '../../hoc';

function AuthPage() {
  const { pathname } = useLocation();
  return (
    <div className="row bg-light p-5">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to="/auth/sign-in"
              className={classNames('nav-link', {
                active: pathname.includes('/sign-in'),
              })}>
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auth/sign-up"
              className={classNames('nav-link', {
                active: pathname.includes('/sign-up'),
              })}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>

      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignIn />
          </Route>
          <Route path="/auth/sign-up">
            <SignUp />
          </Route>
          <Redirect to="/auth/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuthProtected(AuthPage);
