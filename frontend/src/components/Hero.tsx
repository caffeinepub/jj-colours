import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Beautiful painted interior"
          className="w-full h-full object-cover"
        />
        {/* Deep black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_60)]/95 via-[oklch(0.08_0.005_60)]/80 to-[oklch(0.08_0.005_60)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_60)]/85 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-accent/95 text-sm font-medium tracking-wide">
              Authorized Applicator — 4 Premium Paint Brands
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transforming Spaces
            <br />
            with{' '}
            <span className="text-accent italic">Colour & Craft</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            JJ Colours brings professional repainting, interior designing, and decorative finishes
            to your home and business. Quality you can see, craftsmanship you can trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground font-semibold text-base px-10 py-4 rounded-sm
                hover:brightness-110 transition-all duration-300 shadow-gold hover:shadow-lg
                hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </button>
            <button
              onClick={scrollToServices}
              className="border-2 border-white/60 text-white font-semibold text-base px-10 py-4 rounded-sm
                hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Explore Services
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '2000+', label: 'Projects Done' },
              { value: '4', label: 'Brand Partners' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-accent transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </div>
  );
}
