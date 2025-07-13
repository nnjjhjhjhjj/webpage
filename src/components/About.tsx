import React from 'react';
import { Heart, Shield, Users, Zap, Target, Globe, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every pixel is crafted with our users\' needs and experiences in mind.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'Bank-grade encryption and zero-knowledge architecture protect your data.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built with continuous feedback from our amazing global user community.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge AI and machine learning for smarter financial insights.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best Fintech App 2024',
      description: 'TechCrunch Startup Awards'
    },
    {
      icon: Target,
      title: '$50M+ Managed',
      description: 'Total expenses tracked'
    },
    {
      icon: Globe,
      title: '25+ Countries',
      description: 'Global user presence'
    },
    {
      icon: Lightbulb,
      title: '99% Satisfaction',
      description: 'User happiness score'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Financial Wellness
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Born from the frustration of complex spreadsheets and unfair bill splits, Hisab Kitab 
              combines cutting-edge AI with beautiful design to make financial management effortless 
              and transparent for everyone.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Founded in 2023</strong> by a team of fintech veterans 
                  and AI researchers who believed money management should be intuitive, not intimidating.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Trusted by 50,000+ users</strong> across 25+ countries, 
                  with AI-powered insights processing millions of transactions monthly.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Continuously evolving</strong> with machine learning 
                  that adapts to user behavior and predictive analytics for smarter financial decisions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Recognition & Milestones
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and loved by users worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-bold text-slate-900 mb-1">{achievement.title}</div>
                <div className="text-slate-600 text-sm font-medium">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;