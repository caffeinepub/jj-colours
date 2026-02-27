import { useState, useEffect } from 'react';
import { Menu, X, Paintbrush2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[oklch(0.08_0.005_60)]/98 backdrop-blur-md shadow-navy border-b border-white/10'
          : 'bg-[oklch(0.08_0.005_60)]/92 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/jj-colours-logo.dim_400x120.png"
              alt="JJ Colours"
              className="h-12 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div
              className="hidden items-center gap-2"
              style={{ display: 'none' }}
            >
              <div className="w-9 h-9 rounded-sm bg-accent/20 flex items-center justify-center">
                <Paintbrush2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-tight">
                  JJ <span className="text-accent italic">Colours</span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200
                  text-white/80 hover:text-accent hover:bg-white/8"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="ml-4 bg-accent text-accent-foreground font-semibold text-sm py-2.5 px-6 rounded-sm
                hover:brightness-110 transition-all duration-300 shadow-gold hover:shadow-lg
                hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-sm transition-colors text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[oklch(0.10_0.005_60)] border-b border-white/10`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-3 text-sm font-medium text-white/80 hover:text-accent hover:bg-white/8 rounded-sm transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mt-2 bg-accent text-accent-foreground font-semibold text-sm text-center py-3 px-6 rounded-sm
              hover:brightness-110 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
