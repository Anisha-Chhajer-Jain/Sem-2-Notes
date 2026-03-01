// src/utils/constants.js
export const ROOMS = [
  { name: "Hall B12", capacity: 250, equipment: ["projector", "sound", "stage"] },
  { name: "Main Auditorium", capacity: 500, equipment: ["projector", "stage", "sound", "lights"] },
  { name: "Library Conference", capacity: 100, equipment: ["projector", "whiteboard"] },
  { name: "Student Center", capacity: 150, equipment: ["projector", "kitchen", "tables"] },
  { name: "CS Department", capacity: 80, equipment: ["computers", "projector", "whiteboard"] },
  { name: "Gymnasium", capacity: 300, equipment: ["sound", "stage"] },
  { name: "Outdoor Quad", capacity: 500, equipment: ["tables", "chairs"] }
];

export const ATTENDANCE_PATTERNS = {
  career: { peakHours: [14, 15, 16], baseRate: 0.7, weekendPenalty: 0.4 },
  academic: { peakHours: [10, 11, 13], baseRate: 0.6, weekendPenalty: 0.5 },
  social: { peakHours: [17, 18, 19], baseRate: 0.8, weekendBonus: 0.2 },
  food: { peakHours: [12, 17], baseRate: 0.9, weekendBonus: 0.1 },
  sports: { peakHours: [16, 18], baseRate: 0.75, weekendBonus: 0.3 }
};

export const EXISTING_EVENTS = [
  { 
    id: '1',
    title: "CS Department Meeting", 
    start: "2024-10-16T10:00", 
    end: "2024-10-16T12:00", 
    room: "CS Department", 
    attendance: 85,
    category: 'academic'
  },
  { 
    id: '2',
    title: "Library Workshop", 
    start: "2024-10-17T14:00", 
    end: "2024-10-17T16:00", 
    room: "Library Conference", 
    attendance: 60,
    category: 'academic'
  },
  { 
    id: '3',
    title: "Basketball Tournament", 
    start: "2024-10-18T16:00", 
    end: "2024-10-18T19:00", 
    room: "Gymnasium", 
    attendance: 75,
    category: 'sports'
  },
  { 
    id: '4',
    title: "Faculty Lunch", 
    start: "2024-10-15T12:00", 
    end: "2024-10-15T13:30", 
    room: "Student Center", 
    attendance: 90,
    category: 'food'
  }
];

export const CATEGORIES = [
  { value: 'career', label: 'Career', icon: '💼', color: 'bg-blue-500' },
  { value: 'academic', label: 'Academic', icon: '🎓', color: 'bg-purple-500' },
  { value: 'social', label: 'Social', icon: '👥', color: 'bg-pink-500' },
  { value: 'food', label: 'Food', icon: '🍕', color: 'bg-orange-500' },
  { value: 'sports', label: 'Sports', icon: '⚽', color: 'bg-green-500' }
];

export const EQUIPMENT_OPTIONS = [
  { value: 'projector', label: 'Projector' },
  { value: 'sound', label: 'Sound System' },
  { value: 'stage', label: 'Stage' },
  { value: 'computers', label: 'Computers' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'lights', label: 'Lighting' }
];