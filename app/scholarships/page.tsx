import Link from 'next/link';
import { COMMUNITY_PRICE } from '@/constants';

export const metadata = {
  title: 'Scholarships | Knowledge Hive',
  description: 'Scholarship opportunities for Knowledge Hive—learn and grow with us.',
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="border-b border-primary/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
            Scholarships at Knowledge Hive
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We believe learning should be accessible. We offer a limited number of scholarship spots each quarter for creators and entrepreneurs who would benefit from the Hive but need financial support.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 bg-surface/30 border-b border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            What scholarship recipients get
          </h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary shrink-0 mt-0.5">check_circle</span>
              <span>Full access to the course library—all 34+ courses across AI, marketing, sales, SEO, and more.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary shrink-0 mt-0.5">check_circle</span>
              <span>Access to the private Knowledge Hive community: discussions, networking, and peer support.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary shrink-0 mt-0.5">check_circle</span>
              <span>Same experience as paying members; no separate “scholarship tier.”</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary shrink-0 mt-0.5">check_circle</span>
              <span>Scholarships are typically granted for 3–6 months, with the option to renew based on need and participation.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            Who we’re looking for
          </h2>
          <p className="text-slate-400 mb-6">
            We prioritize applicants who:
          </p>
          <ul className="space-y-3 text-slate-300 mb-10">
            <li>Are actively building a business, side project, or career as a creator or entrepreneur.</li>
            <li>Would clearly benefit from the courses and community but face financial barriers to joining at full price (${COMMUNITY_PRICE}/month).</li>
            <li>Are committed to participating in the community and applying what they learn.</li>
            <li>Can articulate how the Hive will help them reach a specific goal.</li>
          </ul>
          <p className="text-slate-500 text-sm">
            We don’t require proof of income or lengthy forms. A short application and a few sentences about your situation and goals are enough to get started.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30 border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            How to apply
          </h2>
          <ol className="space-y-6 text-slate-300 list-decimal list-inside">
            <li>
              <strong className="text-white">Submit an application.</strong> Use the contact form below and select or mention “Scholarship” in your message. Include your name, email, and a brief note on why you’d like a spot and how you plan to use the Hive.
            </li>
            <li>
              <strong className="text-white">We review in batches.</strong> We review applications periodically (usually every few weeks). You’ll hear back from us either way.
            </li>
            <li>
              <strong className="text-white">Get access.</strong> If you’re selected, we’ll send you an invite to join at no cost for the scholarship period. No payment info required.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 mb-8">
            Ready to apply or have questions about the scholarship program?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all [font-family:var(--font-montserrat)]"
          >
            Contact us / Apply for a scholarship
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
