import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-maxw mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-sm">
          Designed &amp; built by Timothy Gaius
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-text-dim hover:text-accent transition-colors text-sm">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/timothy-gaius-odhiambo-a36011346" target="_blank" rel="noopener" className="text-text-dim hover:text-accent transition-colors text-sm">
            LinkedIn
          </Link>
          <Link href="mailto:your.email@example.com" className="text-text-dim hover:text-accent transition-colors text-sm">
            Email
          </Link>
        </div>
        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} Tim Gaius. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
