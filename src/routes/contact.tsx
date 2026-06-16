import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours — KINK Tashkent" },
      { name: "description", content: "Visit KINK at Parkent 283, Tashkent. Open daily 11:00–22:00. Call +998 90 924 87 61." },
      { property: "og:title", content: "Contact KINK Tashkent" },
      { property: "og:description", content: "Parkent 283, Tashkent. Daily 11:00–22:00." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">▌ Contact</p>
          <h1 className="mt-4 font-display text-6xl tracking-tight text-foreground md:text-9xl">
            Come thru.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Address</h2>
              <p className="mt-3 font-display text-3xl text-foreground md:text-4xl">
                Parkent ko'chasi 283<br />Tashkent, Uzbekistan
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Hours</h2>
              <p className="mt-3 font-display text-3xl text-primary md:text-4xl">
                11:00 — 22:00
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">Open every day</p>
            </div>
            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Reach us</h2>
              <a href="tel:+998909248761" className="block font-display text-2xl text-foreground hover:text-primary">
                +998 90 924 87 61
              </a>
              <a href="https://t.me/+Sge_eceqOK5xsZtn" target="_blank" rel="noreferrer" className="block font-display text-2xl text-foreground hover:text-primary">
                Telegram →
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block font-display text-2xl text-foreground hover:text-primary">
                Instagram →
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="aspect-square w-full overflow-hidden border border-border bg-card">
              <iframe
                title="Kink store map"
                src="https://www.google.com/maps?q=Parkent+283,+Tashkent&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Parkent+283,+Tashkent"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground"
            >
              Get directions →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
