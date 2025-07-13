import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Hisab Kitab
              </span>
              <div className="text-xs text-slate-500 -mt-1">Expense Manager</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-all duration-200 font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-all duration-200 font-medium">How It Works</a>
            <a href="#reports" className="text-slate-600 hover:text-indigo-600 transition-all duration-200 font-medium">Reports</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition-all duration-200 font-medium">Pricing</a>
            <div className="flex items-center space-x-2 text-slate-600 cursor-pointer hover:text-indigo-600 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">EN</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Sign In</button>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
              <a href="#reports" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Reports</a>
              <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Pricing</a>
              <div className="flex items-center space-x-2 text-slate-600">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">English</span>
              </div>
              <div className="flex flex-col space-y-3 pt-4">
                <button className="text-slate-600 hover:text-indigo-600 transition-colors text-left font-medium">Sign In</button>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg font-medium">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;