import { useEffect } from 'react';
import { Redirect } from 'react-router';

export const withNoAuthProtected = (Component) => {
  const WithNoAuthProtected = (props) => {
    useEffect(() => {
      console.log('accessing secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) return <Redirect to="/" />;

    return <Component {...props} />;
  };

  return WithNoAuthProtected;
};
