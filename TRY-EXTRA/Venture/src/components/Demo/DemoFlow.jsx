// src/components/Demo/DemoFlow.jsx
import React from 'react';
import { AlertTriangle, CheckCircle, Sparkles, Calendar, Building, TrendingUp } from 'lucide-react';

const DemoFlow = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See The Magic In Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From scheduling chaos to AI-optimized perfection in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1: The Pain */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-danger-500 to-danger-600 rounded-full text-white font-bold text-xl mb-6 mx-auto">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Pain: Current Chaos</h3>
            
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 p-4">
              {/* Conflict Line */}
              <div className="absolute top-1/3 left-1/4 right-1/2 h-1 bg-gradient-to-r from-transparent via-danger-500 to-transparent transform -rotate-6"></div>
              
              {/* Conflicting Events */}
              <div className="absolute top-1/4 left-4 w-32 p-3 bg-gradient-to-r from-danger-500 to-danger-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">AI Workshop</div>
                <div className="text-xs opacity-90">10AM | Room 101</div>
              </div>
              
              <div className="absolute top-1/4 right-4 w-32 p-3 bg-gradient-to-r from-danger-500 to-danger-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">CS Lecture</div>
                <div className="text-xs opacity-90">10AM | Room 101</div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 w-32 p-3 bg-gradient-to-r from-warning-500 to-warning-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">Career Talk</div>
                <div className="text-xs opacity-90">8AM | Low attendance</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-danger-600 mb-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Double-booked rooms</span>
              </div>
              <p className="text-gray-600">
                Bad timing, low attendance, scheduling conflicts everywhere
              </p>
            </div>
          </div>

          {/* Step 2: The Magic */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-warning-500 to-warning-600 rounded-full text-white font-bold text-xl mb-6 mx-auto">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Magic: AI Suggestions</h3>
            
            <div className="h-64 flex items-center justify-center mb-6">
              <div className="w-full max-w-xs bg-gradient-to-br from-success-50 to-success-100 border-2 border-success-500 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-success-500 text-white text-sm font-semibold rounded-full">
                    BEST
                  </span>
                  <span className="text-2xl font-bold text-success-600">94</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">Thu, 3-5 PM</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <Building className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">Hall B12</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">87% predicted attendance</span>
                  </div>
                </div>
                
                <button className="w-full py-2 border-2 border-success-500 text-success-600 font-semibold rounded-lg hover:bg-success-500 hover:text-white transition-colors">
                  Why this slot?
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">AI analyzes constraints</span>
              </div>
              <p className="text-gray-600">
                Smart suggestions based on 50+ factors and historical data
              </p>
            </div>
          </div>

          {/* Step 3: The Result */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-full text-white font-bold text-xl mb-6 mx-auto">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Result: Perfect Schedule</h3>
            
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 p-4">
              {/* Optimal Event */}
              <div className="absolute top-1/3 left-1/3 w-36 p-3 bg-gradient-to-r from-success-500 to-success-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">AI Career Fair</div>
                <div className="text-xs opacity-90">3PM | Hall B12</div>
              </div>
              
              {/* Other Events */}
              <div className="absolute top-3/4 left-4 w-32 p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">CS Lecture</div>
                <div className="text-xs opacity-90">10AM | Room 101</div>
              </div>
              
              <div className="absolute top-1/4 right-4 w-32 p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg text-white shadow-lg">
                <div className="font-semibold text-sm">Club Meeting</div>
                <div className="text-xs opacity-90">2PM | Student Center</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-success-600 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Zero conflicts</span>
              </div>
              <p className="text-gray-600">
                Optimized attendance, happy students, efficient campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFlow;