'use client';

import Link from 'next/link';
import { COMMUNITY_LEARNING_URL } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-primary/10 pt-20 pb-10 text-primary-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg shadow-gold-glow">
                <span className="material-icons text-navy-deep text-sm">hive</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary [font-family:var(--font-montserrat)]">
                KNOWLEDGE <span className="text-white">HIVE</span>
              </span>
            </div>
            <p className="max-w-xs mb-8 text-slate-400">
              Where ideas turn into action. Courses and community for creators and entrepreneurs.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <i className="material-icons text-sm">public</i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <i className="material-icons text-sm">share</i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <i className="material-icons text-sm">videocam</i>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 uppercase tracking-wider text-xs">Platform</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link href="/for-teams" className="hover:text-primary transition-colors">
                  For Teams
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-primary transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 uppercase tracking-wider text-xs">Support</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href={COMMUNITY_LEARNING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 uppercase tracking-wider text-xs">Legal</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/legal/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-primary transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Knowledge Hive. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="material-icons text-[12px] text-primary">
                circle
              </span>{' '}
              System Operational
            </span>
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
