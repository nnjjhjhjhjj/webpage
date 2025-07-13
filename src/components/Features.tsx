import React from 'react';
import { Users, Calculator, BarChart3, UserPlus, Shield, Bell, Zap, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Smart Group Splitting',
      description: 'Create groups and split expenses with intelligent algorithms. Equal, unequal, or percentage-based splits made effortless.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Calculator,
      title: 'Personal Finance Tracking',
      description: 'Track individual expenses with smart categorization and AI-powered insights into your spending patterns.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: BarChart3,
      title: 'Beautiful Analytics',
      description: 'Visualize spending with interactive charts, detailed reports, and predictive insights for better financial decisions.',
      gradient: 'from-orange-500 to-pink-500',
      bgGradient: 'from-orange-50 to-pink-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: UserPlus,
      title: 'Seamless Collaboration',
      description: 'Invite friends instantly via email or shareable links. Google Login ensures quick, secure onboarding.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your financial data is encrypted with military-grade security. Privacy-first approach with zero data sharing.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'AI-powered reminders for payments and budgets. Multi-language support including Nepali and Hindi.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with instant syncing across devices. Works seamlessly offline with smart sync.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Multi-currency support with real-time exchange rates. Available in 15+ languages for global users.',
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-50 to-blue-50',
      borderColor: 'border-teal-200'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Everything You Need for
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Smart Money Management
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From intelligent expense splitting to predictive analytics, Hisab Kitab combines 
            powerful features with beautiful design to make financial management effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 bg-gradient-to-br ${feature.bgGradient} rounded-2xl border ${feature.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;