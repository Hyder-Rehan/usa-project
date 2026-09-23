import React from 'react';
import { MessageSquare, Search, Eye, Handshake, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      description: "Tell us what you're looking for, your ideal timeframe, and financial milestones.",
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Property Search',
      description: 'Explore curated properties matching your strict requirements, including off-market opportunities.',
      icon: Search
    },
    {
      num: '03',
      title: 'Viewings',
      description: 'Visit vetted properties in person or via high-definition private walkthroughs to compare options.',
      icon: Eye
    },
    {
      num: '04',
      title: 'Negotiation',
      description: 'Receive strategic contract and contingency support to secure optimal pricing and terms.',
      icon: Handshake
    },
    {
      num: '05',
      title: 'Closing',
      description: 'Complete your transaction with professional escrow guidance, title clearance, and key handover.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 bg-[#FBF9F5] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Methodology & Flow
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            A Simple Path to Your Next Property
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A transparent, five-stage advisory process designed to eliminate stress and guarantee successful closing.
          </p>
        </div>

        {/* Desktop / Large Screen Timeline (Horizontal) */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r from-amber-400 via-neutral-300 to-amber-400 -z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circle Node */}
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-neutral-200 group-hover:border-amber-400 shadow-md flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-1">
                    <span className="text-xs font-bold text-amber-700 font-mono tracking-wider">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-700 group-hover:text-amber-800 transition-colors mt-1" />
                  </div>

                  <h3 className="text-lg font-bold font-serif text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet & Mobile Timeline (Vertical) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-amber-300/80 space-y-10 ml-4 sm:ml-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                {/* Node on line */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-xs">
                  <span className="text-[10px] font-bold text-neutral-900 font-mono">
                    {step.num}
                  </span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-neutral-100 text-amber-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-neutral-900">
                      {step.num} — {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed pl-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
