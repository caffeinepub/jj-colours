import { BadgeCheck } from 'lucide-react';

const partners = [
  {
    name: 'Asian Paints',
    logo: '/assets/generated/asian-paints-logo.dim_300x150.png',
    description: 'India\'s largest paint company, trusted for over 75 years.',
  },
  {
    name: 'Berger Paints',
    logo: '/assets/generated/berger-paints-logo.dim_300x150.png',
    description: 'Premium paints with a legacy of quality and innovation.',
  },
  {
    name: 'Birla Opus Paints',
    logo: '/assets/generated/birla-opus-logo.dim_300x150.png',
    description: 'The newest premium paint brand from the Aditya Birla Group.',
  },
  {
    name: 'Dulux Paints',
    logo: '/assets/generated/dulux-paints-logo.dim_300x150.png',
    description: 'World-renowned for superior colour and lasting protection.',
  },
];

export default function Partners() {
  return (
    <div className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Credentials
          </p>
          <h2 className="section-heading mb-4">Authorized Applicators</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subheading max-w-2xl mx-auto">
            JJ Colours is proud to be an authorized applicator for four of the world's most
            trusted paint brands — a testament to our quality and expertise.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-card border border-border rounded-lg p-8 flex flex-col items-center text-center card-hover shadow-card group hover:border-accent/40 transition-all duration-300"
            >
              {/* Logo — white background to show original brand colors */}
              <div className="w-full h-28 flex items-center justify-center mb-6 bg-white rounded-md p-4 border border-border shadow-xs">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden items-center justify-center w-full h-full"
                  style={{ display: 'none' }}
                >
                  <span className="font-display text-lg font-bold text-foreground text-center">
                    {partner.name}
                  </span>
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {partner.description}
              </p>

              {/* Authorized Badge — gold */}
              <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5 mt-auto">
                <BadgeCheck className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-accent text-xs font-semibold">Authorized Applicator</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          Being an authorized applicator means we receive direct training, support, and access to
          the latest products from these brands — ensuring the best results for your project.
        </p>
      </div>
    </div>
  );
}
