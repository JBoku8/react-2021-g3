import { TEST_IDS } from '../../utils/testids';

function Greeting({ text }) {
  return (
    <div>
      <h1 className="text-muted" data-testid={TEST_IDS.greeting.title}>
        {text}
      </h1>
    </div>
  );
}

export default Greeting;
