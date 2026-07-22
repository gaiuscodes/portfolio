import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function NotFound() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <p className="text-text-dim text-lg mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
