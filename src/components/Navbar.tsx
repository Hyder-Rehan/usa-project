import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B111E]/92 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#0B111E]/80 via-[#0B111E]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex flex-col focus:outline-none"
            aria-label="USA Real Estate Team at LPT Realty"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
              USA Real Estate Team
            </span>
            <span className="text-xs font-medium tracking-wider text-amber-300/90 -mt-0.5">
              at LPT Realty
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-neutral-200 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+17182005395"
              className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-neutral-200 hover:text-amber-300 transition-colors px-3 py-2 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm"
              aria-label="Call +1 718-200-5395"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+1 718-200-5395</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-all shadow-md hover:shadow-amber-400/20 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-neutral-950" />
              <span>Schedule a Consultation</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B111E]/98 border-b border-white/15 px-6 pt-4 pb-6 mt-3 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-neutral-200 hover:text-amber-300 transition-colors py-1.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href="tel:+17182005395"
                className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-white/5 text-amber-300 text-sm font-semibold border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>+1 718-200-5395</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-lg text-center text-sm font-bold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-md"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
