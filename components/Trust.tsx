
import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-white/20 aspect-square"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-right">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              ثقة أهل المنطقة هي <br />
              <span className="text-amber-500">رأس مالنا الحقيقي</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              نحن لا نبيع العقارات فحسب، بل نبني علاقات تدوم طويلاً. سمعتنا هي الضمان الذي نقدمه لكل عميل يدخل باب مكتبنا.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'فريق عمل مرخص ومحترف',
                'التزام تام بالشفافية',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
