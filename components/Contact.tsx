
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">تواصل معنا</span>
              <h2 className="text-4xl font-extrabold text-slate-900">يسعدنا دائماً استقبالكم في مكتبنا</h2>
              <p className="text-lg text-slate-600">
                فريقنا متاح للرد على استفساراتكم وتقديم المشورة العقارية اللازمة على مدار الساعة.
              </p>
            </div>

            <div className="space-y-8">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider font-bold">اتصل بنا</p>
                  <p className="text-xl font-bold text-slate-900">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a href={CONTACT_INFO.Telegram} className="flex gap-5 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-blue-600/60 text-sm mb-1 uppercase tracking-wider font-bold">تلغرام</p>
                  <p className="text-xl font-bold text-slate-900">تحدث معنا مباشرة</p>
                </div>
              </a>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider font-bold">العنوان</p>
                  <p className="text-xl font-bold text-slate-900 leading-tight">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">أرسل لنا رسالة وسنقوم بالرد سريعاً</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 mr-2">الاسم بالكامل</label>
                    <input
                      type="text"
                      placeholder="مثال: محمد أحمد"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 mr-2">رقم الجوال</label>
                    <input
                      type="tel"
                      placeholder="077xxxxxxx"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">نوع الخدمة</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white appearance-none">
                    <option>شراء عقار</option>
                    <option>بيع عقار</option>
                    <option>استئجار عقار</option>
                    <option>استشارة عقارية</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">رسالتك</label>
                  <textarea
                    rows={4}
                    placeholder="اكتب تفاصيل طلبك هنا..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
