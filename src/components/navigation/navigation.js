import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors';

import * as routes from '../../utils/routePaths';

import css from './navigation.module.css';

function Navigation() {
  const authorized = useSelector(authSelector);

  return (
    <div className="row mt-5 mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.HOME_PATH}
            exact
            activeClassName={css['active-class']}>
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.NOTES_PATH}
            activeClassName={css['active-class']}>
            Notes Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.COUNTER_PATH}
            activeClassName={css['active-class']}>
            Class Counter
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.FAKER_TEXT_PATH}
            activeClassName={css['active-class']}>
            Faker texts
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.REDUX_COUNTER_PATH}
            activeClassName={css['active-class']}>
            Redux Counter
          </NavLink>
        </li>

        {authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.PROFILE_PATH}
              activeClassName={css['active-class']}>
              Profile
            </NavLink>
          </li>
        )}

        {!authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.AUTH_PATH}
              activeClassName={css['active-class']}>
              AuthPage
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
