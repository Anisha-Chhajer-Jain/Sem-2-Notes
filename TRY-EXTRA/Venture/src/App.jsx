// src/App.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { startOfWeek, addDays } from 'date-fns';

// Components
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Hero/HeroSection';
import EventForm from './components/Scheduler/EventForm';
import AISuggestions from './components/Scheduler/AISuggestions';
import CalendarView from './components/Scheduler/CalendarView';
import WhyExplanationModal from './components/Scheduler/WhyExplanationModal';
import DemoFlow from './components/Demo/DemoFlow';
import ROICalculator from './components/ROI/ROICalculator';
import Footer from './components/Layout/Footer';

// Hooks
import { useAIScheduler } from './hooks/useAIScheduler';

function App() {
  const {
    suggestions,
    loading,
    existingEvents,
    generateSuggestions,
    scheduleEvent
  } = useAIScheduler();

  const [currentWeekStart, setCurrentWeekStart] = useState(() => 
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerateSuggestions = (eventData) => {
    generateSuggestions(eventData);
    toast.success('AI is generating optimal schedule suggestions...');
  };

  const handleSelectSlot = (slot) => {
    const eventData = {
      id: Date.now().toString(),
      title: 'AI Career Fair',
      category: 'career',
      expectedCrowd: 200,
      duration: 2,
      equipment: ['projector', 'sound'],
      timestamp: new Date().toISOString()
    };
    
    scheduleEvent(slot, eventData);
    toast.success(`✅ "${eventData.title}" scheduled successfully!`);
  };

  const handleExplainSlot = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      {/* Main Scheduler Section */}
      <section id="scheduler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Event Scheduler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter your event details and let AI find the perfect time & venue
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Event Form */}
            <div className="lg:col-span-1">
              <EventForm 
                onSubmit={handleGenerateSuggestions}
                isLoading={loading}
              />
            </div>

            {/* Right Column: AI Suggestions & Calendar */}
            <div className="lg:col-span-2 space-y-8">
              <AISuggestions 
                suggestions={suggestions}
                onSelect={handleSelectSlot}
                onExplain={handleExplainSlot}
              />
              
              <CalendarView 
                existingEvents={existingEvents}
                suggestions={suggestions}
                currentWeekStart={currentWeekStart}
                onWeekChange={setCurrentWeekStart}
              />
            </div>
          </div>
        </div>
      </section>

      <DemoFlow />
      <ROICalculator />
      <Footer />

      <WhyExplanationModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSlot(null);
        }}
        slot={selectedSlot}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;