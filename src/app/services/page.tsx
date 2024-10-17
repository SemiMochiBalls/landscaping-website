// src/app/services/page.tsx

import Services from '@/components/Services';
import Footer from '@/components/Footer'; // Assuming you have a Footer component

export const metadata = {
  title: 'Our Services | Landscaping Co.',
  description: 'Explore the services we offer.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Services />
      </main>
    </div>
  );
}
