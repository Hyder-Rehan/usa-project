import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { ctaEstateImg } from '../data/properties';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Image Container with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaEstateImg}
          alt="Luxury waterfront residential estate at twilight"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0B111E]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-[#0B111E]/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-3">
          Take The Next Step
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight text-balance">
          Ready to Make Your Next Move?
        </h2>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Whether you're buying, selling, or exploring your next investment, let's talk about your goals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-all shadow-xl hover:shadow-amber-300/20 active:scale-[0.99] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-neutral-950" />
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </button>

          <a
            href="tel:+17182005395"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 transition-all active:scale-[0.99]"
            aria-label="Call +1 718-200-5395"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call +1 718-200-5395</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-neutral-400">
          USA Real Estate Team at LPT Realty · Direct telephone support available 7 days a week
        </p>
      </div>
    </section>
  );
};
