import React, { useEffect, useState, useRef } from 'react';
import { Star, TrendingUp, Users, Building, Award } from 'lucide-react';

interface StatConfig {
  id: string;
  targetValue: number;
  displayPrefix?: string;
  displaySuffix: string;
  isStarRating?: boolean;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

export const StatisticsSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const statsConfig: StatConfig[] = [
    {
      id: 'clients',
      targetValue: 100,
      displaySuffix: '+',
      label: 'Clients Assisted',
      sublabel: 'Satisfied home buyers & investors',
      icon: Users
    },
    {
      id: 'properties',
      targetValue: 50,
      displaySuffix: '+',
      label: 'Properties Listed',
      sublabel: 'Residential & luxury estates',
      icon: Building
    },
    {
      id: 'experience',
      targetValue: 10,
      displaySuffix: '+',
      label: 'Years of Experience',
      sublabel: 'In US market cycles & negotiations',
      icon: Award
    },
    {
      id: 'rating',
      targetValue: 5.0,
      displaySuffix: '',
      isStarRating: true,
      label: 'Google Rating',
      sublabel: 'Verified 5-star client reviews',
      icon: Star
    }
  ];

  const [counters, setCounters] = useState<{ [key: string]: number }>({
    clients: 0,
    properties: 0,
    experience: 0,
    rating: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounters({
        clients: Math.round(100 * ease),
        properties: Math.round(50 * ease),
        experience: Math.round(10 * ease),
        rating: Number((5.0 * ease).toFixed(1))
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0B111E] text-white relative overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Proven Track Record
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            Excellence Defined by Real Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsConfig.map((item) => {
            const Icon = item.icon;
            const value = counters[item.id];

            return (
              <div
                key={item.id}
                className="relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-400/40 transition-colors text-center sm:text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-baseline justify-center sm:justify-start gap-1 font-sans">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                      {item.isStarRating ? value.toFixed(1) : value}
                    </span>
                    {item.isStarRating ? (
                      <span className="text-2xl font-bold text-amber-400 flex items-center ml-1">
                        ⭐
                      </span>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-bold text-amber-400">
                        {item.displaySuffix}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-neutral-100 font-serif">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                    {item.sublabel}
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
