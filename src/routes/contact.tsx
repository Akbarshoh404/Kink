import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Send, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — KINK Tashkent" }] }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="border-b border-border px-4 py-12 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">KINK · Tashkent</p>
            <h1 className="mt-2 font-display text-7xl leading-none text-foreground md:text-9xl">{t("contact_title")}</h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="divide-y divide-border">
                {[
                  { icon: <Phone size={15} />, label: t("contact_phone_label"), value: "+998 90 924 87 61", href: "tel:+998909248761" },
                  { icon: <Send size={15} />, label: t("contact_telegram"), value: "t.me/+Sge_eceqOK5xsZtn", href: "https://t.me/+Sge_eceqOK5xsZtn" },
                  { icon: <MapPin size={15} />, label: t("contact_address_label"), value: "Parkent ko'chasi 283, Tashkent", href: "https://maps.google.com/?q=Parkent+283+Tashkent" },
                  { icon: <Clock size={15} />, label: t("contact_hours_label"), value: "11:00 – 22:00", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-4">
                    <span className="shrink-0 text-muted-foreground">{item.icon}</span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="mt-0.5 block text-[14px] text-foreground transition-colors hover:text-muted-foreground"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[14px] text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t("contact_quick")}</p>
                <div className="space-y-2">
                  {[
                    t("contact_q1"),
                    t("contact_q2"),
                    t("contact_q3"),
                    t("contact_q4"),
                  ].map((q) => (
                    <a
                      key={q}
                      href="tel:+998909248761"
                      className="block border-b border-border/40 pb-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {q} →
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <h2 className="mb-6 font-display text-4xl leading-none text-foreground">{t("contact_message")}</h2>
              {[
                { label: t("contact_name"), type: "text", placeholder: "Amir T." },
                { label: t("contact_phone"), type: "text", placeholder: "+998 90 000 00 00" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("contact_message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("contact_message_placeholder")}
                  className="w-full resize-none border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-opacity hover:opacity-90"
              >
                {t("contact_send")}
              </button>
              <p className="text-center font-mono text-[10px] text-muted-foreground">
                {t("contact_or_call")}{" "}
                <a href="tel:+998909248761" className="text-foreground hover:underline">+998 90 924 87 61</a>
              </p>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
