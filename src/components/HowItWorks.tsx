import React from 'react';
import { UserPlus, Calculator, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Space',
      description: 'Set up groups for trips, roommates, or any shared activities. Invite friends with a simple link or email invitation.',
      step: '01',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      icon: Calculator,
      title: 'Smart Expense Splitting',
      description: 'Add expenses and let our AI suggest the best splitting method. Equal, custom amounts, or percentages - all automated.',
      step: '02',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      icon: BarChart3,
      title: 'Get Intelligent Insights',
      description: 'View beautiful analytics, predictive spending patterns, and automated settlement suggestions to stay on budget.',
      step: '03',
      gradient: 'from-orange-500 to-pink-500',
      bgGradient: 'from-orange-50 to-pink-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Get Started in
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our intelligent system guides you through setup in minutes. 
            No complex configuration or steep learning curves.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 transform -translate-y-1/2 rounded-full"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-32 w-1 h-16 bg-gradient-to-b from-indigo-300 to-purple-300 transform -translate-x-1/2 rounded-full"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} text-white text-xl font-bold rounded-2xl mb-6 relative shadow-xl`}>
                    {step.step}
                    {/* Desktop Arrow */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-200/50 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-indigo-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;