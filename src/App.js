import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navigation from './components/navigation';
import Routes from './Routes';

import { autoLoginAction } from './redux/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, []);
  return (
    <div className="container">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
