import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StatisticsSection } from './components/StatisticsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ReviewsSection } from './components/ReviewsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PROPERTIES } from './data/properties';
import { FilterState, Property } from './types';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Consultation');
  const [contactInitialInterest, setContactInitialInterest] = useState('General Consultation');

  // Filter state for property search
  const [filters, setFilters] = useState<FilterState>({
    location: 'all',
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all'
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      location: 'all',
      propertyType: 'all',
      priceRange: 'all',
      bedrooms: 'all'
    });
  };

  // Filtered properties logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Location filter
      if (filters.location !== 'all') {
        const matchesLocation =
          prop.location.toLowerCase().includes(filters.location.toLowerCase()) ||
          prop.state.toLowerCase() === filters.location.toLowerCase();
        if (!matchesLocation) return false;
      }

      // Property type filter
      if (filters.propertyType !== 'all') {
        if (prop.type !== filters.propertyType) return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'rental') {
          if (prop.status !== 'For Rent') return false;
        } else if (filters.priceRange === 'under-1m') {
          if (prop.status === 'For Rent' || prop.price >= 1000000) return false;
        } else if (filters.priceRange === '1m-3m') {
          if (prop.status === 'For Rent' || prop.price < 1000000 || prop.price > 3000000) return false;
        } else if (filters.priceRange === '3m-plus') {
          if (prop.status === 'For Rent' || prop.price < 3000000) return false;
        }
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'all') {
        const minBeds = parseInt(filters.bedrooms, 10);
        if (prop.beds < minBeds) return false;
      }

      return true;
    });
  }, [filters]);

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = (interest?: string) => {
    if (interest) {
      setContactInitialInterest(interest);
    }
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openConsultationWithTopic = (topic: string) => {
    setConsultationTopic(topic);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-neutral-900 flex flex-col selection:bg-amber-400/30 selection:text-neutral-950">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => openConsultationWithTopic('General Consultation')}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreProperties={scrollToProperties}
          onTalkToAgent={() => scrollToContact('General Consultation')}
        />

        {/* 3. Property Search Panel (Floating) */}
        <PropertySearch
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          onExecuteSearch={scrollToProperties}
          totalResults={filteredProperties.length}
        />

        {/* 4. Featured Properties */}
        <FeaturedProperties
          properties={filteredProperties}
          onPropertyInquiry={(property: Property) => {
            openConsultationWithTopic(`Inquiry: ${property.name} (${property.formattedPrice})`);
          }}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. About Section */}
        <AboutSection
          onOpenConsultation={() => openConsultationWithTopic('Learn More About Team')}
        />

        {/* 7. Services Section */}
        <ServicesSection
          onSelectService={(serviceTitle) => {
            openConsultationWithTopic(serviceTitle);
          }}
        />

        {/* 8. Statistics Section */}
        <StatisticsSection />

        {/* 9. Real Estate Process Timeline */}
        <ProcessTimeline />

        {/* 10. Google Reviews Section */}
        <ReviewsSection
          onOpenConsultation={() => openConsultationWithTopic('Client Review Feedback')}
        />

        {/* 11. CTA Section */}
        <CtaSection
          onOpenConsultation={() => openConsultationWithTopic('Ready to Make Next Move')}
        />

        {/* 12. Contact Section */}
        <ContactSection
          initialInterest={contactInitialInterest}
        />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Direct Scheduling / Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultInterest={consultationTopic}
      />
    </div>
  );
}
