import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Code, Palette, BarChart3, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const PageHero = () => (
  <section className="container-outer bg-card border-b border-border">
    <div className="container-inner py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground font-heading md:text-5xl">
          Our Services
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          We focus on three things and do them well. Each service is designed to help your business show up online the way it deserves.
        </p>
      </div>
    </div>
  </section>
);

interface ServiceBlockProps {
  icon: React.ElementType;
  title: string;
  description: string;
  includes: string[];
  forWho: string;
}

const ServiceBlock = ({ icon: Icon, title, description, includes, forWho }: ServiceBlockProps) => (
  <div className="grid gap-8 md:grid-cols-5">
    <div className="md:col-span-2">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-subtle">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h2 className="text-2xl font-bold text-foreground font-heading">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
    </div>
    <div className="md:col-span-3">
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">What's included</h3>
          <ul className="space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Best for</h3>
          <p className="text-sm text-foreground">{forWho}</p>
        </div>
      </div>
    </div>
  </div>
);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a typical project take?",
      answer: "Most WordPress projects take 2–4 weeks from kickoff to launch, depending on scope. We'll give you a clear timeline before starting.",
    },
    {
      question: "Do you work with existing WordPress sites?",
      answer: "Yes. We can redesign, optimize, or fix existing sites. We'll audit what you have and recommend the best path forward.",
    },
    {
      question: "What do you need from me to get started?",
      answer: "Just a clear idea of what your business does and what you want the site to achieve. We handle the rest — content guidance, design, and development.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "We provide a handoff guide and 30 days of post-launch support. For ongoing maintenance, we can discuss a retainer arrangement.",
    },
  ];

  return (
    <section className="container-outer section-padding">
      <div className="container-inner">
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl space-y-0 divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: ServiceBlockProps[] = [
    {
      icon: Code,
      title: "WordPress Website Development",
      description: "We build WordPress sites from the ground up using Elementor and clean development practices. Every site is fast-loading, mobile-friendly, and easy for you to update.",
      includes: [
        "Custom Elementor page designs",
        "Responsive layout for all devices",
        "Contact form setup",
        "Basic on-page SEO configuration",
        "Performance optimization",
        "Content upload and formatting",
      ],
      forWho: "Small businesses, freelancers, and startups who need a professional web presence without the enterprise price tag.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clear, purposeful design that helps your visitors understand what you do and take action. We focus on usability over decoration.",
      includes: [
        "Wireframes and layout planning",
        "Visual design mockups",
        "Mobile-first responsive design",
        "Typography and color system",
        "Interactive prototype (on request)",
        "Design handoff documentation",
      ],
      forWho: "Businesses looking to improve conversion rates, redesign an outdated site, or launch a new brand with a strong digital identity.",
    },
    {
      icon: BarChart3,
      title: "SEO & Performance Optimization",
      description: "Technical SEO setup and site speed improvements that give you a real advantage in search results. We don't promise magic — we deliver measurable improvements.",
      includes: [
        "Technical SEO audit",
        "Page speed optimization",
        "Image compression and lazy loading",
        "Schema markup implementation",
        "Meta tag and heading structure",
        "Core Web Vitals improvements",
      ],
      forWho: "Businesses with existing sites that load slowly, don't rank well, or need a technical foundation before investing in content marketing.",
    },
  ];

  return (
    <Layout>
      <PageHero />
      <section className="container-outer section-padding">
        <div className="container-inner space-y-20">
          {services.map((service) => (
            <ServiceBlock key={service.title} {...service} />
          ))}
        </div>
      </section>
      <FAQSection />
      <section className="container-outer bg-primary">
        <div className="container-inner py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold text-primary-foreground font-heading md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Tell us what you need and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="accent" size="lg">
              Get in Touch
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
