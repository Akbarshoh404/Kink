import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { LimitedBanner } from "@/components/home/LimitedBanner";
import { ReviewsSection } from "@/components/home/ReviewsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KINK — Sneakers & Streetwear, Tashkent" },
      { name: "description", content: "Nike, Adidas, Puma, Asics, Vans, New Balance & KINK. Parkent ko'chasi 283, Tashkent. Open 11–22." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <MarqueeStrip />
        <FeaturedProducts />
        <BrandStory />
        <LimitedBanner />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
