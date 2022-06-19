import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import CountDown from '../components/CountDown';
import { TimerProvider } from '../contexts/timerContext';

const CountDownElement = (
  <TimerProvider>
    <CountDown />
  </TimerProvider>
);

afterEach(() => {
  cleanup();
});

it('CountDown is rendering successfully', () => {
  render(CountDownElement);
  const countdownElement = screen.getByTestId('count-down');
  expect(countdownElement).toBeInTheDocument();
  expect(countdownElement).toHaveClass('count-down');
  expect(countdownElement).toContainHTML('div');
  expect(countdownElement.childElementCount).toEqual(4);
});

it('matches snapshot', () => {
  const component = renderer.create(CountDownElement);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
