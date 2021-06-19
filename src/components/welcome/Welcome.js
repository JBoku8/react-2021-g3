import { TEST_IDS } from '../../utils/testids';
import './welcome.css';

export const colors = ['red', 'greenSea', 'carrot', 'wetAsphalt', 'white'];
function Welcome({ color, message, className = '' }) {
  if (!colors.includes(color)) {
    return (
      <div className="alert alert-danger" data-testid={TEST_IDS.welcome.error}>
        <p>Please specify the supported color.</p>
      </div>
    );
  }

  return (
    <div className="row">
      <h2
        className={['welcome-title', className, `text-${color}`].join(' ')}
        data-testid={TEST_IDS.welcome.title}>
        {message}
      </h2>
    </div>
  );
}

export default Welcome;
