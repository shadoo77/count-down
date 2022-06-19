import { ChangeEvent } from 'react';
import { validateDate } from 'src/utils/dateUtilities';
import { useTimer } from '../../contexts/timerContext';

function DateInput() {
  const { date, stateUpdater, resetState } = useTimer();

  const isDateValid = validateDate(date);

  const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
    stateUpdater({ date: e.target.value, startCountDown: false });
  };

  return (
    <div className="input-area" data-testid="date-input-area">
      <div className="text-input">
        <input
          type="text"
          name="text"
          placeholder="Type date .."
          onChange={handleChange}
          value={date}
        />
      </div>
      {/* eslint-disable-next-line max-len */}
      <div className='input-area-note'>
        Notic : Type a valid date format, choose between dd-MM-YYYY, dd/MM/YYYY or dd.MM.YYYY
      </div>
      <div>
        <button
          className={`btn btn--${isDateValid ? 'primary' : 'disabled'}`}
          disabled={!isDateValid}
          onClick={() => stateUpdater({ startCountDown: true })}
        >
            count down
        </button>
        <button
          className="btn btn--secondary"
          onClick={resetState}
        >
                Reset
        </button>
      </div>
    </div>
  );
}

export default DateInput;
