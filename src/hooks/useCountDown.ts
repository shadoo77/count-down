import { useEffect, useState } from 'react';
import { useTimer } from 'src/contexts/timerContext';
import { formatDateToTimeStamp } from 'src/utils/dateUtilities';

const initTimeLeft = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
};

export function useCountDown() {
  const { date, startCountDown } = useTimer();
  const countDownDate = formatDateToTimeStamp(date);

  const [countDown, setCountDown] = useState(
    countDownDate ? (countDownDate - new Date().getTime()) : null
  );

  const getReturnValues = () => {
    if (!countDown || !startCountDown) {
      return { timeleft: initTimeLeft, isExpired: false };
    }

    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    const timeleft = { days, hours, minutes, seconds };
    let isExpired = false;

    if (days + hours + minutes + seconds <= 0) {
      isExpired = true;
    }

    return { timeleft, isExpired };
  };

  useEffect(() => {
    if (countDownDate) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDownDate]);

  return getReturnValues();
}

export default {};
