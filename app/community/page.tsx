import { COMMUNITY_PRICE, COMMUNITY_PAYMENT_URL, COMMUNITY_LEARNING_URL, MEMBERSHIP_INCLUDES } from '@/constants';

export const metadata = {
  title: 'Join the Community | Knowledge Hive',
  description: `Access the Knowledge Hive community for $${COMMUNITY_PRICE}/month. Connect with creators and entrepreneurs.`,
};

export default function CommunityPage() {
  const hasPaymentLink = Boolean(COMMUNITY_PAYMENT_URL);

  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-8">
          <span className="material-icons text-sm">groups</span>
          Community Access
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white [font-family:var(--font-montserrat)]">
          Join the <span className="text-primary">Hive</span> for ${COMMUNITY_PRICE}/month
        </h1>
        <p className="text-lg text-slate-400 mb-10">
          {MEMBERSHIP_INCLUDES} Discussions, networking, and support from fellow creators and entrepreneurs. Cancel anytime.
        </p>

        {hasPaymentLink ? (
          <a
            href={COMMUNITY_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all [font-family:var(--font-montserrat)]"
          >
            Join for ${COMMUNITY_PRICE}/month
            <span className="material-icons">arrow_forward</span>
          </a>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-primary/20 bg-surface p-8 text-left">
            <p className="text-slate-400 mb-4">
              <strong className="text-white">Payment link not configured.</strong> Add your payment URL to enable the button:
            </p>
            <p className="font-mono text-sm bg-navy-deep text-primary p-3 rounded-lg break-all">
              NEXT_PUBLIC_COMMUNITY_PAYMENT_URL=https://your-payment-link.com
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Put this in <code className="bg-white/10 text-primary-muted px-1 rounded">.env.local</code> and restart the dev server.
            </p>
          </div>
        )}

        <p className="mt-10 text-sm text-slate-500">
          Already have access?{' '}
          <a href={COMMUNITY_LEARNING_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            Go to Community
          </a>
        </p>
      </section>
    </div>
  );
}
