import { createFileRoute } from "@tanstack/react-router";
import { useWishlistStore } from "@/store/wishlistStore";
import { getProductById } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/wishlist")({
  component: WishlistPage,
});

function WishlistPage() {
  const { ids } = useWishlistStore();
  const wishlistProducts = ids.map((id) => getProductById(id)).filter(Boolean) as ReturnType<typeof getProductById>[];

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Saved Pieces</p>
        <h1 className="mt-1 font-display text-5xl text-foreground">Wishlist</h1>
        <p className="mt-1 text-sm text-muted-foreground">{ids.length} items</p>
      </div>

      {ids.length === 0 ? (
        <div className="py-16 text-center border border-border">
          <p className="font-display text-4xl text-muted-foreground">Nothing saved yet.</p>
          <Link to="/shop" className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest underline text-foreground">
            Explore the Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {wishlistProducts.filter(Boolean).map((p, i) => (
            <ProductCard key={p!.id} product={p!} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
