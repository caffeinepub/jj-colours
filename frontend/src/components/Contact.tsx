import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [
  'Interior Repainting',
  'Exterior Repainting',
  'Interior Designing',
  'Texture & Decorative Finishes',
  'Waterproofing',
  'Colour Consultation',
  'Wood Polishing',
  'All Types of Paint Work',
  'Other',
];

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98226 25581',
    href: 'tel:+919822625581',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'yashwant.shinde.3262@gmail.com',
    href: 'mailto:yashwant.shinde.3262@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Mumbai, Maharashtra, India',
    href: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="section-heading mb-4">Get a Free Quote</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subheading max-w-2xl mx-auto">
            Ready to transform your space? Fill in the form below and our team will get back to
            you within 24 hours with a detailed quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Let's Talk About Your Project
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether it's a single room or an entire building, we're here to help. Reach out
                to us through any of the channels below.
              </p>
            </div>

            {/* Proprietor */}
            <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/25 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-sm">YS</span>
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm">Yashwant Shinde</div>
                <div className="text-muted-foreground text-xs">Proprietor, JJ Colours</div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                        {detail.label}
                      </div>
                      <div className="text-foreground font-medium group-hover:text-accent transition-colors duration-200 break-all">
                        {detail.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Saturday</span>
                  <span className="text-foreground font-medium">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">10:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-8 shadow-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your request has been received. We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="border-border focus:border-accent focus:ring-accent/20"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="border-border focus:border-accent focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      Service Required <span className="text-accent">*</span>
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange('service', value)}
                      required
                    >
                      <SelectTrigger className="border-border focus:border-accent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message / Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project — size, location, timeline, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="border-border focus:border-accent focus:ring-accent/20 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground font-semibold w-full flex items-center justify-center gap-2 text-base py-4 rounded-sm
                      hover:brightness-110 transition-all duration-300 shadow-gold hover:shadow-lg
                      hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
