import Services from '@/components/Services';

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
