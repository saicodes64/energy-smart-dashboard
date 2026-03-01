import { useState } from 'react';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, XCircle, Send, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import EnergyChatbot from '@/components/EnergyChatbot';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', orgType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.orgType) e.orgType = 'Organization type is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.length > 1000) e.message = 'Message must be under 1000 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg energy-gradient">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">VoltVision</h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Energy Optimizer</p>
            </div>
          </Link>
          <nav className="flex items-center gap-1">
            <Link to="/" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">Dashboard</Link>
            <Link to="/about" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">About</Link>
            <Link to="/contact" className="px-3 py-1.5 text-sm text-primary font-medium rounded-lg bg-primary/10">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Get in <span className="text-gradient-blue">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Have questions about VoltVision? Reach out and our energy support team will get back to you.</p>
        </div>

        {/* Success Banner */}
        {status === 'success' && (
          <div className="mb-8 rounded-xl border border-savings/30 bg-savings/5 p-6 glow-green">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-savings flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-savings mb-1">Message Sent Successfully!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you for contacting VoltVision. Our energy support team has received your request and will respond shortly. Together, let's build a smarter and more sustainable energy future.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Banner */}
        {status === 'error' && (
          <div className="mb-8 rounded-xl border border-peak/30 bg-peak/5 p-6 glow-red">
            <div className="flex items-start gap-3">
              <XCircle className="h-6 w-6 text-peak flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-peak mb-1">Submission Failed</h3>
                <p className="text-xs text-muted-foreground">Oops! Something went wrong while submitting your request. Please check your details and try again.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="card-gradient rounded-xl border border-border p-6 space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" className="mt-1.5" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} maxLength={100} />
                  {errors.name && <p className="text-xs text-peak mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1.5" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} maxLength={255} />
                  {errors.email && <p className="text-xs text-peak mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label>Organization Type *</Label>
                  <Select value={form.orgType} onValueChange={v => setForm(p => ({ ...p, orgType: v }))}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="industry">Industry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.orgType && <p className="text-xs text-peak mt-1">{errors.orgType}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your energy optimization needs..." className="mt-1.5 min-h-[120px]" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} maxLength={1000} />
                  {errors.message && <p className="text-xs text-peak mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}

            {/* What Happens Next */}
            <div className="card-gradient rounded-xl border border-border p-6 mt-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                {[
                  "Our team reviews your request",
                  "We analyze your energy-related query",
                  "We provide guidance or integration support",
                  "For deployment inquiries, we share implementation details",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">{i + 1}</div>
                    <span className="text-xs text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-gradient rounded-xl border border-border p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem icon={<Mail className="h-4 w-4 text-primary" />} label="Support Email" value="support@voltvision.ai" />
                <ContactItem icon={<Phone className="h-4 w-4 text-primary" />} label="Phone" value="+91 98765 43210" />
                <ContactItem icon={<MapPin className="h-4 w-4 text-primary" />} label="Office" value="Bangalore, India" />
              </div>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card-gradient rounded-xl border border-primary/20 p-6 glow-blue">
              <h3 className="text-sm font-semibold text-foreground mb-2">Need Immediate Help?</h3>
              <p className="text-xs text-muted-foreground mb-3">Use our AI Energy Chatbot for instant guidance on energy optimization.</p>
              <div className="flex items-center gap-2 text-primary text-xs font-medium">
                <ArrowRight className="h-3.5 w-3.5" />
                <span>Click the chat icon in the bottom-right</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <EnergyChatbot />
    </div>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  </div>
);

export default Contact;
