import React from 'react';
import { getMonthData } from './Utils.js';

function CalendarTableBody(props) {
  const {
    dataDate: { year },
    dataDate: { month },
    dataDate: { date },
  } = props;
  console.log(year, month, date);

  const now = getMonthData(year, month);

  return (
    <tbody>
      {now.map((week) => (
        <tr key="week" value="week">
          {week.map((day) =>
            day[1] === null ? (
              <td>{day[0]}</td>
            ) : (
              <td className={day[1]}>{day[0]}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default CalendarTableBody;
