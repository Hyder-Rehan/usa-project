import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, CheckCircle2, Send, Shield } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'General Consultation'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: defaultInterest,
    meetingType: 'Phone Call',
    preferredTime: 'Morning (9:00 AM - 12:00 PM EST)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so we can reach you.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#0B111E] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-300">
              USA Real Estate Team at LPT Realty
            </span>
            <h3 id="consultation-modal-title" className="text-xl font-bold font-serif text-white mt-0.5">
              Schedule a Private Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif text-neutral-900">
                Consultation Request Confirmed
              </h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                Thank you, {formData.name}. Our senior agent will contact you at{' '}
                <strong className="text-neutral-800">{formData.phone}</strong> during your preferred timeframe.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs bg-red-50 text-red-700 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    required
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-topic" className="block text-xs font-medium text-neutral-700 mb-1">
                    Discussion Focus
                  </label>
                  <select
                    id="modal-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                  >
                    <option value="Buying a Home">Buying a Home</option>
                    <option value="Selling Your Property">Selling Your Property</option>
                    <option value="Investment Properties">Investment Properties</option>
                    <option value="Market Analysis">Market Analysis</option>
                    <option value="Relocation Assistance">Relocation Assistance</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-type" className="block text-xs font-medium text-neutral-700 mb-1">
                    Preferred Medium
                  </label>
                  <select
                    id="modal-type"
                    value={formData.meetingType}
                    onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                  >
                    <option value="Phone Call">Direct Phone Call</option>
                    <option value="Video Conference">Virtual Video Meeting</option>
                    <option value="In-Person Review">In-Person Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-time" className="block text-xs font-medium text-neutral-700 mb-1">
                  Preferred Time Window
                </label>
                <select
                  id="modal-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                >
                  <option value="Morning (9:00 AM - 12:00 PM EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM EST)">Afternoon (12:00 PM – 4:00 PM EST)</option>
                  <option value="Evening (4:00 PM - 7:00 PM EST)">Evening (4:00 PM – 7:00 PM EST)</option>
                  <option value="As Soon As Possible">As Soon As Possible</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-medium text-neutral-700 mb-1">
                  Brief Overview or Target Cities (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g., Looking for a 4-bed home in New York or Florida within the next 3 months..."
                  className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Consultation Request</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                <span>Or dial directly: <a href="tel:+17182005395" className="font-semibold text-neutral-800 hover:underline">+1 718-200-5395</a></span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
