import React from 'react';
import { Compass, MessageSquare, UserCheck, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Compass,
      title: 'Local Market Knowledge',
      description: 'Understand neighborhoods, pricing and current market conditions with data-grounded insights.'
    },
    {
      icon: MessageSquare,
      title: 'Straightforward Guidance',
      description: 'Clear communication and professional advice without unnecessary complications or ambiguity.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Service',
      description: "A tailored strategy built around each client's individual lifestyle, financial, and investment goals."
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Support',
      description: 'Experienced representation throughout every stage of the buying, selling, escrow, and closing process.'
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            The Client Advantage
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Real Estate Service Built Around You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Our advisory standard pairs deep local analytics with uncompromising dedication to your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-[#FBF9F5] border border-neutral-200/70 hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-amber-700 group-hover:bg-amber-300 group-hover:text-neutral-950 transition-colors duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-neutral-900 mb-3 group-hover:text-amber-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-amber-800">
                  <span>Advantage 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
