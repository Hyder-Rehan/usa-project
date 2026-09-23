export interface Property {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  status: 'For Sale' | 'For Rent';
  location: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Single Family' | 'Penthouse' | 'Luxury Estate' | 'Townhome' | 'Condominium';
  image: string;
  featured?: boolean;
  yearBuilt?: number;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  verified: boolean;
}

export interface FilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}
