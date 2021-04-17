import PropTypes from 'prop-types';

import './theme.css';

function Theme({ children, mode = 'light' }) {
  return <div className={`p-3 bg-${mode}`}>{children}</div>;
}

Theme.propTypes = {
  mode: PropTypes.oneOf(['classCounter', 'homePage', 'notesPage']).isRequired,
};

export default Theme;
