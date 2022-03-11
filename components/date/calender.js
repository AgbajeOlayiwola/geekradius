import React, {useState,useEffect, Fragment} from 'react'
import calendar, {
    isDate,
    isSameDay,
    isSameMonth,
    getDateISO,
    getNextMonth,
    getPreviousMonth,
    WEEK_DAYS,
    CALENDAR_MONTHS,
  } from "./helpers/calenderhelper";


const Calender = ({date, onzDateChanged})=>{
    const [dateState, setDateState] = useState({ current: 0, month: 0, year: 0 });
    const [today, setToday] = useState(new Date());
    useEffect(() => {
      addDateToState(date);
    }, []);
    const addDateToState = (date) => {
      const isDateObject = isDate(date);
      const _date = isDateObject ? date : new Date();
      setDateState({
        current: isDateObject ? date : null,
        month: +_date.getMonth() + 1,
        year: _date.getFullYear(),
      });
    };
    const getCalendarDates = () => {
      const { current, month, year } = dateState;
      const calendarMonth = month || +current.getMonth() + 1;
      const calendarYear = year || current.getFullYear();
      return calendar(calendarMonth, calendarYear);
    };
    return(
        <>
        {renderMonthAndYear()}
      <Styled.CalendarGrid>
        <Fragment>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</Fragment>
        <Fragment>{getCalendarDates().map(renderCalendarDate)}</Fragment>
      </Styled.CalendarGrid>
      
        </>
    )
}
Calendar.propTypes = {
    date: PropTypes.instanceOf(Date),
    onDateChanged: PropTypes.func,
  };


  let pressureTimer, pressureTimeout; 

const renderMonthAndYear = () => {
    const { month, year } = dateState;
    // Resolve the month name from the CALENDAR_MONTHS object map
    const monthname =
      Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
    return (
      <Styled.CalendarHeader>
        <Styled.ArrowLeft
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
          title="Previous Month"
        />
        <Styled.CalendarMonth>
          {monthname} {year}
        </Styled.CalendarMonth>
        <Styled.ArrowRight
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
          title="Next Month"
        />
      </Styled.CalendarHeader>
    );
  };
  // Render the label for day of the week
  // This method is used as a map callback as seen in render()
  const renderDayLabel = (day, index) => {
    // Resolve the day of the week label from the WEEK_DAYS object map
    const daylabel = WEEK_DAYS[day].toUpperCase();
    return (
      <Styled.CalendarDay key={daylabel} index={index}>
        {daylabel}
      </Styled.CalendarDay>
    );
  };
  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()
  const renderCalendarDate = (date, index) => {
    const { current, month, year } = dateState;
    const _date = new Date(date.join("-"));
    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);
    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);
    // Check if calendar date is in the same month as the state month and year
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));
    // The click handler
    const onClick = this.gotoDate(_date);
    const props = { index, inMonth, onClick, title: _date.toDateString() };
    // Conditionally render a styled date component
    const DateComponent = isCurrent
      ? Styled.HighlightedCalendarDate
      : isToday
      ? Styled.TodayCalendarDate
      : Styled.CalendarDate;
    return (
      <DateComponent key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </DateComponent>
    );
  };

export default Calender