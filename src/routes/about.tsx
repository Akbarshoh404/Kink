import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "react-i18next";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — KINK Tashkent" }] }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[55vh] overflow-hidden">
          <img
            src={storeInterior}
            alt="KINK Store"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/90" />
          <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-16 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">Parkent 283, Tashkent</p>
              <h1 className="mt-2 font-display text-7xl leading-none text-foreground md:text-9xl">{t("about_title")}</h1>
            </motion.div>
          </div>
        </section>

        {/* About text */}
        <section className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-[16px] leading-[1.85] text-muted-foreground"
            >
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </motion.div>
          </div>
        </section>

        {/* Store info grid */}
        <section className="border-t border-border px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { label: t("about_location"), value: "Parkent ko'chasi 283", sub: "Tashkent, Uzbekistan" },
                { label: t("about_hours"), value: t("about_hours_val"), sub: t("about_hours_sub") },
                { label: t("about_contact"), value: "+998 90 924 87 61", sub: t("about_contact_sub") },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="border-t-2 border-border pt-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 font-display text-4xl leading-tight text-foreground">{item.value}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="border-t border-border px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 font-display text-5xl leading-none text-foreground md:text-6xl">{t("about_policies")}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { title: t("about_exchange"), body: t("about_exchange_body") },
                { title: t("about_warranty"), body: t("about_warranty_body") },
                { title: t("about_authenticity"), body: t("about_authenticity_body") },
                { title: t("about_sizing"), body: t("about_sizing_body") },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="border border-border bg-card p-6"
                >
                  <h3 className="font-display text-3xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
