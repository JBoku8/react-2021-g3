import { render } from '@testing-library/react';
import { TEST_IDS } from '../../../utils/testids';
import Button from './button';

describe('Button component test', () => {
  it('should render button with correct props and can execute onCLick', () => {
    const props = {
      type: 'button',
      className: 'mock-classname',
      text: 'mock-text',
    };
    const onClickHandler = jest.fn();
    const component = render(<Button {...props} onClick={onClickHandler} />);
    const buttonElement = component.getByTestId(TEST_IDS.button);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', props.type);
    expect(buttonElement).toHaveTextContent(props.text);

    expect(buttonElement.classList.contains(props.className)).toBeTruthy();

    buttonElement.click();
    expect(onClickHandler).toBeCalledTimes(1);
  });
});
