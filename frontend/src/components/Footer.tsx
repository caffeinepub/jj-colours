import { Paintbrush2, Phone, Mail, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const servicesList = [
  'Interior Repainting',
  'Exterior Repainting',
  'Interior Designing',
  'Texture Finishes',
  'Waterproofing',
  'Colour Consultation',
];

const partnersList = [
  'Asian Paints',
  'Berger Paints',
  'Birla Opus Paints',
  'Dulux Paints',
];

const contactInfo = [
  { icon: Phone, text: '+91 98226 25581', href: 'tel:+919822625581' },
  { icon: Mail, text: 'yashwant.shinde.3262@gmail.com', href: 'mailto:yashwant.shinde.3262@gmail.com' },
  { icon: MapPin, text: 'Mumbai, Maharashtra, India', href: '#' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'jj-colours'
  );

  return (
    <footer className="bg-[oklch(0.08_0.005_60)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 mb-5 group"
            >
              <img
                src="/assets/generated/jj-colours-logo.dim_400x120.png"
                alt="JJ Colours"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2" style={{ display: 'none' }}>
                <div className="w-8 h-8 rounded-sm bg-accent/20 flex items-center justify-center">
                  <Paintbrush2 className="w-4 h-4 text-accent" />
                </div>
                <span className="font-display text-lg font-bold text-white">
                  JJ <span className="text-accent italic">Colours</span>
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Professional repainting and interior designing services. Authorized applicator for
              Asian Paints, Berger, Birla Opus, and Dulux.
            </p>
            {/* Proprietor */}
            <div className="flex items-center gap-2 mb-4 p-3 bg-accent/10 border border-accent/20 rounded-md">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-xs">YS</span>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Yashwant Shinde</div>
                <div className="text-white/50 text-xs">Proprietor</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/45 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Available Mon–Sat, 8 AM – 7 PM
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-accent text-base mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-accent text-base mb-5 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Partners */}
          <div>
            <h4 className="font-display font-semibold text-accent text-base mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="flex items-start gap-3 text-white/60 hover:text-accent text-sm transition-colors duration-200 group"
                    >
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/60 group-hover:text-accent transition-colors" />
                      <span className="break-all">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <h4 className="font-display font-semibold text-accent text-base mb-3 tracking-wide">
              Authorized Partners
            </h4>
            <ul className="space-y-2">
              {partnersList.map((partner) => (
                <li key={partner} className="text-white/60 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/45 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} JJ Colours — Yashwant Shinde. All rights reserved.
          </p>
          <p className="text-white/45 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-accent fill-accent mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-accent underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
