import React from 'react';

function CalendarTableHead() {
  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  const cutWeekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return (
    <thead>
      <tr>
        {cutWeekDay.map((day) => (
          <th
            key="day"
            value="day"
            scope="col"
            title={weekDays.map((day) => day)}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default CalendarTableHead;
