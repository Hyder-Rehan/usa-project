import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Eye } from 'lucide-react';
import { Property } from '../types';
import { PropertyModal } from './PropertyModal';

interface FeaturedPropertiesProps {
  properties: Property[];
  onPropertyInquiry: (property: Property, notes?: string) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onPropertyInquiry
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section id="properties" className="py-24 bg-[#FBF9F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            Curated Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Featured Properties
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Explore carefully selected properties for modern living and investment opportunities.
          </p>
        </div>

        {/* Properties Grid */}
        {properties.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300 p-8">
            <h3 className="text-lg font-semibold text-neutral-800">No properties match your exact filters</h3>
            <p className="text-sm text-neutral-500 mt-2">
              Try adjusting your location or price range, or contact our team directly at{' '}
              <a href="tel:+17182005395" className="text-amber-700 font-semibold underline">
                +1 718-200-5395
              </a>{' '}
              for private off-market listings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <article
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => setSelectedProperty(property)}>
                  <img
                    src={property.image}
                    alt={`${property.name} located in ${property.location}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${
                        property.status === 'For Sale'
                          ? 'bg-neutral-900/85 text-white backdrop-blur-md border border-white/20'
                          : 'bg-amber-300 text-neutral-950 font-bold'
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Quick View Tag on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="p-2 rounded-full bg-white/90 text-neutral-900 shadow-md backdrop-blur-sm flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Price in Image Scrim */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                    <span className="text-2xl font-bold font-sans tracking-tight drop-shadow-md">
                      {property.formattedPrice}
                    </span>
                    <span className="text-xs font-medium text-neutral-200 tracking-wide">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => setSelectedProperty(property)}
                      className="text-xl font-bold text-neutral-900 group-hover:text-amber-800 transition-colors cursor-pointer font-serif line-clamp-1"
                    >
                      {property.name}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{property.location}</span>
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <span className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <span className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProperty(property)}
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-amber-300/90 group-hover:bg-amber-300 transition-colors duration-200 cursor-pointer"
                    >
                      <span>View Property</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-neutral-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={onPropertyInquiry}
      />
    </section>
  );
};
