import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Poppins, Open_Sans } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'Landscaping Services | Transform Your Outdoor Space',
  description: 'Professional landscaping services to bring your vision to life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}