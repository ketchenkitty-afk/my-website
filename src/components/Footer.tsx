import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Thermometer, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-accent p-2 rounded-lg">
                <Thermometer className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">BROWNING</span>
                <span className="text-[10px] tracking-[0.2em] text-brand-accent font-medium">HEATING & AIR</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing premium HVAC solutions to Gainesville and surrounding areas. 
              Your comfort is our top priority, 365 days a year.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 text-sm">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <span key={area.name}>{area.name}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-brand-accent transition-colors">
                <Phone className="w-5 h-5 text-brand-accent" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span>License #{BUSINESS_INFO.license}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Browning Heating & Air Conditioning LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
