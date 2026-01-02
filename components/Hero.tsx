
import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowLeft, Star, Home, Award } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 transform transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
            alt="Modern House"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Enhanced Gradient Overlay with Animation */}
        <div className="absolute inset-0 gradient-overlay animate-pulse-slow"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-float-1"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-float-2"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-amber-300 rounded-full opacity-50 animate-float-3"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-float-1"></div>
          <div className="absolute bottom-1/4 right-1/2 w-2.5 h-2.5 bg-amber-500 rounded-full opacity-45 animate-float-2"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <br />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in-up delay-500">
            مكتب باب الحارة للعقار <br />
            <span className="text-amber-500 animate-glow">خبرة محلية… وثقة تبنى</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl animate-fade-in-up delay-700">
            نساعدك في بيع، شراء، وتأجير العقارات بكل احترافية وشفافية. شريكك الموثوق لتحويل حلم السكن إلى واقع ملموس.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-6 py-4 animate-fade-in-up delay-900">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Home className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">عقارات متنوعة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">خدمة احترافية</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-1100">
            <a
              href="tel:07803091767"
              className="group relative px-8 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-amber-900/40 hover:shadow-2xl hover:shadow-amber-900/60 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span>اتصل بنا الآن</span>
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={CONTACT_INFO.Telegram}
              className="group relative px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:border-white/50 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <MessageCircle size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span>تواصل عبر التلغرام</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
