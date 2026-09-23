import React from 'react';
import { Home, TrendingUp, BarChart3, MoveRight, ArrowUpRight, Compass, KeyRound } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'buying',
      title: 'Buying a Home',
      description: 'Professional guidance throughout the home-buying process, from pre-approval and private showings to competitive contract negotiation.',
      icon: Home,
      tag: 'Acquisition'
    },
    {
      id: 'selling',
      title: 'Selling Your Property',
      description: 'Strategic marketing and guidance for property sellers. High-production staging, digital MLS syndication, and maximum equity realization.',
      icon: KeyRound,
      tag: 'Representation'
    },
    {
      id: 'investing',
      title: 'Investment Properties',
      description: 'Support for clients exploring real estate investment opportunities, multi-family cap-rate analyses, and 1031 tax-deferred exchanges.',
      icon: TrendingUp,
      tag: 'Portfolio Growth'
    },
    {
      id: 'analysis',
      title: 'Market Analysis',
      description: 'Useful information about property values, recent neighborhood comps, and micro-market conditions to inform your timing and offers.',
      icon: BarChart3,
      tag: 'Valuation & Comps'
    },
    {
      id: 'relocation',
      title: 'Relocation Assistance',
      description: 'Support for clients moving to a new city or state. Curated school district overviews, remote video walk-throughs, and turnkey transitions.',
      icon: MoveRight,
      tag: 'Interstate Concierge'
    },
    {
      id: 'consultation',
      title: 'Property Consultation',
      description: 'One-on-one real estate consultation based on individual goals. Unbiased advice on renovation ROI, refinancing, and portfolio positioning.',
      icon: Compass,
      tag: 'Advisory'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Comprehensive Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Our Real Estate Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Tailored representation for discerning home buyers, sellers, and portfolio investors nationwide.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="group relative bg-[#FBF9F5] rounded-2xl p-8 border border-neutral-200/80 hover:border-amber-400/80 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center text-amber-700 group-hover:bg-amber-300 group-hover:text-neutral-950 transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 group-hover:text-amber-700 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-neutral-900 mb-3 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-900">
                    Request Consultation
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-amber-300 group-hover:text-neutral-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
