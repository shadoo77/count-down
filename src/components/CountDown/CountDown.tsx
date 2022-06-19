import { useCountDown } from '../../hooks/useCountDown';

function ExpiredDate() {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
}

function CountDown() {
  const { timeleft, isExpired } = useCountDown();
  const { days, hours, minutes, seconds } = timeleft;

  if (isExpired) {
    return <ExpiredDate />;
  }

  return (
    <section
      className='count-down'
      data-testid="count-down"
    >
      <div>
        <span>{days}</span>
        <span><small>days</small></span>
      </div>
      <div>
        <span>{hours}</span>
        <span><small>hours</small></span>
      </div>
      <div>
        <span>{minutes}</span>
        <span><small>minutes</small></span>
      </div>
      <div>
        <span>{seconds}</span>
        <span><small>seconds</small></span>
      </div>
    </section>
  );
}

export default CountDown;
