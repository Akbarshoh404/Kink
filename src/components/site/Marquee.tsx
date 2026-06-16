const items = ["Nike", "Adidas", "Jordan", "New Balance", "Yeezy", "Asics", "Puma", "Vans", "Converse", "Reebok"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-6">
      <div className="flex w-max marquee gap-12">
        {row.map((b, i) => (
          <span
            key={i}
            className="font-display text-4xl uppercase tracking-tight text-foreground md:text-6xl"
          >
            {b} <span className="text-primary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
