import { useState } from "react";
import Greeting from "../greeting";
import Button from "../ui/button";

import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const onButtonClick = (value) => {
    setCount(count + value);
  };

  const showGreeting = count < 15 && count > -15;

  return (
    <div className="row counter-container">
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
