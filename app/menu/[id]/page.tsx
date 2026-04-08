import Navbar from '@/components/Navbar';
import MenuPage from '@/components/MenuPage';
import Footer from '@/components/Footer';

export default function RestaurantMenuPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Navbar />
      <MenuPage restaurantId={params.id} />
      <Footer />
    </main>
  );
}
