import { Award, Users, ThumbsUp, Shield, Clock, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '25+',
    label: 'Years of Experience',
    description: 'Over two and a half decades of delivering quality paint work',
  },
  {
    icon: Award,
    value: '2000+',
    label: 'Projects Completed',
    description: 'Successfully transformed homes and commercial spaces',
  },
  {
    icon: Users,
    value: '1500+',
    label: 'Happy Clients',
    description: 'Satisfied customers who trust us with their spaces',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Quality Guarantee',
    description: 'We stand behind every project with a satisfaction guarantee',
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: 'Premium Materials Only',
    description:
      'We exclusively use paints and materials from our four authorized brand partners — Asian Paints, Berger, Birla Opus, and Dulux.',
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Pricing',
    description:
      'No hidden costs. We provide detailed quotes upfront so you know exactly what you\'re paying for.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We respect your time. Our projects are completed on schedule without compromising on quality.',
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description:
      'Our team is trained and certified by leading paint brands, ensuring the highest standards of application.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-24 bg-[oklch(0.10_0.005_60)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Why JJ Colours
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We combine craftsmanship, premium materials, and a customer-first approach to deliver
            results that exceed expectations every time.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-display text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-white/90 font-semibold text-sm mb-2">{stat.label}</div>
                <p className="text-white/50 text-xs leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-5 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
