import Link from 'next/link';
import { COMMUNITY_PRICE, MEMBERSHIP_INCLUDES } from '@/constants';

export const metadata = {
  title: 'For Teams | Knowledge Hive',
  description: 'Knowledge Hive for teams and organizations—group access and shared learning.',
};

export default function ForTeamsPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="border-b border-primary/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
            Knowledge Hive for Teams
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Give your team or organization access to the full course library and community so everyone can learn, share, and grow together.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 bg-surface/30 border-b border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            Why teams choose the Hive
          </h2>
          <ul className="space-y-6 text-slate-300">
            <li className="flex gap-4">
              <span className="material-icons text-primary shrink-0">groups</span>
              <div>
                <strong className="text-white">One place for upskilling.</strong> Everyone gets access to the same courses—AI, marketing, sales, operations—so your team speaks the same language and uses the same playbooks.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="material-icons text-primary shrink-0">forum</span>
              <div>
                <strong className="text-white">Community plus internal alignment.</strong> Members can ask questions in the Hive community and bring answers back to your team, or use the platform as a shared learning hub for internal discussion.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="material-icons text-primary shrink-0">payments</span>
              <div>
                <strong className="text-white">Simple, predictable pricing.</strong> No per-seat surprises. We’re building team plans that scale with your size while keeping access affordable—details and custom quotes coming soon.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            What’s included (per member)
          </h2>
          <p className="text-slate-400 mb-6">
            Team members get the same experience as individual members:
          </p>
          <ul className="space-y-3 text-slate-300 mb-10">
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Full access to the course library (34+ courses across 12 categories)
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Private community access—discussions, networking, and peer support
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Self-paced learning; no mandatory schedules
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-primary text-lg">check_circle</span>
              Cancel or change seats as your team evolves
            </li>
          </ul>
          <p className="text-slate-500 text-sm">
            Team-specific features (e.g. admin dashboard, usage reports, bulk billing) are in development. We’re prioritizing small teams and agencies first.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30 border-t border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-white [font-family:var(--font-montserrat)]">
            Get your team on the list
          </h2>
          <p className="text-slate-400 mb-8">
            We’re rolling out team plans in phases. Tell us your team size and we’ll reach out with pricing and next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all [font-family:var(--font-montserrat)]"
          >
            Contact us for team pricing
            <span className="material-icons">arrow_forward</span>
          </Link>
          <p className="mt-8 text-slate-500 text-sm">
            In the meantime, individuals can <Link href="/pricing" className="text-primary hover:underline">join for ${COMMUNITY_PRICE}/mo</Link> and get {MEMBERSHIP_INCLUDES.toLowerCase()}
          </p>
        </div>
      </section>
    </div>
  );
}
