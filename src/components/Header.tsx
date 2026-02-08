import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-inner flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Akaxy Solutions Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-heading">A</span>
          </div>
          <span className="text-lg font-bold text-foreground font-heading tracking-tight">
            Akaxy<span className="text-accent"> Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant="nav"
                size="sm"
                className={location.pathname === item.href ? "text-accent" : ""}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <Button variant="accent" size="sm">
              Get a Free Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container-inner flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <Button
                  variant="nav"
                  size="default"
                  className={`w-full justify-start ${location.pathname === item.href ? "text-accent" : ""}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2">
              <Button variant="accent" className="w-full">
                Get a Free Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
