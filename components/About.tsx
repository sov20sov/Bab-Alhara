
import React from 'react';
import { ShieldCheck, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Our Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-full -z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-50 rounded-full -z-0"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl text-white hidden lg:block z-20">
              <p className="text-4xl font-extrabold text-amber-500 mb-1">100%</p>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">تغطية محلية</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">من نحن</span>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                أهل المنطقة ومستشاروكم <br />
                <span className="text-slate-500">الأكثر ثقة في سوق العقارات</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                في "مكتب باب الحارة للعقار"، نؤمن أن العقار ليس مجرد جدران وأسقف، بل هو استثمار لمستقبلكم ومكان لذكرياتكم. انطلقنا من قلب الحي لتقديم خدمات عقارية تجمع بين الخبرة العميقة والأمانة التامة.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'الشفافية المطلقة',
                  desc: 'نتعامل مع كل صفقة بوضوح تام، ونضع كافة التفاصيل أمام عملائنا.',
                  icon: <ShieldCheck className="text-amber-600" size={32} />
                },
                {
                  title: 'معرفة محلية عميقة',
                  desc: 'فريقنا يعيش في المنطقة ويعرف أدق تفاصيلها وتطوراتها السعرية.',
                  icon: <Users className="text-amber-600" size={32} />
                },
                {
                  title: 'نتائج استثنائية',
                  desc: 'نلتزم بتحقيق أهدافكم سواء كنتم بائعين أو مشترين أو مستثمرين.',
                  icon: <Target className="text-amber-600" size={32} />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
