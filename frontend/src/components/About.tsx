import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Over 25 years of professional painting experience',
  'Authorized applicator for 4 leading paint brands',
  'Skilled team of trained and certified painters',
  'Premium quality materials and eco-friendly paints',
  'On-time project delivery with zero compromise on quality',
  'Free colour consultation and site visit',
];

export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 rounded-lg overflow-hidden opacity-10">
              <img
                src="/assets/generated/about-texture.dim_1200x400.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/painter-at-work.dim_800x600.png"
                  alt="Professional painter at work"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge — gold */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-lg p-5 shadow-gold">
                <div className="font-display text-3xl font-bold">25+</div>
                <div className="text-sm font-medium opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="section-heading mb-4">
              About <span className="text-accent italic">JJ Colours</span>
            </h2>
            <div className="gold-divider mb-6" />

            <p className="text-muted-foreground leading-relaxed mb-4">
              JJ Colours is a trusted name in professional repainting and interior designing,
              serving homes and businesses with passion and precision. Founded by{' '}
              <span className="text-foreground font-semibold">Yashwant Shinde</span>, our company
              is built on the belief that every space deserves to look its best — bringing artistry
              and expertise to every project we undertake.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As an authorized applicator for Asian Paints, Berger Paints, Birla Opus Paints, and
              Dulux Paints, we have access to the finest products and the latest techniques — ensuring
              results that are not just beautiful, but built to last.
            </p>

            {/* Proprietor */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-accent/10 border border-accent/25 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-sm">YS</span>
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm">Yashwant Shinde</div>
                <div className="text-muted-foreground text-xs">Proprietor, JJ Colours</div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-sm
                hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-gold
                hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
