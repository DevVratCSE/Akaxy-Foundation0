import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Code, Palette, BarChart3, ArrowRight, Zap, Shield, Gauge } from "lucide-react";

const HeroSection = () => (
  <section className="container-outer bg-card">
    <div className="container-inner py-20 md:py-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground font-heading md:text-5xl lg:text-6xl animate-fade-up">
          We build websites that
          <span className="text-gradient"> actually work.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Clean WordPress development, thoughtful design, and SEO that brings results. No fluff — just solid digital work for growing businesses.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get a Free Quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="hero-outline" size="lg">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => {
  const points = [
    { icon: Zap, text: "Fast delivery" },
    { icon: Gauge, text: "SEO-ready builds" },
    { icon: Shield, text: "Secure by default" },
  ];

  return (
    <section className="container-outer border-y border-border bg-secondary">
      <div className="container-inner py-6">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          {points.map((point) => (
            <div key={point.text} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <point.icon className="h-4 w-4 text-accent" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "WordPress Development",
      description:
        "Custom-built WordPress sites using modern tools like Elementor and clean code practices. Fast, responsive, and easy to manage.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-focused layouts that guide visitors toward action. We design for clarity, not complexity.",
    },
    {
      icon: BarChart3,
      title: "SEO & Performance",
      description:
        "Speed optimization, on-page SEO setup, and technical audits so your site actually gets found and loads fast.",
    },
  ];

  return (
    <section className="container-outer section-padding">
      <div className="container-inner">
        <div className="mb-14 max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading md:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three core services. Each one built around delivering clear results for your business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-subtle">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground font-heading">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We learn about your goals, audience, and brand. No cookie-cutter approach — every project starts with a real conversation.",
    },
    {
      number: "02",
      title: "Build",
      description: "Design and development happen in structured sprints. You get updates and can give feedback at every stage.",
    },
    {
      number: "03",
      title: "Launch",
      description: "After testing, we launch your site with optimized performance, SEO setup, and a handoff guide so you're never stuck.",
    },
  ];

  return (
    <section className="container-outer section-alt section-padding">
      <div className="container-inner">
        <div className="mb-14 max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading md:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A straightforward three-step process. No surprises, no scope creep.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-extrabold text-accent/15 font-heading">{step.number}</span>
              <h3 className="mt-2 text-xl font-semibold text-foreground font-heading">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="container-outer section-padding">
    <div className="container-inner">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading md:text-4xl">
            Built by people who care about craft.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Akaxy Solutions started because we saw too many businesses stuck with slow, bloated websites that didn't represent them. We keep things lean: small team, big attention to detail, honest communication.
          </p>
          <Link to="/about" className="mt-6 inline-block">
            <Button variant="hero-outline" size="default">
              Learn More About Us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-full max-w-sm rounded-2xl bg-secondary p-8 md:h-72">
            <div className="absolute inset-0 rounded-2xl border border-border" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                <span className="text-2xl font-bold text-accent-foreground font-heading">A</span>
              </div>
              <p className="text-sm font-medium text-foreground font-heading">Quality over quantity.</p>
              <p className="text-xs text-muted-foreground">Every project gets our full attention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="container-outer bg-primary">
    <div className="container-inner py-16 text-center md:py-20">
      <h2 className="text-2xl font-bold text-primary-foreground font-heading md:text-3xl">
        Ready to build something solid?
      </h2>
      <p className="mt-3 text-primary-foreground/70">
        Let's talk about your project. No pressure, no hard sell.
      </p>
      <Link to="/contact" className="mt-8 inline-block">
        <Button variant="accent" size="lg">
          Start a Conversation
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </section>
);

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <AboutPreview />
      <CTABanner />
    </Layout>
  );
};

export default Index;
