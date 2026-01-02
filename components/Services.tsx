
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">خدماتنا</span>
          <h2 className="text-4xl font-extrabold text-slate-900">حلول عقارية متكاملة تحت سقف واحد</h2>
          <p className="text-lg text-slate-600">
            نقدم مجموعة واسعة من الخدمات المصممة خصيصاً لتلبية كافة احتياجاتكم العقارية، من البحث عن السكن الأول وحتى إدارة المحافظ الاستثمارية.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-600 transition-colors duration-300">
                {getIcon(service.iconName, 'w-8 h-8')}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-50">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
