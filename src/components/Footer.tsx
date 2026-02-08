import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-inner section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground font-heading">A</span>
              </div>
              <span className="text-lg font-bold font-heading tracking-tight">
                Akaxy Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              We build fast, secure, and search-optimized websites for businesses that care about quality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Pages</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Contact</h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href="mailto:hello@akaxysolutions.com" className="transition-opacity hover:opacity-100">
                hello@akaxysolutions.com
              </a>
              <span>Based remotely — serving clients worldwide</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Akaxy Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
