// src/hooks/useAIScheduler.js
import { useState, useCallback } from 'react';
import { aiScheduler } from '../utils/aiScheduler';

export const useAIScheduler = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [existingEvents, setExistingEvents] = useState(
    aiScheduler.getExistingEvents()
  );

  const generateSuggestions = useCallback((eventData) => {
    setLoading(true);
    
    setTimeout(() => {
      const newSuggestions = aiScheduler.generateSuggestions(eventData);
      setSuggestions(newSuggestions);
      setLoading(false);
    }, 500);
  }, []);

  const scheduleEvent = useCallback((slot, eventData) => {
    const newEvent = {
      id: Date.now().toString(),
      title: eventData.title,
      start: slot.startTime.toISOString(),
      end: slot.endTime.toISOString(),
      room: slot.room,
      attendance: Math.round(slot.predictedAttendance * 100),
      category: eventData.category
    };
    
    aiScheduler.scheduleEvent(newEvent);
    setExistingEvents([...aiScheduler.getExistingEvents()]);
    
    return newEvent;
  }, []);

  return {
    suggestions,
    loading,
    existingEvents,
    generateSuggestions,
    scheduleEvent
  };
};