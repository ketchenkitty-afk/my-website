import { Service, Review, ServiceArea } from './types';

export const BUSINESS_INFO = {
  name: "Browning Heating & Air Conditioning LLC",
  phone: "(352) 306-4195",
  address: "2604 NE 18th Terrace, Gainesville, FL 32609",
  hours: "Mon-Sun: 8:00 AM - 5:00 PM",
  rating: 4.5,
  reviewCount: 128,
  license: "CAC1819657",
  established: "2005",
};

export const SERVICES: Service[] = [
  {
    id: "ac-repair",
    title: "AC Repair",
    description: "Expert diagnostic and repair services for all air conditioning brands and models. We get your cool air back fast.",
    icon: "Wind",
  },
  {
    id: "heating-repair",
    title: "Heating Repair",
    description: "Reliable furnace and heat pump repairs to keep your home warm during the chilly Florida winters.",
    icon: "Flame",
  },
  {
    id: "hvac-installation",
    title: "HVAC Installation",
    description: "Professional installation of high-efficiency heating and cooling systems tailored to your home's needs.",
    icon: "Settings",
  },
  {
    id: "ductless-ac",
    title: "Ductless Air Conditioning",
    description: "Modern, energy-efficient cooling solutions for homes without traditional ductwork.",
    icon: "Zap",
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    description: "Preventative tune-ups to extend the life of your HVAC system and reduce energy bills.",
    icon: "ShieldCheck",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sarah J.",
    rating: 5,
    comment: "Browning saved us in the middle of a heatwave! They were here within two hours and fixed our AC quickly. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Michael R.",
    rating: 5,
    comment: "Professional, polite, and very knowledgeable. They explained everything clearly and didn't try to upsell me on things I didn't need.",
    date: "1 month ago",
  },
  {
    id: "3",
    name: "David L.",
    rating: 4,
    comment: "Great service and fair pricing. The technician was very thorough with the maintenance check.",
    date: "3 months ago",
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Gainesville" },
  { name: "Alachua" },
  { name: "Archer" },
  { name: "Hawthorne" },
  { name: "High Springs" },
  { name: "Micanopy" },
  { name: "Newberry" },
  { name: "Ocala" },
  { name: "Reddick" },
  { name: "Waldo" },
  { name: "Williston" },
];
