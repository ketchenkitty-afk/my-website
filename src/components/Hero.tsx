import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              Family Owned & Operated Since {BUSINESS_INFO.established}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-blue leading-[1.1]">
              Keeping Gainesville <br />
              <span className="text-brand-accent">Comfortable</span> <br />
              Year-Round
            </h1>
            
            <p className="text-lg text-brand-gray max-w-lg leading-relaxed">
              Fast, reliable heating and air conditioning services for your home or business. 
              Experience the premium service you deserve from local experts you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white text-brand-blue border-2 border-brand-blue/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-accent hover:text-brand-accent transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-blue/5">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display font-bold text-brand-blue">4.5/5</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-wider">Customer Rating</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display font-bold text-brand-blue">24/7</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-wider">Emergency Support</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display font-bold text-brand-blue">15+</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl premium-shadow">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Professional HVAC Technician working on outdoor AC unit" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Fast Response Times</p>
                    <p className="text-sm text-white/80">We're usually there within 2 hours of your call.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100"
            >
              <div className="bg-brand-accent p-3 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-brand-blue">Top Rated</p>
                <p className="text-xs text-brand-gray">Gainesville's Choice</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
