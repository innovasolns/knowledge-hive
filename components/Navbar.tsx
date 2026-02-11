'use client';

import Link from 'next/link';
import { COMMUNITY_LEARNING_URL } from '@/constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-gold-glow">
            <span className="material-icons text-navy-deep">hive</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary [font-family:var(--font-montserrat)]">
            KNOWLEDGE <span className="text-white">HIVE</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/courses"
            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            Community
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={COMMUNITY_LEARNING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-primary transition-colors hidden sm:inline"
            aria-label="Go to Community (existing members)"
          >
            Already a member? <span className="text-primary font-medium">Go to Community</span>
          </a>
          <Link
            href="/pricing"
            className="px-6 py-2.5 bg-primary text-navy-deep text-sm font-bold rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:-translate-y-0.5 transition-all [font-family:var(--font-montserrat)]"
          >
            Join for $5/mo
          </Link>
        </div>
      </div>
    </nav>
  );
}
