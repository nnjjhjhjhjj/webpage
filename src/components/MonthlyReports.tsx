import React from 'react';
import { TrendingUp, PieChart, Calendar, Download, BarChart, Target, Zap } from 'lucide-react';

const MonthlyReports = () => {
  return (
    <section id="reports" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart className="w-4 h-4" />
              <span>Smart Analytics</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Beautiful Reports &
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI-Powered Insights
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your spending data into actionable insights with our advanced analytics engine. 
              Predict future expenses, identify saving opportunities, and make smarter financial decisions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Visualizations</h3>
                  <p className="text-slate-600">Dynamic charts that respond to your touch. Drill down into categories and discover spending patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Predictive Analytics</h3>
                  <p className="text-slate-600">AI-powered forecasting helps you anticipate future expenses and plan better budgets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Recommendations</h3>
                  <p className="text-slate-600">Get personalized suggestions to optimize spending and achieve your financial goals faster.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
              <Download className="w-5 h-5" />
              <span>Export Reports</span>
            </button>
          </div>
          
          {/* Right Content - Report Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl shadow-2xl border border-slate-200/50">
              {/* Report Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">January 2024 Analytics</h3>
                  <p className="text-sm text-slate-600">Comprehensive spending overview</p>
                </div>
                <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+12% vs last month</span>
                </div>
              </div>
              
              {/* Total Spending Card */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl mb-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium opacity-90">Total Managed</h4>
                  <Zap className="w-5 h-5 opacity-75" />
                </div>
                <div className="text-3xl font-bold mb-1">$3,247.80</div>
                <div className="text-sm opacity-75">Across 5 groups</div>
              </div>
              
              {/* Category Breakdown */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <PieChart className="w-4 h-4" />
                  <span>Smart Categories</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Food & Dining</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">$827.50</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Transportation</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">$584.20</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Entertainment</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">$356.70</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* AI Insight */}
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">AI Insight</h5>
                    <p className="text-sm text-slate-600">You're spending 15% more on dining out this month. Consider cooking at home 2 more times per week to save ~$120.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyReports;