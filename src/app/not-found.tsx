// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold mb-6 text-red-600">Page Not Found</h1>
      <p className="text-xl mb-8">This page is under construction.</p>
      <Link href="/">
        <a className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}
