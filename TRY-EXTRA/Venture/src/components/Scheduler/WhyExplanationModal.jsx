// src/components/Scheduler/WhyExplanationModal.jsx
import React from 'react';
import { X, CheckCircle, XCircle, Brain, TrendingUp, Users, Calendar } from 'lucide-react';

const WhyExplanationModal = ({ isOpen, onClose, slot }) => {
  if (!isOpen || !slot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">AI Explanation</h3>
              <p className="text-gray-600">Why this slot is {slot.badge}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Summary */}
          <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{slot.score}/100</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  {Math.round(slot.predictedAttendance * 100)}%
                </div>
                <div className="text-sm text-gray-600">Predicted Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{slot.conflicts.length}</div>
                <div className="text-sm text-gray-600">Conflicts Detected</div>
              </div>
            </div>
          </div>

          {/* Why This Slot Is Good/Bad */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Why this slot is{' '}
              <span className={`
                ${slot.recommendation === 'optimal' ? 'text-success-600' : 
                  slot.recommendation === 'good' ? 'text-warning-600' : 
                  'text-danger-600'} font-bold
              `}>
                {slot.badge}
              </span>
            </h4>
            <div className="space-y-3">
              {slot.explanation.map((exp, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${
                    exp.type === 'positive'
                      ? 'bg-success-50 border-success-500'
                      : 'bg-danger-50 border-danger-500'
                  }`}
                >
                  {exp.type === 'positive' ? (
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-danger-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{exp.title}</h5>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Considerations */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Considerations</h4>
            <div className="grid gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <div className="font-semibold text-gray-900">Room Capacity</div>
                </div>
                <div className="text-gray-600 ml-8">
                  {slot.room} ({slot.roomCapacity} capacity)
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div className="font-semibold text-gray-900">Time Slot Quality</div>
                </div>
                <div className="text-gray-600 ml-8">
                  {slot.startTime.getHours()}:00 - {slot.startTime.getHours() >= 14 && slot.startTime.getHours() <= 17 
                    ? 'Peak hours (optimal attendance)' 
                    : slot.startTime.getHours() < 10 
                    ? 'Morning hours (lower attendance)' 
                    : 'Standard hours'}
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <div className="font-semibold text-gray-900">Scheduling Conflicts</div>
                </div>
                <div className="text-gray-600 ml-8">
                  {slot.conflicts.length === 0 
                    ? 'No conflicts detected' 
                    : `${slot.conflicts.length} conflict(s) found`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Got it, thanks AI!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyExplanationModal;