import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react";

const PageHero = () => (
  <section className="container-outer bg-card border-b border-border">
    <div className="container-inner py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground font-heading md:text-5xl">
          About Akaxy Solutions
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A small digital studio focused on building websites that are fast, honest, and built to last.
        </p>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="container-outer section-padding">
    <div className="container-inner">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
            Our Mission
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We started Akaxy Solutions because too many small businesses were getting overcharged for underwhelming websites. Our mission is simple: deliver quality digital work at fair prices, with clear communication throughout.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What we value
          </h3>
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Clarity over complexity",
                desc: "We keep things straightforward — in our designs, our code, and our communication.",
              },
              {
                icon: Lightbulb,
                title: "Results over decoration",
                desc: "A website should help your business grow, not just look pretty. We optimize for outcomes.",
              },
              {
                icon: Users,
                title: "Partnership over transactions",
                desc: "We work with you, not just for you. Your input shapes the final product.",
              },
            ].map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-subtle">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="container-outer section-alt section-padding">
    <div className="container-inner">
      <div className="mb-14 max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
          Why work with us
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're not the biggest agency. That's the point.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Direct communication",
            desc: "You talk to the people doing the work. No account managers, no telephone game.",
          },
          {
            title: "Honest timelines",
            desc: "We tell you how long it'll take and stick to it. If something changes, you'll know right away.",
          },
          {
            title: "No lock-in",
            desc: "Your site, your content, your code. We build on platforms you own and can take anywhere.",
          },
        ].map((point) => (
          <div key={point.title} className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground font-heading">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="container-outer section-padding">
    <div className="container-inner">
      <div className="grid gap-12 items-center md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
            The team
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We're a small, focused team of designers and developers. Everyone here has hands-on experience building real websites for real businesses — not just portfolio experiments.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We stay small on purpose. It means every project gets our full attention, and every client gets a direct line to the people doing the work.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {[
              { role: "Development", initials: "AK" },
              { role: "Design", initials: "DS" },
              { role: "SEO", initials: "MR" },
              { role: "Strategy", initials: "JL" },
            ].map((member) => (
              <div key={member.role} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <span className="text-sm font-semibold text-foreground font-heading">{member.initials}</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <Layout>
      <PageHero />
      <MissionSection />
      <WhyChooseUs />
      <TeamSection />
      <section className="container-outer bg-primary">
        <div className="container-inner py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold text-primary-foreground font-heading md:text-3xl">
            Let's build something together.
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Tell us about your project and we'll share how we can help.
          </p>
          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="accent" size="lg">
              Contact Us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
