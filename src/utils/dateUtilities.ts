import { CONSTANTS } from 'src/config/constants';

// Validate input date date
export const validateDate = (date: string) => date.match(CONSTANTS.dateRegex);

// formats date in dd/mm/yyyy to timeStamp
export const formatDateToTimeStamp = (date: string) => {
  const isValidDate = validateDate(date);

  if (!isValidDate) {
    return null;
  }
  // check how did the user type date (in which format '-' , '/' or '.')
  let dateParts = date.split('/');

  if (date.includes('-')) {
    dateParts = date.split('-');
  } else if (date.includes('.')) {
    dateParts = date.split('.');
  }

  const dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

  if (isNaN(dateObject.getTime())) {
    return null;
  }

  return dateObject.getTime();
};
