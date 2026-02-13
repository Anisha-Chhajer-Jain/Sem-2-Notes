// src/components/ROI/ROICalculator.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Calendar, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyEvents, setMonthlyEvents] = useState(500);
  const [avgCost, setAvgCost] = useState(200);

  const [annualSavings, setAnnualSavings] = useState(0);
  const [attendanceBoost] = useState(41);
  const [timeSaved, setTimeSaved] = useState(0);

  useEffect(() => {
    const annualConflicts = monthlyEvents * 12 * 0.4;
    const savings = annualConflicts * avgCost * 0.92;
    const savedTime = monthlyEvents * 0.8;
    
    setAnnualSavings(Math.round(savings));
    setTimeSaved(Math.round(savedTime));
  }, [monthlyEvents, avgCost]);

  return (
    <section id="roi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven ROI & Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much your campus can save with AI-powered scheduling
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4 text-white/90">
                <Calendar className="w-5 h-5" />
                <label className="font-semibold">Monthly Events</label>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                value={monthlyEvents}
                onChange={(e) => setMonthlyEvents(parseInt(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary-500"
              />
              <div className="flex justify-between text-sm mt-2 text-white/80">
                <span>50</span>
                <span className="text-xl font-bold">{monthlyEvents.toLocaleString()}</span>
                <span>1000</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 text-white/90">
                <DollarSign className="w-5 h-5" />
                <label className="font-semibold">Avg. Cost per Conflict</label>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                value={avgCost}
                onChange={(e) => setAvgCost(parseInt(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary-500"
              />
              <div className="flex justify-between text-sm mt-2 text-white/80">
                <span>$50</span>
                <span className="text-xl font-bold">${avgCost}</span>
                <span>$500</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold mb-2">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="font-semibold mb-1">Annual Savings</div>
              <p className="text-sm text-white/80">With 92% conflict reduction</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold mb-2">
                {attendanceBoost}%
              </div>
              <div className="font-semibold mb-1">Attendance Boost</div>
              <p className="text-sm text-white/80">Higher event engagement</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
              <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold mb-2">
                {timeSaved} hours
              </div>
              <div className="font-semibold mb-1">Admin Time Saved</div>
              <p className="text-sm text-white/80">Per semester</p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-white/5 rounded-xl text-center">
            <p className="text-sm text-white/90">
              Based on industry research: 40% of events have conflicts, average resolution cost is ${avgCost}, 
              and AI reduces conflicts by 92%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;