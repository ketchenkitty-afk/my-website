import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // @ts-ignore
  const Icon = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500"
    >
      <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-500">
        <Icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-display font-bold text-brand-blue mb-4 group-hover:text-brand-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-brand-gray text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-2 text-brand-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <Icons.ChevronRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
