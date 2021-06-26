import { TEST_IDS } from '../../utils/testids';

function Greeting({ text }) {
  return (
    <div className="row">
      <h1
        className="text-muted text-dark"
        title={text}
        data-testid={TEST_IDS.greeting.title}>
        {text}
      </h1>
    </div>
  );
}

export default Greeting;
