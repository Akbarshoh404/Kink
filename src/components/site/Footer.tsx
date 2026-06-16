import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-6xl leading-none tracking-tight text-foreground md:text-7xl">
              KINK<span className="text-primary">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The largest sneaker store in Tashkent. Streetwear, hype releases, and everyday icons — under one roof.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Visit</h4>
            <p className="mt-3 text-sm text-foreground">
              Parkent ko'chasi 283<br />
              Tashkent, Uzbekistan
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-primary">
              11:00 — 22:00 · Daily
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Reach</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="tel:+998909248761" className="hover:text-primary">+998 90 924 87 61</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
              <li><a href="https://t.me/+Sge_eceqOK5xsZtn" target="_blank" rel="noreferrer" className="hover:text-primary">Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} KINK Store · All rights reserved
          </p>
          <div className="flex gap-6">
            <Link to="/shop" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">Shop</Link>
            <Link to="/about" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/contact" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
