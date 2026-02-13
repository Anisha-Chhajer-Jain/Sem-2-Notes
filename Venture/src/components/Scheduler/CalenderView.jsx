// src/components/Scheduler/CalendarView.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';

const CalendarView = ({ 
  existingEvents, 
  suggestions, 
  currentWeekStart, 
  onWeekChange 
}) => {
  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM
  const weekDays = eachDayOfInterval({
    start: currentWeekStart,
    end: addDays(currentWeekStart, 4) // Monday to Friday
  });

  const getEventsForSlot = (day, hour) => {
    const events = existingEvents.filter(event => {
      const eventDate = new Date(event.start);
      return isSameDay(eventDate, day) && eventDate.getHours() === hour;
    });

    const suggestion = suggestions.find(suggestion => {
      return isSameDay(suggestion.startTime, day) && suggestion.startTime.getHours() === hour;
    });

    return { events, suggestion };
  };

  const getEventColor = (event) => {
    if (event.type === 'suggestion') return 'from-warning-400 to-warning-300';
    if (event.attendance < 50) return 'from-danger-500 to-danger-400';
    if (event.attendance > 80) return 'from-success-500 to-success-400';
    return 'from-primary-500 to-primary-400';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onWeekChange(addDays(currentWeekStart, -7))}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-primary-600"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <h2 className="text-xl font-bold text-gray-900">
          {format(currentWeekStart, 'MMM d')} - {format(addDays(currentWeekStart, 4), 'MMM d, yyyy')}
        </h2>
        
        <button
          onClick={() => onWeekChange(addDays(currentWeekStart, 7))}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-primary-600"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Calendar Header */}
        <div className="grid grid-cols-6 bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="p-3 font-semibold text-gray-700">Time</div>
          {weekDays.map((day) => (
            <div key={day.toString()} className="p-3 text-center font-semibold text-gray-700 border-l border-gray-200">
              {format(day, 'EEE')}<br />
              <span className="text-sm text-gray-500">{format(day, 'd')}</span>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="divide-y divide-gray-200">
          {timeSlots.map((hour) => (
            <div key={hour} className="grid grid-cols-6">
              <div className="p-3 text-sm text-gray-500 font-medium border-r border-gray-200 flex items-center justify-center">
                {hour}:00
              </div>
              
              {weekDays.map((day) => {
                const { events, suggestion } = getEventsForSlot(day, hour);
                const cellEvents = [...events];
                if (suggestion) {
                  cellEvents.push({
                    title: 'AI Suggestion',
                    start: suggestion.startTime.toISOString(),
                    end: suggestion.endTime.toISOString(),
                    room: suggestion.room,
                    attendance: Math.round(suggestion.predictedAttendance * 100),
                    type: 'suggestion'
                  });
                }

                return (
                  <div key={day.toString()} className="p-1 min-h-[80px] relative border-r border-gray-200 last:border-r-0">
                    {cellEvents.map((event, index) => {
                      const duration = (new Date(event.end).getHours() - new Date(event.start).getHours()) || 2;
                      const height = duration * 80;
                      
                      return (
                        <div
                          key={index}
                          className={`absolute left-1 right-1 p-2 rounded-lg bg-gradient-to-r ${getEventColor(event)} text-white text-sm shadow-sm cursor-pointer hover:shadow-md transition-shadow`}
                          style={{
                            top: '4px',
                            height: `${height}px`,
                            zIndex: event.type === 'suggestion' ? 10 : 1
                          }}
                          title={`${event.title}\n${event.room}\nAttendance: ${event.attendance}%`}
                        >
                          <div className="font-semibold truncate">{event.title}</div>
                          <div className="text-xs opacity-90 truncate">{event.room}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 justify-center mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-success-500 to-success-400"></div>
          <span className="text-sm text-gray-600">Optimal Event</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-primary-500 to-primary-400"></div>
          <span className="text-sm text-gray-600">Scheduled Event</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-danger-500 to-danger-400"></div>
          <span className="text-sm text-gray-600">Conflict</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-warning-400 to-warning-300"></div>
          <span className="text-sm text-gray-600">AI Suggestion</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;