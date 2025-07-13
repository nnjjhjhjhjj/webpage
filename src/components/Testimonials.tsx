import React from 'react';
import { Star, Quote, Heart, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Graduate Student',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'Hisab Kitab transformed how my roommates and I handle expenses. The AI suggestions are incredibly accurate and save us so much time!',
      rating: 5,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'The predictive analytics feature is a game-changer. I can now anticipate my monthly expenses and budget more effectively than ever.',
      rating: 5,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'Love the multi-language support! Using it in Hindi with my family makes tracking our household expenses incredibly simple and intuitive.',
      rating: 5,
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      name: 'David Kim',
      role: 'Travel Blogger',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'Perfect for group adventures! The real-time currency conversion and offline sync saved our Europe trip from expense chaos.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Emma Thompson',
      role: 'Freelance Designer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'The interface is absolutely beautiful and intuitive. Finally, a finance app that doesn\'t feel like work to use!',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Alex Johnson',
      role: 'Small Business Owner',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      content: 'Hisab Kitab helps me track both personal and business expenses seamlessly. The categorization AI is incredibly smart.',
      rating: 5,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Loved by Users</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              50,000+ Happy Users
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join the growing community of users who have revolutionized their expense management 
            with our intelligent platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 relative group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-slate-300 group-hover:text-indigo-300 transition-colors" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br ${testimonial.gradient} rounded-full border-2 border-white`}></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">4.9/5</div>
              <div className="text-slate-600 text-sm font-medium">App Store Rating</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white font-bold text-lg">50K+</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">50,000+</div>
              <div className="text-slate-600 text-sm font-medium">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
              <div className="text-slate-600 text-sm font-medium">Uptime</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white font-bold text-lg">15+</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">15+</div>
              <div className="text-slate-600 text-sm font-medium">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;