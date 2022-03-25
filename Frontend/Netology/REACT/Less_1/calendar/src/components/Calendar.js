import React from 'react';
import CalendarTableHead from './CalendarTableHead.js';
import CalendarTableBody from './CalendarTableBody.js';

function Calendar(props) {
  const { date } = props;
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const today = days[date.day];
  const thisMonth = months[date.month];

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{today}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.date}</div>
          <div className="ui-datepicker-material-month">{thisMonth}</div>
          <div className="ui-datepicker-material-year">{date.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{thisMonth}</span>&nbsp;
          <span className="ui-datepicker-year">{date.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <CalendarTableHead />
        <CalendarTableBody dataDate={date} />
      </table>
    </div>
  );
}

export default Calendar;