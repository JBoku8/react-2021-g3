import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import Greeting from './greeting';

describe('Greeting component test', () => {
  it('should render default title', () => {
    const component = render(<Greeting />);
    const titleElement = component.getByTestId(TEST_IDS.greeting.title);

    // get
    // query
    // find

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('');
  });

  it('should render with correct title props', () => {
    const mockProps = {
      text: 'mock text',
    };

    const component = render(<Greeting {...mockProps} />);
    const titleElement = component.getByTestId(TEST_IDS.greeting.title);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.text);
    expect(titleElement).toHaveAttribute('title', mockProps.text);
  });
});

describe('Greeting snapshots', () => {
  it('renders successfully snap 1', () => {
    const component = render(<Greeting />);

    expect(component).toMatchSnapshot();
  });

  it('renders successfully snap 2', () => {
    const mockProps = {
      text: 'mock text',
    };
    const component = render(<Greeting {...mockProps} />);

    expect(component).toMatchSnapshot();
  });
});
