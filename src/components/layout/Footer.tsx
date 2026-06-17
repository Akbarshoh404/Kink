import { Link } from "@tanstack/react-router";
import { Instagram, Send, MapPin, Clock, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const links = {
    [t("footer_shop")]: [
      { label: t("footer_new"), to: "/shop?tag=NEW" },
      { label: t("footer_hot"), to: "/shop?tag=HOT" },
      { label: t("footer_sale"), to: "/shop?tag=SALE" },
      { label: t("footer_all"), to: "/shop" },
    ],
    [t("footer_categories")]: [
      { label: t("footer_sneakers"), to: "/shop?category=Sneakers" },
      { label: t("footer_tshirts"), to: "/shop?subcategory=T-Shirts" },
      { label: t("footer_jeans"), to: "/shop?subcategory=Jeans" },
      { label: t("footer_accessories"), to: "/shop?category=Accessories" },
    ],
    [t("footer_care")]: [
      { label: t("footer_size_guide"), to: "/about" },
      { label: t("footer_returns"), to: "/about" },
      { label: t("footer_warranty"), to: "/about" },
      { label: t("footer_contact"), to: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-display text-4xl leading-none tracking-tight text-foreground">KINK</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Tashkent</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              {t("footer_tagline")}
            </p>
            <div className="mt-4 space-y-2 text-[12px] text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin size={12} className="shrink-0" />
                {t("footer_address")}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={12} className="shrink-0" />
                {t("footer_hours")}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={12} className="shrink-0" />
                <a href="tel:+998909248761" className="hover:text-foreground">+998 90 924 87 61</a>
              </p>
            </div>
            <div className="mt-5 flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram size={16} />
              </a>
              <a href="https://t.me/+Sge_eceqOK5xsZtn" target="_blank" rel="noreferrer" aria-label="Telegram"
                className="text-muted-foreground transition-colors hover:text-foreground">
                <Send size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to as "/"}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[11px] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} KINK Tashkent. {t("footer_rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
