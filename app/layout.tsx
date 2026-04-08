import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maiz – Restaurant Discovery & Food Ordering',
  description: 'Discover restaurants, order food, and reserve tables with Maiz.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
