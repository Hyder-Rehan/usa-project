import { Property } from '../types';
import heroHomeImg from '../assets/images/hero_luxury_home_1790174094339.jpg';
import aboutOfficeImg from '../assets/images/about_team_office_1790174110579.jpg';
import ctaEstateImg from '../assets/images/cta_luxury_estate_1790174124343.jpg';
import brooklynResImg from '../assets/images/prop_brooklyn_residence_1790174136871.jpg';
import penthouseImg from '../assets/images/prop_luxury_penthouse_1790174148363.jpg';

export { heroHomeImg, aboutOfficeImg, ctaEstateImg, brooklynResImg, penthouseImg };

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'Modern Family Residence',
    price: 749000,
    formattedPrice: '$749,000',
    status: 'For Sale',
    location: 'Brooklyn, New York',
    city: 'Brooklyn',
    state: 'NY',
    beds: 4,
    baths: 3,
    sqft: 2450,
    type: 'Single Family',
    image: brooklynResImg,
    featured: true,
    yearBuilt: 2021,
    description: 'An exquisitely conceived contemporary residence in prime Brooklyn. Features expansive double-glazed architectural glass, private landscaped courtyard, custom Italian walnut kitchen cabinetry, and high-efficiency smart climate zones.',
    features: [
      'Custom Millwork & Hardwood Flooring',
      'Private Landscaped Garden',
      'Chef Kitchen with Miele Appliances',
      'Integrated Multi-Zone Climate Control',
      'Private EV-Ready Garage Parking'
    ]
  },
  {
    id: 'prop-2',
    name: 'The Grand Horizon Penthouse',
    price: 2850000,
    formattedPrice: '$2,850,000',
    status: 'For Sale',
    location: 'Manhattan, New York',
    city: 'Manhattan',
    state: 'NY',
    beds: 3,
    baths: 3.5,
    sqft: 3100,
    type: 'Penthouse',
    image: penthouseImg,
    featured: true,
    yearBuilt: 2023,
    description: 'A breathtaking trophy penthouse boasting 12-foot ceilings, floor-to-ceiling curtain walls with unobstructed skyline panoramas, private elevator access, and a wrap-around sky terrace designed for seamless indoor-outdoor entertaining.',
    features: [
      'Direct Keyed High-Speed Elevator Access',
      '360-Degree Panoramic City Views',
      'Calacatta Marble Bath Suites with Radiant Heating',
      'Wraparound 800 sq ft Private Sky Terrace',
      '24/7 White-Glove Doorman & Concierge'
    ]
  },
  {
    id: 'prop-3',
    name: 'Bel Air Contemporary Architectural Villa',
    price: 4250000,
    formattedPrice: '$4,250,000',
    status: 'For Sale',
    location: 'Los Angeles, California',
    city: 'Los Angeles',
    state: 'CA',
    beds: 5,
    baths: 6,
    sqft: 5800,
    type: 'Luxury Estate',
    image: heroHomeImg,
    featured: true,
    yearBuilt: 2022,
    description: 'Masterpiece of modern California architecture set on a quiet private ridge. Clean geometric lines, expansive Fleetwood pocket glass doors that dissolve boundaries between interior sanctuaries and lush canyon landscape.',
    features: [
      'Vanishing-Edge Heated Infinity Pool & Spa',
      'Temperature-Controlled 400-Bottle Wine Gallery',
      'Primary Suite with Dual Spa Baths & Dressing Rooms',
      'Automated Lutron Lighting & Motorized Shades',
      'Gated Motor Court with Security Enclosure'
    ]
  },
  {
    id: 'prop-4',
    name: 'Waterfront Executive Sanctuary',
    price: 3490000,
    formattedPrice: '$3,490,000',
    status: 'For Sale',
    location: 'Miami Beach, Florida',
    city: 'Miami Beach',
    state: 'FL',
    beds: 5,
    baths: 5.5,
    sqft: 4620,
    type: 'Luxury Estate',
    image: ctaEstateImg,
    featured: true,
    yearBuilt: 2022,
    description: 'Direct deep-water frontage on prestigious Miami Beach waterways. Features private yacht dockage, resort-style outdoor summer kitchen, sleek terrazzo floors, and floor-to-ceiling hurricane-impact glazed walls.',
    features: [
      'Private 75-Foot Yacht Slip with Shore Power',
      'Summer Kitchen & Covered Dining Loggia',
      'Bespoke Italian Kitchen with Sub-Zero Refrigerator',
      'Rooftop Sunset Lounge with Water Views',
      'Smart Home Automation by Savant'
    ]
  },
  {
    id: 'prop-5',
    name: 'Beacon Hill Classic Brownstone',
    price: 1895000,
    formattedPrice: '$1,895,000',
    status: 'For Sale',
    location: 'Boston, Massachusetts',
    city: 'Boston',
    state: 'MA',
    beds: 4,
    baths: 3.5,
    sqft: 2980,
    type: 'Townhome',
    image: brooklynResImg,
    featured: false,
    yearBuilt: 2020,
    description: 'Impeccably renovated multi-level townhome marrying timeless red brick street appeal with Scandinavian-inspired minimalist interiors. Restored original crown mouldings, gas fireplaces, and private rooftop deck.',
    features: [
      'Historic Brick Facade with Modern High-Performance Glass',
      'Private Rooftop Deck Overlooking Historic District',
      'Restored Original Fireplace Mantels with Gas Inserts',
      'Designer Kitchen with White Oak Cabinetry',
      'Deeded Off-Street Parking Space'
    ]
  },
  {
    id: 'prop-6',
    name: 'The Austin Skyline Modern Loft',
    price: 12500,
    formattedPrice: '$12,500 / mo',
    status: 'For Rent',
    location: 'Austin, Texas',
    city: 'Austin',
    state: 'TX',
    beds: 3,
    baths: 3,
    sqft: 2200,
    type: 'Condominium',
    image: aboutOfficeImg,
    featured: false,
    yearBuilt: 2023,
    description: 'High-floor corner condominium residence with panoramic lake and downtown views. Fully furnished with custom designer pieces, motorized solar shades, and dedicated 24-hour building amenities.',
    features: [
      'Fully Furnished Designer Interior Package',
      'Floor-to-Ceiling Glass with Lady Bird Lake Views',
      'Infinity Pool, Fitness Center, and Executive Boardroom Access',
      'Two Reserved Garage Parking Spaces with EV Charger',
      'Immediate Move-in Ready'
    ]
  }
];

export const REVIEWS = [
  {
    author: 'Manuel Nunez',
    rating: 5,
    text: 'Best real estate agency. Professional and straight to the point.',
    relativeTime: 'Google Review',
    verified: true
  },
  {
    author: 'Marco Moretti',
    rating: 5,
    text: 'Excellent service',
    relativeTime: 'Google Review',
    verified: true
  }
];
