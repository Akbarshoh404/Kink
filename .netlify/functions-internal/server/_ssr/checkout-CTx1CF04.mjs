import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { u as useCartStore, f as formatPrice } from "./router-Emfjchtb.mjs";
import "../_libs/i18next.mjs";
import { k as ChevronLeft, L as Lock } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CheckoutPage() {
  const {
    items,
    getSubtotal,
    getTotal,
    promoDiscount,
    clearCart
  } = useCartStore();
  useNavigate();
  const [step, setStep] = reactExports.useState("shipping");
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: ""
  });
  const subtotal = getSubtotal();
  const total = getTotal();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "shipping") setStep("payment");
    else if (step === "payment") {
      clearCart();
      setStep("confirmation");
    }
  };
  const Field = ({
    label,
    name,
    placeholder,
    type = "text"
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, value: form[name], onChange: (e) => setForm((f) => ({
      ...f,
      [name]: e.target.value
    })), className: "w-full border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none", required: true })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 13 }),
        " Continue Shopping"
      ] }),
      step === "confirmation" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-md mx-auto text-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border border-border flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 13l4 4L19 7", stroke: "currentColor", strokeWidth: "1.5" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl text-foreground", children: "Order Placed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Thank you for your order. You'll receive a confirmation email shortly with tracking information." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-8 inline-block bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background", children: "Continue Shopping" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mb-10", children: ["Shipping", "Payment"].map((s, i) => {
            const isActive = s.toLowerCase() === step;
            const isPast = step === "payment" && i === 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-6 w-6 flex items-center justify-center border font-mono text-[10px] ${isActive || isPast ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground"}`, children: isPast ? "✓" : i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[11px] uppercase tracking-widest ${isActive ? "text-foreground" : "text-muted-foreground"}`, children: s }),
              i < 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground mx-2", children: "—" })
            ] }, s);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
            step === "shipping" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground", children: "Shipping Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", placeholder: "Sophia R." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "your@email.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", placeholder: "+998 90 000 00 00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", name: "address", placeholder: "12 Rue de la Paix" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", name: "city", placeholder: "Paris" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", name: "country", placeholder: "France" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Postal Code", name: "zip", placeholder: "75001" })
              ] })
            ] }),
            step === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground", children: "Payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name on Card", name: "nameOnCard", placeholder: "Sophia R." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Card Number", name: "cardNumber", placeholder: "1234 5678 9012 3456" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry", name: "expiry", placeholder: "MM / YY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVV", name: "cvv", placeholder: "•••" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 11 }),
                " All transactions are encrypted and secure."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity mt-4", children: step === "shipping" ? "Continue to Payment →" : "Place Order" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-24 lg:self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-foreground mb-6", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border border-border", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-12 bg-muted flex-shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground leading-tight", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-muted-foreground mt-0.5", children: [
                item.size,
                " · ",
                item.color
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] text-foreground mt-1", children: [
                formatPrice(item.price),
                " × ",
                item.quantity
              ] })
            ] })
          ] }, `${item.productId}-${item.size}`)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-[13px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: formatPrice(subtotal) })
            ] }),
            promoDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                "−",
                formatPrice(subtotal * promoDiscount)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "Complimentary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium text-foreground border-t border-border pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: formatPrice(total) })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CheckoutPage as component
};
