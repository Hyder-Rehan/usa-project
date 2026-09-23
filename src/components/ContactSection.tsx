import React, { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle2, Send, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: initialInterest || 'Buying',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#FBF9F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Agency Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                Direct Communication
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
                Let's Talk Real Estate
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Whether you have an immediate inquiry about an active listing or are planning your next acquisition months ahead, we are ready to assist with straightforward, professional advice.
              </p>
            </div>

            {/* Business Card Box */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                  Real Estate Agency
                </span>
                <h3 className="text-xl font-bold font-serif text-neutral-900 mt-1">
                  USA Real Estate Team
                </h3>
                <p className="text-xs font-semibold text-neutral-500">
                  at LPT Realty
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100">
                <a
                  href="tel:+17182005395"
                  className="flex items-center space-x-3 text-neutral-800 hover:text-amber-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-300 group-hover:text-neutral-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 font-medium">Direct Telephone</span>
                    <span className="text-base font-bold text-neutral-900 group-hover:text-amber-700">
                      +1 718-200-5395
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-3 text-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 font-medium">Advisory Hours</span>
                    <span className="text-sm font-medium text-neutral-900">
                      Monday – Sunday · 8:00 AM – 8:00 PM EST
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 font-medium">Coverage Area</span>
                    <span className="text-sm font-medium text-neutral-900">
                      Nationwide USA Network via LPT Realty
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Assurance */}
            <div className="p-5 rounded-xl bg-neutral-100/80 border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
              <strong className="text-neutral-900 font-semibold block mb-1">Privacy Guarantee:</strong>
              Your contact details are strictly confidential and used solely by the USA Real Estate Team at LPT Realty to answer your real estate inquiry. No spam or third-party sharing.
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/90 shadow-md">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-neutral-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. A dedicated agent from the USA Real Estate Team at LPT Realty will review your details and contact you via phone (<strong className="text-neutral-800">{formData.phone}</strong>) or email shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          interest: 'Buying',
                          message: ''
                        });
                        setStatus('idle');
                      }}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-100 pb-4">
                    <h3 className="text-xl font-bold font-serif text-neutral-900">
                      Send a Message to Our Team
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Complete the brief form below and our advisors will respond promptly.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-neutral-300 focus:border-amber-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@example.com"
                        className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-neutral-300 focus:border-amber-500'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-neutral-300 focus:border-amber-500'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* I'm Interested In */}
                  <div>
                    <label htmlFor="interest" className="block text-xs font-medium text-neutral-700 mb-1.5">
                      I'm Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                    >
                      <option value="Buying">Buying</option>
                      <option value="Selling">Selling</option>
                      <option value="Investing">Investing</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your desired location, timeline, or any specific questions..."
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-xl text-sm font-semibold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-all shadow-md active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
