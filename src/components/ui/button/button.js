import { TEST_IDS } from '../../../utils/testids';

function Button({ type, className, onClick, text }) {
  return (
    <div className="mb-3">
      <button
        type={type}
        className={className}
        onClick={onClick}
        data-testid={TEST_IDS.button}>
        {text}
      </button>
    </div>
  );
}

export default Button;
