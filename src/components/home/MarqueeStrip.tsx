const items = [
  "Nike · Adidas · Puma · Asics · Vans · New Balance · Converse · Jordan · KINK",
  "Free Exchange Within 14 Days",
  "Parkent ko'chasi 283, Tashkent · Open 11:00 – 22:00",
  "1 Month Warranty on Footwear",
  "Authentic Originals Only",
  "+998 90 924 87 61",
];

export function MarqueeStrip() {
  const repeated = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-3">
      <div className="marquee flex gap-0 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-mono text-[10px] uppercase tracking-[0.18em] text-background">
            {item}
            <span className="mx-8 opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
