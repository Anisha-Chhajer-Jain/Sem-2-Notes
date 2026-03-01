// src/components/Scheduler/EventForm.jsx
import React, { useState } from 'react';
import { CalendarPlus, Users, Clock, Tool, Brain } from 'lucide-react';
import { CATEGORIES, EQUIPMENT_OPTIONS } from '../../utils/constants';

const EventForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    title: 'AI Career Fair',
    category: 'career',
    expectedCrowd: 200,
    duration: 2,
    equipment: ['projector', 'sound']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    onSubmit(eventData);
  };

  const handleEquipmentChange = (value) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.includes(value)
        ? prev.equipment.filter(e => e !== value)
        : [...prev.equipment, value]
    }));
  };

  return (
    <div className="card sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg">
          <CalendarPlus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Create New Event</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="input-primary"
            placeholder="e.g., AI Career Fair, Hackathon Workshop"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, category: category.value }))}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                  formData.category === category.value
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50'
                    : 'border-gray-200 hover:border-primary-500/50 hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium text-gray-700">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Expected Crowd */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Expected Crowd
            </label>
            <span className="text-2xl font-bold text-primary-600">
              {formData.expectedCrowd} attendees
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="500"
            value={formData.expectedCrowd}
            onChange={(e) => setFormData(prev => ({ ...prev, expectedCrowd: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary-500 [&::-webkit-slider-thumb]:rounded-full"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Small (20)</span>
            <span>Medium</span>
            <span>Large (500)</span>
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Duration
          </label>
          <select
            value={formData.duration}
            onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="input-primary"
          >
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4+ hours</option>
          </select>
        </div>

        {/* Required Equipment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Tool className="w-4 h-4" />
            Required Equipment
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {EQUIPMENT_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.equipment.includes(option.value)
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.equipment.includes(option.value)}
                  onChange={() => handleEquipmentChange(option.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center ${
                  formData.equipment.includes(option.value)
                    ? 'bg-primary-500 border-primary-500'
                    : 'border-gray-300'
                }`}>
                  {formData.equipment.includes(option.value) && (
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  )}
                </div>
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating AI Suggestions...
            </>
          ) : (
            <>
              <Brain className="w-5 h-5" />
              Suggest Optimal Schedule
            </>
          )}
        </button>

        {/* Note */}
        <div className="p-4 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-lg border border-primary-500/10">
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 text-primary-600 mt-0.5" />
            <p className="text-sm text-gray-600">
              AI analyzes 50+ factors including historical attendance, room capacity, 
              equipment availability, and scheduling conflicts to find the perfect time slot.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventForm;