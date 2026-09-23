import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award, Building, Users } from 'lucide-react';
import { aboutOfficeImg } from '../data/properties';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [showExtendedBio, setShowExtendedBio] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#FBF9F5] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Professional Photography Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-900">
              <img
                src={aboutOfficeImg}
                alt="USA Real Estate Team consultation office with architectural skyline view"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E]/70 via-transparent to-transparent" />

              {/* Floating Credential Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-amber-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">LPT Realty Network</h4>
                      <p className="text-xs text-neutral-500">Nationwide Cloud Brokerage Reach</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                    Trusted
                  </span>
                </div>
              </div>
            </div>

            {/* Accent backdrop shape */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* Right: Content & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700">
              Who We Are
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
              About USA Real Estate Team
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                At <strong className="text-neutral-900 font-semibold">USA Real Estate Team at LPT Realty</strong>, we believe that real estate transactions should be transparent, rewarding, and executed with absolute precision. We help buyers, sellers, and investors navigate residential and luxury real estate across key American markets with clear communication, deep market knowledge, and highly personalized service.
              </p>
              <p>
                Whether you are securing your family’s forever home, preparing a high-value property for market debut, or deploying capital into cash-flowing investment assets, our team delivers strategic guidance backed by the robust technology and nationwide reach of LPT Realty.
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-sm text-neutral-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Client-First Fiduciary Standards</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Rigorous Comparative Market Data</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Modern Digital Marketing Exposure</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Responsive Single-Point Advisory</span>
              </div>
            </div>

            {/* Expanded Bio Details */}
            {showExtendedBio && (
              <div className="p-5 rounded-xl bg-white border border-neutral-200 space-y-3 animate-fadeIn text-sm text-neutral-600">
                <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-700" />
                  The LPT Realty Partnership
                </h4>
                <p>
                  As part of the cloud-first brokerage revolution at LPT Realty, our agents leverage cutting-edge MLS syndication, predictive marketing engines, and institutional-grade contract management to guarantee your real estate transactions close seamlessly and on your terms.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowExtendedBio(!showExtendedBio)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-sm cursor-pointer"
              >
                <span>{showExtendedBio ? 'Show Less' : 'Learn More About Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4 text-neutral-600" />
                <span>Meet With Our Advisors</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
