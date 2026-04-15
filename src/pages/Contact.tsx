import React, { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert("Thank you for your message! We'll get back to you shortly.");
  };

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue">
                Get a <span className="text-brand-accent">Quote</span>
              </h1>
              <p className="text-lg text-brand-gray leading-relaxed">
                Have an HVAC emergency or need a quote for a new installation? Fill out the form or give us a call. We're here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-brand-light p-4 rounded-2xl h-fit">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Phone</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-display font-bold text-brand-blue hover:text-brand-accent transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-light p-4 rounded-2xl h-fit">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-xl font-medium text-brand-blue leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-light p-4 rounded-2xl h-fit">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-xl font-medium text-brand-blue">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-[2rem] overflow-hidden h-64 bg-gray-100 border border-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-brand-gray font-medium">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map View</p>
                  <p className="text-xs">Gainesville, FL 32609</p>
                </div>
              </div>
              {/* In a real app, embed a Google Map here */}
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                allowFullScreen
                className="opacity-0" // Hide since we don't have a real key
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl premium-shadow border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-light border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(352) 000-0000"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-light border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-blue ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-light border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-blue ml-1">Service Needed</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-brand-light border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none appearance-none">
                  <option>AC Repair</option>
                  <option>Heating Repair</option>
                  <option>HVAC Installation</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-blue ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-light border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-brand-gray">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
