// src/utils/aiScheduler.js
import { ROOMS, ATTENDANCE_PATTERNS, EXISTING_EVENTS } from './constants';

export class AIScheduler {
  constructor() {
    this.rooms = [...ROOMS];
    this.attendancePatterns = { ...ATTENDANCE_PATTERNS };
    this.existingEvents = [...EXISTING_EVENTS];
  }

  generateSuggestions(eventData) {
    const suggestions = [];
    const now = new Date();

    for (let dayOffset = 1; dayOffset <= 7; dayOffset++) {
      const date = new Date(now);
      date.setDate(date.getDate() + dayOffset);

      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      if ((eventData.category === 'career' || eventData.category === 'academic') && isWeekend) {
        continue;
      }

      for (let hour = 9; hour <= 20; hour += 2) {
        if (hour + eventData.duration > 21) continue;

        this.rooms.forEach(room => {
          if (room.capacity < eventData.expectedCrowd * 0.7) return;

          if (eventData.equipment.length > 0) {
            const hasAllEquipment = eventData.equipment.every(eq => 
              room.equipment.includes(eq)
            );
            if (!hasAllEquipment) return;
          }

          const startTime = new Date(date);
          startTime.setHours(hour, 0, 0, 0);

          const endTime = new Date(startTime);
          endTime.setHours(startTime.getHours() + eventData.duration);

          const conflicts = this.checkConflicts(startTime, endTime, room.name);
          const hasConflict = conflicts.length > 0;

          const attendance = this.predictAttendance(eventData, hour, date.getDay());
          const score = this.calculateScore({
            attendance,
            hasConflict,
            hour,
            capacityMatch: room.capacity / eventData.expectedCrowd,
            roomQuality: room.equipment.length,
            dayOfWeek: date.getDay()
          });

          let recommendation = 'poor';
          let badge = 'AVOID';
          if (score >= 80) {
            recommendation = 'optimal';
            badge = 'BEST';
          } else if (score >= 60) {
            recommendation = 'good';
            badge = 'GOOD';
          }

          const explanation = this.generateExplanation({
            score,
            attendance,
            conflicts,
            hour,
            room,
            eventData
          });

          suggestions.push({
            id: `${room.name}_${startTime.getTime()}`,
            startTime,
            endTime,
            room: room.name,
            roomCapacity: room.capacity,
            predictedAttendance: attendance,
            score: Math.round(score),
            conflicts,
            recommendation,
            badge,
            explanation
          });
        });
      }
    }

    return suggestions.sort((a, b) => b.score - a.score).slice(0, 3);
  }

  checkConflicts(startTime, endTime, roomName) {
    const conflicts = [];

    this.existingEvents.forEach(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      if (event.room === roomName) {
        if ((startTime < eventEnd && endTime > eventStart)) {
          conflicts.push(event.title);
        }
      }

      const timeDiff = Math.abs(startTime.getTime() - eventStart.getTime());
      if (timeDiff < 30 * 60 * 1000) {
        conflicts.push(`Too close to: ${event.title}`);
      }
    });

    return conflicts;
  }

  predictAttendance(eventData, hour, dayOfWeek) {
    const patterns = this.attendancePatterns[eventData.category] || this.attendancePatterns.academic;
    
    let attendance = patterns.baseRate;
    
    if (patterns.peakHours.includes(hour)) {
      attendance += 0.25;
    } else if (hour < 10) {
      attendance -= 0.35;
    } else if (hour > 18) {
      attendance += 0.15;
    }
    
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend) {
      if (patterns.weekendBonus) {
        attendance += patterns.weekendBonus;
      } else if (patterns.weekendPenalty) {
        attendance -= patterns.weekendPenalty;
      }
    }
    
    attendance += (Math.random() * 0.16 - 0.08);
    
    return Math.max(0.1, Math.min(0.99, attendance));
  }

  calculateScore(factors) {
    let score = 50;
    
    score += factors.attendance * 30;
    
    if (factors.hasConflict) {
      score -= 25;
    } else {
      score += 10;
    }
    
    if (factors.hour >= 14 && factors.hour <= 17) {
      score += 15;
    } else if (factors.hour < 10 || factors.hour > 20) {
      score -= 10;
    }
    
    const capacityRatio = factors.capacityMatch;
    if (capacityRatio >= 1.2 && capacityRatio <= 2) {
      score += 15;
    } else if (capacityRatio < 0.8) {
      score -= 10;
    } else if (capacityRatio > 3) {
      score -= 5;
    }
    
    score += factors.roomQuality * 2;
    
    if (factors.dayOfWeek >= 1 && factors.dayOfWeek <= 4) {
      score += 5;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generateExplanation(data) {
    const explanations = [];
    
    if (data.score >= 80) {
      explanations.push({
        type: 'positive',
        title: 'Optimal Time Slot',
        description: `${data.hour}:00 is peak attendance time for ${data.eventData.category} events`
      });
      
      if (!data.conflicts.length) {
        explanations.push({
          type: 'positive',
          title: 'No Scheduling Conflicts',
          description: 'No other events conflict with this time slot'
        });
      }
      
      if (data.room.capacity >= data.eventData.expectedCrowd * 1.2) {
        explanations.push({
          type: 'positive',
          title: 'Perfect Room Capacity',
          description: `${data.room.name} can comfortably accommodate your expected crowd`
        });
      }
    } else {
      if (data.conflicts.length) {
        explanations.push({
          type: 'negative',
          title: 'Scheduling Conflict',
          description: `Conflicts with: ${data.conflicts.join(', ')}`
        });
      }
      
      if (data.hour < 10) {
        explanations.push({
          type: 'negative',
          title: 'Poor Timing',
          description: 'Morning events typically have 35% lower attendance'
        });
      }
      
      if (data.room.capacity < data.eventData.expectedCrowd) {
        explanations.push({
          type: 'negative',
          title: 'Insufficient Capacity',
          description: `${data.room.name} is too small for your expected crowd`
        });
      }
    }
    
    return explanations;
  }

  scheduleEvent(event) {
    this.existingEvents.push(event);
  }

  getExistingEvents() {
    return [...this.existingEvents];
  }
}

export const aiScheduler = new AIScheduler();