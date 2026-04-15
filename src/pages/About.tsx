import { motion } from 'motion/react';
import { ShieldCheck, Users, Award, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function About() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue leading-tight">
              A Legacy of <span className="text-brand-accent">Comfort</span> in Gainesville
            </h1>
            <p className="text-lg text-brand-gray leading-relaxed">
              Browning Heating & Air Conditioning LLC is a family-owned and operated business dedicated to providing Gainesville and North Central Florida with superior HVAC services. Since {BUSINESS_INFO.established}, we've built our reputation on honest work, fair pricing, and a deep commitment to our local community.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-brand-blue">{new Date().getFullYear() - parseInt(BUSINESS_INFO.established)}+</p>
                <p className="text-sm text-brand-gray font-bold uppercase tracking-wider">Years of Service</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-brand-blue">5k+</p>
                <p className="text-sm text-brand-gray font-bold uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737706096-c9582f195d62?auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Browning HVAC Professional Team" 
              className="rounded-3xl shadow-2xl premium-shadow"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-accent text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-2xl font-display font-bold">Local Experts</p>
              <p className="text-sm opacity-90">Family owned & operated</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <p className="text-4xl font-display font-bold text-brand-blue">What Drives Us Every Day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We believe in honest assessments and fair pricing. No unnecessary repairs, ever." },
              { icon: Users, title: "Community", desc: "We're proud to serve our neighbors in Gainesville and surrounding North Florida towns." },
              { icon: Award, title: "Excellence", desc: "Our technicians are continuously trained on the latest HVAC technologies and standards." },
              { icon: Heart, title: "Customer First", desc: "Your comfort and satisfaction are the metrics by which we measure our success." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center space-y-4"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue">{value.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1564182842-76429427312e?auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="Modern Thermostat showing cool temperature" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 p-12 md:p-20 max-w-3xl space-y-8">
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">Our Mission</h2>
            <p className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              To provide the most reliable, efficient, and professional HVAC services in North Central Florida.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We strive to ensure every home we visit is a sanctuary of comfort. Through technical expertise and exceptional customer service, we aim to be the last HVAC company you'll ever need to call.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
