import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import Welcome from './Welcome';

describe('Welcome component test', () => {
  it('should not render message, should render error', () => {
    const component = render(<Welcome color="yellow" />);
    const messageElement = component.queryByTestId(TEST_IDS.welcome.title);
    const errorElement = component.getByTestId(TEST_IDS.welcome.error);
    expect(messageElement).not.toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });
});
