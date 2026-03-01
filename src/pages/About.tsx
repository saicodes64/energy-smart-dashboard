import { Zap, TrendingDown, Brain, BarChart3, Leaf, Globe, Wifi, Smartphone, Building, Shield, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnergyChatbot from '@/components/EnergyChatbot';

const About = () => {
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
            <Link to="/about" className="px-3 py-1.5 text-sm text-primary font-medium rounded-lg bg-primary/10">About</Link>
            <Link to="/contact" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">AI-Powered Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient-blue">VoltVision</span>
          </h1>
          <p className="text-lg text-primary font-medium mb-3">AI-Powered Energy Intelligence for Smarter Homes & Industries</p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            VoltVision is an AI-driven platform that helps homes and industries optimize electricity usage, reduce bills, and minimize grid stress using intelligent forecasting and smart scheduling.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <SectionTitle icon={<TrendingDown />} title="The Problem We Identified" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <BarChart3 className="h-5 w-5 text-peak" />, title: "Rising Electricity Bills", desc: "Energy costs continue to climb, impacting households and businesses across the country." },
              { icon: <Zap className="h-5 w-5 text-peak" />, title: "Peak Load Grid Stress", desc: "Simultaneous high-power usage causes grid instability and increases blackout risks." },
              { icon: <Target className="h-5 w-5 text-peak" />, title: "Inefficient Appliance Timing", desc: "Most users run heavy appliances during expensive peak hours without realizing it." },
              { icon: <Shield className="h-5 w-5 text-peak" />, title: "Lack of Usage Awareness", desc: "Without data visibility, users cannot make informed decisions about their energy consumption." },
            ].map((item, i) => (
              <div key={i} className="card-gradient rounded-xl border border-border p-5 hover:border-peak/30 transition-colors">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <SectionTitle icon={<Lightbulb />} title="Our Mission" />
          <div className="card-gradient rounded-xl border border-primary/20 p-6 glow-blue">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              VoltVision aims to make energy consumption smarter, more affordable, and environmentally responsible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Reduce electricity wastage",
                "Lower monthly energy bills",
                "Minimize peak-load grid stress",
                "Promote sustainable energy usage",
                "Empower data-driven energy decisions",
              ].map((goal, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <SectionTitle icon={<Brain />} title="Our AI-Powered Solution" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "ML Forecasting", desc: "Machine learning models predict hourly energy consumption patterns." },
              { icon: <Zap className="h-5 w-5 text-primary" />, title: "Peak Detection", desc: "Algorithms identify expensive peak hours automatically." },
              { icon: <Target className="h-5 w-5 text-primary" />, title: "Smart Scheduling", desc: "AI recommends optimal times to run high-load appliances." },
              { icon: <TrendingDown className="h-5 w-5 text-primary" />, title: "Cost Projection", desc: "Accurate daily and monthly bill estimations." },
              { icon: <Globe className="h-5 w-5 text-primary" />, title: "Grid Monitoring", desc: "Real-time grid stress tracking and advisory." },
              { icon: <Brain className="h-5 w-5 text-primary" />, title: "AI Assistant", desc: "Conversational chatbot for energy guidance." },
            ].map((item, i) => (
              <div key={i} className="card-gradient rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <SectionTitle icon={<Leaf />} title="Impact & Benefits" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10–20%", label: "Potential Savings", color: "text-savings" },
              { value: "↓ CO₂", label: "Carbon Footprint", color: "text-savings" },
              { value: "Stable", label: "Grid Health", color: "text-primary" },
              { value: "∞ Scale", label: "Homes & Industries", color: "text-primary" },
            ].map((item, i) => (
              <div key={i} className="card-gradient rounded-xl border border-border p-5 text-center hover:border-savings/30 transition-colors">
                <p className={`text-2xl font-bold font-mono ${item.color} mb-1`}>{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="mb-12">
          <SectionTitle icon={<Globe />} title="Future Roadmap" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Wifi className="h-5 w-5 text-primary" />, title: "Smart Meter Integration", desc: "Direct connection with smart meters for real-time data." },
              { icon: <Building className="h-5 w-5 text-primary" />, title: "IoT Automation", desc: "Automated control of appliances based on AI recommendations." },
              { icon: <Smartphone className="h-5 w-5 text-primary" />, title: "Mobile App", desc: "Native mobile apps for iOS and Android platforms." },
              { icon: <Shield className="h-5 w-5 text-primary" />, title: "Utility Provider Integration", desc: "Partnership APIs for direct utility company integration." },
            ].map((item, i) => (
              <div key={i} className="card-gradient rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <EnergyChatbot />
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
    <h2 className="text-xl font-bold text-foreground">{title}</h2>
  </div>
);

export default About;
