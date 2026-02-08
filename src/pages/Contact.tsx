import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const PageHero = () => (
  <section className="container-outer bg-card border-b border-border">
    <div className="container-inner py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground font-heading md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Have a project in mind? Drop us a message and we'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-12 bg-card"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12 bg-card"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Your Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="bg-card resize-none"
        />
      </div>

      <Button type="submit" variant="accent" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

const ContactInfo = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold text-foreground font-heading">Contact Information</h2>
      <p className="mt-3 text-muted-foreground">
        Prefer to reach out directly? Here's how to find us.
      </p>
    </div>

    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-subtle">
          <Mail className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Email</h3>
          <a
            href="mailto:hello@akaxysolutions.com"
            className="mt-1 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            hello@akaxysolutions.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-subtle">
          <MapPin className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Location</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Remote — serving clients worldwide
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-subtle">
          <Clock className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Business Hours</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Mon – Fri: 9:00 AM – 6:00 PM (IST)
          </p>
          <p className="text-sm text-muted-foreground">
            Sat – Sun: Closed
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-xl border border-border bg-card p-6">
      <p className="text-sm font-medium text-foreground">Response time</p>
      <p className="mt-1 text-sm text-muted-foreground">
        We typically respond within 24 hours on business days. For urgent requests, mention it in your message.
      </p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <Layout>
      <PageHero />
      <section className="container-outer section-padding">
        <div className="container-inner">
          <div className="grid gap-16 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
