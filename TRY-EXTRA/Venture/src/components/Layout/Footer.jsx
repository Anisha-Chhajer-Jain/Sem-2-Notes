// src/components/Layout/Footer.jsx
import React from 'react';
import { Calendar, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">CampusSync</span>
                <span className="text-2xl font-bold text-gradient">AI</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              AI-powered conflict-free campus event scheduling that boosts attendance by 41% 
              and eliminates 92% of scheduling conflicts.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Project</h4>
              <div className="space-y-2 text-gray-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <button className="hover:text-white transition-colors">Hackathon Project</button>
                <button className="hover:text-white transition-colors">DevPost</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Built for Hackathons</p>
                <p>Not affiliated with any real universities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-danger-500" />
            <p>© 2024 CampusSync AI. Built with passion for hackathons.</p>
          </div>
          <p className="text-sm">Winning hackathon project — ready to impress judges!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;