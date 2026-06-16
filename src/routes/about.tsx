import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import collection from "@/assets/collection.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KINK Tashkent" },
      { name: "description", content: "KINK is Tashkent's largest sneaker store. Learn about our shop, our team, and what we stand for." },
      { property: "og:title", content: "About KINK Tashkent" },
      { property: "og:description", content: "Tashkent's largest sneaker store on Parkent 283." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">▌ About</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.9] tracking-tight text-foreground md:text-9xl">
            A shop built<br />for the city.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <img
              src={collection}
              alt="Sneaker collection on dark concrete"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full border border-border object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
              The largest sneaker shop in Tashkent.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              KINK opened on Parkent street to give the city a real sneaker
              destination — a place where you don't browse online for hours, you
              walk in and see the pair in front of you.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We carry the icons (Air Force, Dunk, Samba, 550), the every-season
              workhorses, and the harder-to-find pairs. Our team will help you
              find the right size, talk you out of the wrong pair, and tell you
              when something better is dropping next week.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { n: "01", title: "Real stock", body: "Every pair on the floor is in the back in your size. No bait listings." },
              { n: "02", title: "14-day exchange", body: "Didn't fit, didn't vibe? Bring it back unworn within 14 days." },
              { n: "03", title: "30-day warranty", body: "Factory defects covered for 30 days. We stand behind what we sell." },
            ].map((b) => (
              <div key={b.n} className="border border-border bg-card p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">// {b.n}</p>
                <h3 className="mt-4 font-display text-3xl text-foreground">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
