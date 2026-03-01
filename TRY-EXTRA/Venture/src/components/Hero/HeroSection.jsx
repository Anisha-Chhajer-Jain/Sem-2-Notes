// src/components/Hero/HeroSection.jsx
import React from 'react';
import { Sparkles, PlayCircle, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToScheduler = () => {
    const element = document.getElementById('scheduler');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '92%', label: 'Fewer Conflicts', icon: '📊' },
    { value: '41%', label: 'Higher Attendance', icon: '📈' },
    { value: '100%', label: 'Zero Double-Bookings', icon: '✅' }
  ];

  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-600 text-white pt-20 pb-32">
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">WINNING HACKATHON PROJECT</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Campus Scheduling Chaos Into{' '}
              <span className="bg-gradient-to-r from-warning-400 to-danger-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              AI-powered conflict-free event scheduling that boosts attendance by 41% 
              and eliminates 92% of scheduling conflicts.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={scrollToScheduler} className="btn-primary">
                <Sparkles className="w-5 h-5" />
                Try AI Scheduler Demo
              </button>
              <button className="btn-secondary">
                <PlayCircle className="w-5 h-5" />
                Watch 2-Min Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                    <span>{stat.icon}</span>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Visual - Calendar Preview */}
          <div className="animate-fade-in-up animate-delay-400">
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">October 2024</h3>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1 text-danger-600">
                    <XCircle className="w-4 h-4" />
                    Conflict
                  </span>
                  <span className="flex items-center gap-1 text-success-600">
                    <CheckCircle className="w-4 h-4" />
                    Optimal
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="text-center text-gray-500 font-medium py-2">
                    {day}
                  </div>
                ))}
                
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  let bgColor = 'bg-gray-100 text-gray-600';
                  if ([3, 8, 12, 15, 20, 25, 28].includes(day)) {
                    bgColor = 'bg-primary-500 text-white';
                  }
                  if ([8, 15, 28].includes(day)) {
                    bgColor = 'bg-success-500 text-white';
                  }
                  if ([3, 12].includes(day)) {
                    bgColor = 'bg-danger-500 text-white';
                  }
                  
                  return (
                    <div key={day} className={`text-center py-3 rounded-lg font-medium ${bgColor}`}>
                      {day}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-success-600" />
                  <div>
                    <div className="font-semibold text-gray-900">AI Prediction Active</div>
                    <div className="text-sm text-gray-600">Real-time conflict detection enabled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    </>
  );
};

export default HeroSection;