import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuHighlights from "@/components/MenuHighlights";
import DeliveryZones from "@/components/DeliveryZones";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import DeliveryBanner from "@/components/DeliveryBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Story />
      <MenuHighlights />
      <DeliveryZones />
      <Gallery />
      <Contact />
      <DeliveryBanner />
      <Footer />
    </main>
  );
}
