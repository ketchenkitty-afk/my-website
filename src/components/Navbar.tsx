import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Thermometer, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-brand-accent" />
              {BUSINESS_INFO.phone}
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-brand-accent" />
              License #{BUSINESS_INFO.license}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Family Owned & Operated Since {BUSINESS_INFO.established}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-accent p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Thermometer className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none">BROWNING</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-gray font-medium">HEATING & AIR</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-colors shadow-lg shadow-brand-blue/10"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-brand-accent text-white w-full py-4 rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
