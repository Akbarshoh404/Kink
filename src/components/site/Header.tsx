import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-3xl leading-none tracking-tight text-foreground">KINK</span>
          <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:inline">Tashkent · Est.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-mono text-xs uppercase tracking-widest text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+998909248761"
          className="hidden bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          +998 90 924 87 61
        </a>
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-sm uppercase tracking-widest text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+998909248761"
              className="mt-2 bg-primary px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-primary-foreground"
            >
              Call us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
