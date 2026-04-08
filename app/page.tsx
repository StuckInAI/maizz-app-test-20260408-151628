import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TopRestaurants from '@/components/TopRestaurants';
import DealsOffers from '@/components/DealsOffers';
import Categories from '@/components/Categories';
import RestaurantSections from '@/components/RestaurantSections';
import AppPromotion from '@/components/AppPromotion';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TopRestaurants />
      <DealsOffers />
      <Categories />
      <RestaurantSections />
      <AppPromotion />
      <Footer />
    </main>
  );
}
