import React from 'react';
import { Star, ArrowRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { heroHomeImg } from '../data/properties';

interface HeroProps {
  onExploreProperties: () => void;
  onTalkToAgent: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties, onTalkToAgent }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Image Container with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroHomeImg}
          alt="Luxury American architectural modern residence at twilight"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark luxury scrim / gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B111E]/95 via-[#0B111E]/75 to-[#0B111E]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left py-12 sm:py-20">
        <div className="max-w-3xl space-y-6">
          {/* Trust Badge / Brand Signal */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-neutral-200 text-xs sm:text-sm font-medium tracking-wide animate-fadeIn">
            <div className="flex items-center text-amber-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 Google Rating</span>
            <span className="text-white/40">|</span>
            <span className="text-amber-200/90 font-medium hidden xs:inline">Based on 3 Verified Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif leading-[1.08] drop-shadow-sm text-balance">
            Find a Place You'll Be Proud to Call Home
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed max-w-2xl text-balance">
            Professional real estate guidance for buying, selling, and investing across the USA.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreProperties}
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl text-base font-semibold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-xl hover:shadow-amber-300/20 active:scale-[0.99] cursor-pointer group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onTalkToAgent}
              className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-[0.99] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>Talk to an Agent</span>
            </button>
          </div>

          {/* Secondary Trust Indicator */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-medium text-white">Professional.</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-medium text-white">Straightforward.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-medium text-white">Client-focused.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
