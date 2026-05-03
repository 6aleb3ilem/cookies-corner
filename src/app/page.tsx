import BakerSection from '@/components/BakerSection';
import FeatureBadges from '@/components/FeatureBadges';
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
        <MenuGrid />
        <BakerSection />
        <PoemBlock />
        <GiftingContact />
      </main>
      <Footer />
    </>
  );
}
