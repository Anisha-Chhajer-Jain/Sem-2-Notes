// src/components/Scheduler/AISuggestions.jsx
import React from 'react';
import { Star, Calendar, Building, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const AISuggestions = ({ suggestions, onSelect, onExplain }) => {
  if (suggestions.length === 0) {
    return (
      <div className="card">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No suggestions yet</h3>
          <p className="text-gray-500">
            Fill out the event form and click "Suggest Optimal Schedule" to see AI recommendations
          </p>
        </div>
      </div>
    );
  }

  const getBadgeStyles = (badge) => {
    switch (badge) {
      case 'BEST':
        return 'bg-success-500 text-white';
      case 'GOOD':
        return 'bg-warning-500 text-gray-900';
      case 'AVOID':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getBorderStyles = (recommendation) => {
    switch (recommendation) {
      case 'optimal':
        return 'border-success-500 bg-gradient-to-r from-success-50/50 to-success-50/30';
      case 'good':
        return 'border-warning-500 bg-gradient-to-r from-warning-50/50 to-warning-50/30';
      case 'poor':
        return 'border-gray-200 bg-gradient-to-r from-gray-50/50 to-danger-50/30';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">AI Suggestions</h2>
        </div>
        <div className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full">
          {suggestions.length} options
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={`border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getBorderStyles(suggestion.recommendation)}`}
          >
            {/* Badge */}
            <div className={`absolute top-0 right-0 px-4 py-2 rounded-bl-xl rounded-tr-xl ${getBadgeStyles(suggestion.badge)}`}>
              <div className="flex items-center gap-2 font-semibold text-sm">
                {suggestion.badge === 'BEST' && <Star className="w-3 h-3" />}
                {suggestion.badge === 'GOOD' && <CheckCircle className="w-3 h-3" />}
                {suggestion.badge === 'AVOID' && <XCircle className="w-3 h-3" />}
                {suggestion.badge}
              </div>
            </div>

            <div className="pr-16">
              {/* Time and Room */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    {suggestion.startTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    {' • '}
                    {suggestion.startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    {' - '}
                    {suggestion.endTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{suggestion.room} ({suggestion.roomCapacity} capacity)</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">
                    {Math.round(suggestion.predictedAttendance * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Predicted Attendance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {suggestion.score}/100
                  </div>
                  <div className="text-sm text-gray-600">AI Score</div>
                </div>
              </div>

              {/* Conflicts */}
              {suggestion.conflicts.length > 0 && (
                <div className="mb-4 p-3 bg-danger-50 rounded-lg border border-danger-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-danger-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-danger-700 mb-1">
                        {suggestion.conflicts.length} conflict(s) detected
                      </div>
                      <div className="text-sm text-gray-600">
                        {suggestion.conflicts.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => onSelect(suggestion)}
                  className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Select This Slot
                </button>
                <button
                  onClick={() => onExplain(suggestion)}
                  className="flex-1 py-3 border-2 border-gray-200 text-primary-600 font-semibold rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  Why This?
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;