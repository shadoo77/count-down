import { render, screen, cleanup } from '@testing-library/react';
import DateInput from '../components/DateInput';
import { TimerProvider } from '../contexts/timerContext';

const DateInputElement = (
  <TimerProvider>
    <DateInput />
  </TimerProvider>
);

describe('Test DateInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('DateInput is rendering successfully', () => {
    render(DateInputElement);
    const dateInputElement = screen.getByTestId('date-input-area');
    expect(dateInputElement).toBeInTheDocument();
    expect(dateInputElement).toHaveClass('input-area');
    expect(dateInputElement).toContainHTML('input');
    expect(dateInputElement.childElementCount).toEqual(3);
    // Buttons
    const buttonsDiv = dateInputElement.lastChild;
    expect(buttonsDiv.childElementCount).toEqual(2);
    expect(buttonsDiv).toContainHTML('button');
  });
});
