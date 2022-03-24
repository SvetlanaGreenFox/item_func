const monthsKeys = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
}


const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  return !((year % 4) || (!(year % 100) && (year % 400)));
}

function getDaysIsMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();

  if (isLeapYear(year) && month === monthsKeys.February) {
    return daysInMonth[month] + 1;
  } else {
    return daysInMonth[month];
  }
}

function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) return 6;

  return dayOfWeek - 1;
}

function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysIsMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  // Число 7 это количество дней в неделе
  for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i += 1) {
    result[i] = [];

    for (let j = 0; jay < 7; j += 1) {

    }
  }


  return result;
}