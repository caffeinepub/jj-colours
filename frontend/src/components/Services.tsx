import { Home, Building2, Palette, Layers, Droplets, Sparkles, Star } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Repainting',
    description:
      'Complete interior painting solutions for homes and offices. We handle everything from surface preparation to the final coat.',
    popular: true,
  },
  {
    icon: Building2,
    title: 'Exterior Repainting',
    description:
      'Weather-resistant exterior painting that protects and beautifies your property for years to come.',
    popular: false,
  },
  {
    icon: Palette,
    title: 'Interior Designing',
    description:
      'Transform your space with our expert interior design services — from colour schemes to complete room makeovers.',
    popular: false,
  },
  {
    icon: Layers,
    title: 'Texture & Decorative Finishes',
    description:
      'Add depth and character to your walls with our range of texture finishes, including Venetian plaster and more.',
    popular: false,
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description:
      'Protect your property from water damage with our professional waterproofing solutions for roofs, walls, and basements.',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Colour Consultation',
    description:
      'Not sure which colours to choose? Our expert colour consultants will help you find the perfect palette for your space.',
    popular: false,
  },
];

export default function Services() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="section-heading mb-4">Our Services</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subheading max-w-2xl mx-auto">
            From a single room refresh to a complete property transformation, JJ Colours delivers
            exceptional results with every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative bg-card border border-border rounded-lg p-8 card-hover shadow-card group"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-sm bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-b-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
