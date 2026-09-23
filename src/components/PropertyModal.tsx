import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Phone, CheckCircle2, Send } from 'lucide-react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (property: Property, notes?: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onInquire }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [notes, setNotes] = useState('');

  if (!property) return null;

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    onInquire(property, notes);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-neutral-200 focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-property-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-amber-400 text-neutral-950 uppercase tracking-wider mb-1.5">
                {property.status}
              </span>
              <h3 id="modal-property-title" className="text-2xl sm:text-3xl font-bold font-serif">
                {property.name}
              </h3>
              <p className="text-sm text-neutral-300 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300">
                {property.formattedPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-neutral-400" /> Bedrooms
              </span>
              <span className="text-lg font-bold text-neutral-900 mt-0.5">{property.beds} Beds</span>
            </div>
            <div className="flex flex-col items-center border-x border-neutral-200">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-neutral-400" /> Bathrooms
              </span>
              <span className="text-lg font-bold text-neutral-900 mt-0.5">{property.baths} Baths</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-neutral-400" /> Living Area
              </span>
              <span className="text-lg font-bold text-neutral-900 mt-0.5">{property.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
              Property Overview
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
              Distinguished Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="border-t border-neutral-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-semibold text-neutral-900">
                  Request Private Tour or Info
                </h4>
                <p className="text-xs text-neutral-500">
                  USA Real Estate Team at LPT Realty · Call directly: <a href="tel:+17182005395" className="text-amber-700 font-semibold hover:underline">+1 718-200-5395</a>
                </p>
              </div>
            </div>

            {inquirySent ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-semibold">Inquiry sent successfully!</span> Our real estate agent will reach out shortly to discuss {property.name}.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-3">
                <div>
                  <label htmlFor="inquiry-notes" className="block text-xs font-medium text-neutral-600 mb-1">
                    Questions or preferred viewing dates:
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="I am interested in scheduling a viewing or receiving the property disclosure packet..."
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 pt-1">
                  <a
                    href="tel:+17182005395"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-amber-700"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    +1 718-200-5395
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire About This Property</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
