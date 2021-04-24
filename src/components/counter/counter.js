import { useState, useEffect } from 'react';
import Greeting from '../greeting';
import Button from '../ui/button';

import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // console.log("ყოველთვის კომპონენტის გადახატვისას...");
  });

  useEffect(() => {
    // AJAX calls
    // console.log("ერთხელ კომპონენტის დახატვის შემდეგ...");
  }, []);

  useEffect(() => {
    // console.log("count-ზე დამოკიდებული");
    setMessage(count * 10);
  }, [count]);
  // newValue !== oldValue => render

  useEffect(() => {
    // console.log('message შემეცვალა');
  }, [message]);

  const onButtonClick = (value) => {
    setCount(count + value);
  };

  const showGreeting = count < 15 && count > -15;

  return (
    <div className="row counter-container">
      <span>Message - {message}</span>
      {showGreeting ? <Greeting text={`Counter ${count}`} /> : null}
      <div className="col-12 d-flex">
        <Button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onButtonClick(-1);
          }}
          text="Subtract -1"
        />

        <Button
          type="button"
          className="btn btn-success"
          onClick={() => onButtonClick(1)}
          text="Add +1"
        />

        <Button
          type="button"
          className="btn btn-secondary"
          onClick={() => setCount(0)}
          text="Reset Counter"
        />
      </div>
    </div>
  );
}

export default Counter;
