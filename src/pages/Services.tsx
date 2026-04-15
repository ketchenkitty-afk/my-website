import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue">
            Our <span className="text-brand-accent">Services</span>
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed">
            From routine maintenance to complex system replacements, we offer a full range of HVAC services to keep your environment perfect.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">The Browning Difference</h2>
                <p className="text-4xl font-display font-bold text-brand-blue">Why Our Service Stands Out</p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Precision Diagnostics", desc: "We don't just fix symptoms; we find the root cause of your HVAC issues using advanced diagnostic tools." },
                  { title: "Energy Efficiency Focus", desc: "We help you choose and maintain systems that lower your carbon footprint and your utility bills." },
                  { title: "Post-Service Support", desc: "Our relationship doesn't end when we leave. We're here for any follow-up questions or adjustments." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-blue rounded-[3rem] p-12 text-white space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl" />
              <h3 className="text-3xl font-display font-bold">Ready for a Tune-up?</h3>
              <p className="text-gray-400 leading-relaxed">
                Regular maintenance can prevent 95% of unexpected AC failures. Schedule your seasonal check-up today and rest easy.
              </p>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  Full System Inspection
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  Filter Replacement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  Refrigerant Level Check
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  Electrical Component Testing
                </li>
              </ul>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-3 bg-brand-accent text-white w-full py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-blue transition-all"
              >
                <Phone className="w-6 h-6" />
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
