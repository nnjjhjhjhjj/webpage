import React from 'react';
import { ArrowRight, Download, Smartphone, Star, Zap, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Zap className="w-4 h-4" />
            <span>Join the Revolution</span>
          </div>
          
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Financial Life?
            </span>
          </h2>
          
          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ users who have revolutionized their expense management with AI-powered insights, 
            beautiful analytics, and effortless collaboration. Start your journey today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 shadow-2xl group text-lg">
              <span>Start Free Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200 flex items-center space-x-3 backdrop-blur-sm text-lg">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>
          
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 text-indigo-100 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">Free forever plan</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-indigo-100 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="font-medium">Bank-grade security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-indigo-100 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Setup in 2 minutes</span>
            </div>
          </div>
          
          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3 text-indigo-100">
              <Smartphone className="w-6 h-6" />
              <span className="font-medium text-lg">Available on iOS and Android</span>
            </div>
            <div className="flex items-center space-x-2 text-indigo-100">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;