import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, Clock, Sparkles } from 'lucide-react';

const CalendarView = ({
  config,
  filteredAndSortedData,
  hasButtons,
  visibleButtons,
  moreButtons,
  showExtraColumn,
  selectedRows,
  openDropdown,
  handleSelectRow,
  handleButtonClick,
  toggleDropdown,
  setOpenDropdown,
  getIconComponent
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const { calendar } = config;

  // Get current month details
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dateColumns = config?.date_col || {};


  function buildCalendarEvents(config) {
    const dateColumns = config?.calendar?.date_col || {};
    const rows = config?.rows || filteredAndSortedData || [];
    const calendarEventsMap = {};
    const titleKey = config?.calendar?.colmap?.title
    rows.forEach((row) => {
      Object.entries(dateColumns).forEach(([colKey, color]) => {
        const rawDate = row[colKey];
        // console.log({rawDate})
        if (!rawDate) return;

        const date = new Date(rawDate);
        if (isNaN(date.getTime())) return;

        const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        const event = {
          id: `${row.id}-${colKey}`,
          title: `${row[titleKey] || 'Unnamed'}`,
          eventType: row[colKey],
          eventColor: color,
          start: date.toISOString(),
          description: row.userid || '',
          backgroundColor: color,
          borderColor: color,
          textColor: '#fff',
          extendedProps: {
            ...row,
            sourceField: colKey,
          },
        };

        if (!calendarEventsMap[dateKey]) {
          calendarEventsMap[dateKey] = [];
        }

        calendarEventsMap[dateKey].push(event);
      });
    });
    console.log({ calendarEventsMap })
    return calendarEventsMap;
  }

  const calendarEventsMap = useMemo(() => buildCalendarEvents(config), [config]);


  // Navigate months
  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const generateCalendarDays = () => {
    const days = [];

    const prevMonth = new Date(currentYear, currentMonth - 1, 0);
    const prevMonthDays = prevMonth.getDate();

    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(currentYear, currentMonth - 1, day),
        events: []
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = date.toDateString() === today.toDateString();

      days.push({
        day,
        isCurrentMonth: true,
        isToday,
        date,
        events: calendarEventsMap[dateKey] || []
      });
    }

    // Next month's leading days
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - days.length;

    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(currentYear, currentMonth + 1, day),
        events: []
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Get events for selected date
  //   const selectedDateEvents = selectedDate ? calendarEvents[
  //     `${selectedDate.getFullYear()}-${String(selectedDate.getMonth()).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
  //   ] || [] : [];
  const selectedDateEvents = selectedDate ? calendarEventsMap[
    `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
  ] || [] : [];

  const getCardValue = (row, field) => {
    if (!calendar?.colmap?.[field]) return '';
    return row[calendar.colmap[field]] || '';
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200/60 backdrop-blur-sm">
        <div className="px-3 py-2">
          {/* Main Header Row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-6">
              {/* Calendar Icon & Brand */}

              {/* Navigation Controls */}
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg py-1 shadow-sm border border-gray-200/50">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-3">
                  {/* Month Selector */}
                  <div className="relative">
                    <select
                      value={currentMonth}
                      onChange={(e) => setCurrentDate(new Date(currentYear, parseInt(e.target.value), 1))}
                      className="appearance-none outline-0 bg-transparent text-action text-md font-semibold pr-6  cursor-pointer transition-colors"
                    >
                      {monthNames.map((month, idx) => (
                        <option key={month} value={idx} className="bg-white text-action">
                          {month}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-gray-300 "></div>
                  {/* Year Selector */}
                  <div className="relative">
                    <select
                      value={currentYear}
                      onChange={(e) => setCurrentDate(new Date(parseInt(e.target.value), currentMonth, 1))}
                      className="appearance-none bg-transparent text-md font-semibold text-action pr-6 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() - 5 + i;
                        return (
                          <option key={year} value={year} className="bg-white text-action">
                            {year}
                          </option>
                        );
                      })}
                    </select>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>  
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setCurrentDate(new Date())}
                className="inline-flex cursor-pointer items-center px-3 py-1.5 bg-action text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Current Month
              </button>

            </div>
          </div>

          {/* Legend Row */}
          {calendar?.notes_user && calendar?.date_col && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Event Types:</span>
                <div className="flex items-center space-x-3">
                  {Object.entries(calendar.date_col).map(([field, color]) => (
                    <div key={field} className="flex items-center space-x-1 group">
                      <div className="relative">
                        <div
                          className="w-3 h-3 rounded-full shadow-sm border-2 border-white group-hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div
                          className="absolute inset-0 w-3 h-3 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors capitalize">
                        {field.replace(/_/g, ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <span className="font-medium">{new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        {/* Main Calendar Grid */}
        <div className="flex-1 p-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-px mb-2">
            {dayNames.map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-500 bg-gray-50">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {calendarDays.map((dayObj, index) => (
              <div
                key={index}
                onClick={() => {
                  if (dayObj?.isCurrentMonth) {
                    setSelectedDate(dayObj?.date);
                  }
                }}
                className={`
                  min-h-24 p-2 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative
                  ${!dayObj?.isCurrentMonth ? 'text-gray-400 bg-gray-50' : ''}
                  ${dayObj?.isToday ? 'bg-blue-50 border-2 border-blue-200' : ''}
                  ${selectedDate && dayObj?.date?.toDateString() === selectedDate?.toDateString() ?
                    'ring-2 ring-blue-500 ring-inset' : ''}
                `}
              >
                {/* Day Number */}
                <div className={`
                  text-sm font-medium mb-1
                  ${dayObj?.isToday ? 'text-blue-600' : dayObj?.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                `}>
                  {dayObj?.day}
                </div>

                {/* Events */}
                <div className="space-y-1">
                  {dayObj?.events.slice(0, 3).map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="text-xs p-1 rounded text-white truncate cursor-pointer hover:opacity-80"
                      style={{
                        backgroundColor: event?.eventColor,
                        maxWidth: '100%'
                      }}
                      title={`${event?.title} - ${event?.eventType?.replace(/_/g, ' ')}`}
                    >
                      {event?.title}
                    </div>
                  ))}

                  {dayObj?.events?.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{dayObj?.events?.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Date Details Sidebar */}
        {selectedDate && (
          <div className="w-80 border-l border-gray-200 bg-gray-50 flex flex-col">
            <div className="p-2 border-b border-gray-200 bg-white">
              <h3 className="font-medium text-gray-900 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {selectedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedDateEvents?.length} event{selectedDateEvents?.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1.5 max-h-screen overflow-x-hidden">
              {selectedDateEvents?.length > 0 ? (
                selectedDateEvents?.map((event, index) => (
                  <div key={index}
                  
                    className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow">
                    {/* Event Header */}

                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start space-x-2 flex-1">
                        {/* <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        </div> */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {event?.title}
                          </h4>
                          {event?.description && (
                            <p className="text-xs text-gray-500 truncate">
                              {event?.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* {showExtraColumn === 'checkbox' && (
                        <input
                          type="checkbox"
                          checked={selectedRows.has(event?.id)}
                          onChange={() => handleSelectRow(event?.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      )} */}
                    </div>

                    {/* Event Type Badge */}
                    <div className="mb-2">
                      <span
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: event?.eventColor }}
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {event?.eventType?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>

                    {/* Event Actions */}
                    {hasButtons && (
                      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                        <div className="flex items-center space-x-1">
                          {visibleButtons.slice(0, 5).map(([buttonKey, button]) => (
                            <button
                              key={buttonKey}
                              onClick={() => handleButtonClick(buttonKey, button, event)}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                              title={button?.label}
                            >
                              {getIconComponent(button?.icon)}
                            </button>
                          ))}
                        </div>

                        {(visibleButtons?.length > 5 || moreButtons?.length > 0) && (
                          <div className="relative">
                            <button
                              onClick={() => toggleDropdown(event?.id)}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>

                            {openDropdown === event?.id && (
                              <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                <div className="py-1">
                                  {visibleButtons?.slice(5)?.concat(moreButtons)?.map(([buttonKey, button]) => (
                                    <button
                                      key={buttonKey}
                                      onClick={() => {
                                        handleButtonClick(buttonKey, button, event);
                                        setOpenDropdown(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      title={button?.label}
                                    >
                                      <div className="flex-shrink-0">{getIconComponent(button?.icon)}</div>
                                      <span className="truncate">{button?.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">No events on this date</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;