import Navbar from '@/components/Navbar';
import ReservationPage from '@/components/ReservationPage';
import Footer from '@/components/Footer';

export default function TableReservationPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Navbar />
      <ReservationPage restaurantId={params.id} />
      <Footer />
    </main>
  );
}
