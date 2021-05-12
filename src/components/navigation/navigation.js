import { NavLink } from 'react-router-dom';

import css from './navigation.module.css';

function Navigation(props) {
  return (
    <div className="row mt-5 mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName={css['active-class']}>
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/notes"
            activeClassName={css['active-class']}>
            Notes Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/counter"
            activeClassName={css['active-class']}>
            Class Counter
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/profile"
            activeClassName={css['active-class']}>
            Profile
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/auth"
            activeClassName={css['active-class']}>
            AuthPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
