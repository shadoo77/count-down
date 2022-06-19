import './App.scss';
import DateInput from './components/DateInput';
import CountDown from './components/CountDown';
import { TimerProvider } from './contexts/timerContext';
import Icon, { IconName } from './Icon';

function App() {
  return (
    <TimerProvider>
      <main className="timer-container">
        <section className='timer'>
          <div><Icon name={IconName.TimerIcon} size={50} fillColor="none" /></div>
          <DateInput />
          <CountDown />
        </section>
      </main>
    </TimerProvider>
  );
}

export default App;
