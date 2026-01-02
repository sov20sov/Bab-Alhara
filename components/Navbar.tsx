
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="" className="flex flex-col items-start leading-tight">
              <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                باب الحارة
              </span>
              <span className={`text-sm font-medium ${scrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                للعقار والاستشارات
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+07803091767"
              className="bg-amber-600 text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/30"
            >
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-lg font-medium text-slate-700 border-b border-gray-50 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="tel:07803091767"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
              >
                <Phone size={20} />
                <span>اتصل بنا الآن</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
