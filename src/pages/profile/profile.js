import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc';
import { setAuthGuestAction } from '../../redux/actions';
import { logOut } from '../../services';

import css from './profile.module.css';

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = async () => {
    await logOut();

    dispatch(setAuthGuestAction());

    history.replace('/');
  };

  return (
    <div className={classNames('row mt-3 p-3', css.profile)}>
      <button className="btn btn-light btn-lg mb-3" onClick={onLogOut}>
        Log Out
      </button>
      <h2 className={classNames(css.title)}>{props.title}</h2>
    </div>
  );
}

export default withAuthProtected(Profile);
