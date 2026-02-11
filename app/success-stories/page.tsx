import Link from 'next/link';
import { COMMUNITY_PRICE } from '@/constants';

export const metadata = {
  title: 'Success Stories | Knowledge Hive',
  description: 'Stories from creators and entrepreneurs in the Knowledge Hive.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="border-b border-primary/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
            Success Stories
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Real results from creators and entrepreneurs who learned, connected, and grew inside the Hive. We’ll add more stories as members share them.
          </p>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-white [font-family:var(--font-montserrat)]">
            Why members stay
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Knowledge Hive isn’t just a course library—it’s a place where people apply what they learn and support each other. Members use the courses to level up in AI, marketing, sales, and operations, and they use the community to ask questions, share wins, and avoid costly mistakes. Here’s what that looks like in practice.
          </p>

          <div className="space-y-12">
            <article className="bg-surface/50 border border-primary/10 rounded-xl p-8">
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                “I’d been wasting money on random Facebook ads. The paid ads courses in the Hive gave me a clear funnel and targeting approach. I cut my cost per lead by about 40% in the first month and finally had a system I could hand off to a VA.”
              </p>
              <p className="text-primary font-semibold">— Member, e-commerce</p>
            </article>

            <article className="bg-surface/50 border border-primary/10 rounded-xl p-8">
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                “The ChatGPT and AI courses were exactly what I needed to stop doing everything manually. I use the community to double-check prompts and workflows—way faster than figuring it out alone. The $5/month paid for itself in the first week.”
              </p>
              <p className="text-primary font-semibold">— Member, content creator</p>
            </article>

            <article className="bg-surface/50 border border-primary/10 rounded-xl p-8">
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                “I’d never hired a VA before. The VA and operations courses plus the community Q&A gave me the confidence to hire and a simple onboarding process. I’m now offloading 10+ hours a week and my business is scaling without me burning out.”
              </p>
              <p className="text-primary font-semibold">— Member, agency owner</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30 border-t border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-white [font-family:var(--font-montserrat)]">
            Share your story
          </h2>
          <p className="text-slate-400 mb-8">
            Have a win you’d like to share? We’d love to feature it (with your permission). Tell us in the community or via the contact form.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all [font-family:var(--font-montserrat)]"
          >
            Join for ${COMMUNITY_PRICE}/mo
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
