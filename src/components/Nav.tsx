import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
        Canuck Green Spaces.
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-700 hover:text-primary">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}