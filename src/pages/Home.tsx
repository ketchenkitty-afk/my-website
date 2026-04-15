import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, MapPin, ArrowRight, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, REVIEWS, SERVICE_AREAS, BUSINESS_INFO } from '../constants';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-brand-blue">
              Comprehensive HVAC Solutions for Every Need
            </p>
            <p className="text-brand-gray text-lg">
              From emergency repairs to full system installations, our team of certified technicians is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400&h=500&q=80" 
                    alt="Technician repairing indoor AC unit" 
                    className="rounded-3xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1595191603744-196013b3188c?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Installing HVAC system in attic" 
                    className="rounded-3xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Close-up of HVAC tools and equipment" 
                    className="rounded-3xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&h=500&q=80" 
                    alt="Technician explaining system to happy homeowner" 
                    className="rounded-3xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Floating Stat */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white p-8 rounded-3xl shadow-2xl text-center min-w-[200px] border-4 border-brand-accent">
                <p className="text-4xl font-display font-bold mb-1 text-brand-accent">100%</p>
                <p className="text-sm font-medium text-white uppercase tracking-wider">Satisfaction Guaranteed</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">Why Choose Us</h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-blue leading-tight">
                The Most Trusted Name in Gainesville HVAC
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Fast Response Times", desc: "We understand that AC failure is an emergency in Florida. We prioritize speed." },
                  { title: "Certified Technicians", desc: "Our team is highly trained and experienced with all major HVAC brands." },
                  { title: "Transparent Pricing", desc: "No hidden fees or surprise charges. We provide clear, upfront quotes." },
                  { title: "Local & Family Owned", desc: "We're members of the Gainesville community and treat our customers like neighbors." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-brand-accent/10 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-lg mb-1">{item.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-accent transition-colors group"
              >
                Learn more about our company
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">Testimonials</h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-blue">
                What Our Customers Are Saying
              </p>
            </div>
            <div className="flex items-center gap-4 bg-brand-light px-6 py-4 rounded-2xl">
              <div className="flex text-brand-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-blue">{BUSINESS_INFO.rating}/5 Rating</span>
                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">License #{BUSINESS_INFO.license}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-light p-8 rounded-3xl relative"
              >
                <div className="flex text-brand-accent mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-brand-blue font-medium italic mb-6 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-brand-blue">{review.name}</span>
                  <span className="text-xs text-brand-gray uppercase font-bold tracking-wider">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&h=1080&q=80" 
            alt="Florida Residential Home" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em]">Service Areas</h2>
              <p className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Proudly Serving Gainesville & Surrounding Areas
              </p>
              <p className="text-gray-400 text-lg">
                We provide fast, professional HVAC services to homes and businesses throughout North Central Florida.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVICE_AREAS.map((area) => (
                  <div key={area.name} className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    <span className="text-sm font-medium">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center space-y-8">
              <h3 className="text-2xl font-display font-bold">Need Immediate Help?</h3>
              <p className="text-gray-400">Our technicians are standing by to restore your comfort.</p>
              <div className="space-y-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-3 bg-brand-accent text-white w-full py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-blue transition-all shadow-xl shadow-brand-accent/20"
                >
                  <Phone className="w-6 h-6" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link 
                  to="/contact"
                  className="block text-sm font-bold text-gray-400 hover:text-white transition-colors"
                >
                  Or request a quote online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
