
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-tight">
              <span className="text-3xl font-extrabold text-white">باب الحارة</span>
              <span className="text-sm font-medium text-amber-500 uppercase tracking-widest mt-1">
                للعقار والاستشارات
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              وجهتكم الأولى انشاء الله والموثوقة في سوق العقارات. خبرة محلية تجمع بين التقاليد والحداثة لنقدم لكم الأفضل دائماً.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.facebook.com/bab.alhart.llwsatt.al.qaryt?mibextid=wwXIfr&rdid=j7JPwMsCbLWTXzAu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AS4pe85jR%2F%3Fmibextid%3DwwXIfr#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors border border-white/10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-4">
              {['من نحن', 'خدماتنا', 'اتصل بنا'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">خدماتنا</h4>
            <ul className="space-y-4">
              {['تسويق عقارات', 'إدارة أملاك', 'تقييم عقاري'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} مكتب باب الحارة للعقار. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
