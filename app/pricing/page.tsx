'use client';

import { COMMUNITY_PRICE, COMMUNITY_PAYMENT_URL, MEMBERSHIP_INCLUDES } from '@/constants';

export default function PricingPage() {
  const hasPaymentLink = Boolean(COMMUNITY_PAYMENT_URL);

  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="pt-10 pb-12 px-6 text-center border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white [font-family:var(--font-montserrat)]">
            Join the Hive
          </h1>
          <p className="text-lg text-primary-muted max-w-xl mx-auto mb-2">
            ${COMMUNITY_PRICE}/month. {MEMBERSHIP_INCLUDES} Cancel anytime.
          </p>
        </div>
      </header>

      <section className="max-w-md mx-auto px-6 -mt-6 mb-24">
        <div className="bg-surface border-2 border-primary/20 rounded-2xl p-10 shadow-gold-glow text-center hover:border-primary/40 transition-all">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-icons text-sm">groups</span>
            One membership
          </div>
          <p className="text-slate-300 text-sm mb-4">{MEMBERSHIP_INCLUDES}</p>
          <p className="text-6xl font-extrabold text-primary mb-2 [font-family:var(--font-montserrat)]">
            ${COMMUNITY_PRICE}
          </p>
          <p className="text-slate-400 text-sm mb-8">/ month</p>
          <ul className="space-y-3 mb-8 text-left text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Full course library access
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Private community &amp; networking
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Cancel anytime
            </li>
          </ul>
          {hasPaymentLink ? (
            <a
              href={COMMUNITY_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all [font-family:var(--font-montserrat)]"
            >
              Join for ${COMMUNITY_PRICE}/month
            </a>
          ) : (
            <p className="text-sm text-slate-400 py-4">
              Add <code className="bg-white/10 text-primary-muted px-1 rounded">NEXT_PUBLIC_COMMUNITY_PAYMENT_URL</code> to .env.local
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
