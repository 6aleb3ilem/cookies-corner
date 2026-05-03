import FeatureBadges from '@/components/FeatureBadges';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import GiftingContact from '@/components/GiftingContact';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuGrid from '@/components/MenuGrid';
import PoemBlock from '@/components/PoemBlock';
import StoriesStrip from '@/components/StoriesStrip';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto">
        <HeroSection />
        <FeatureBadges />
        <StoriesStrip />
        <FeaturedProducts />
        <MenuGrid />
        <PoemBlock />
        <GiftingContact />
      </main>
      <Footer />
    </>
  );
}
