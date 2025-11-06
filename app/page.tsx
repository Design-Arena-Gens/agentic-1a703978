import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import CollectionShowcase from "@/components/CollectionShowcase";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { featuredProducts } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductGrid products={featuredProducts} />
        <BrandStory />
        <CollectionShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
