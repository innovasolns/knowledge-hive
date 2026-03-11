import Link from 'next/link';
import { COMMUNITY_PRICE, MEMBERSHIP_INCLUDES, COMMUNITY_LEARNING_URL } from '@/constants';
import { faqJsonLd } from '@/lib/seo';

export const metadata = {
  title: 'Help Center',
  description: 'FAQ: courses, community access, billing, and support. Get help with Knowledge Hive membership and learning platform.',
};

const faqs = [
  {
    q: 'What do I get when I join?',
    a: `${MEMBERSHIP_INCLUDES} You can browse and take all courses at your own pace and participate in the private community—discussions, networking, and support from fellow creators and entrepreneurs. There are no tiers; one price includes everything.`,
  },
  {
    q: 'How much does it cost?',
    a: `Membership is $${COMMUNITY_PRICE} per month. You can cancel anytime. There are no long-term contracts or hidden fees.`,
  },
  {
    q: 'How do I access the courses and community after I join?',
    a: 'After you complete payment, you’ll get access to our learning platform. You can go there directly via the "Go to Community" link in the navigation (for existing members). All courses and community features live in one place.',
  },
  {
    q: 'I paid but I can’t log in. What should I do?',
    a: 'Check the email you used at signup for a welcome or login link from our platform. If you don’t see it, check spam. If you still can’t access your account, contact us with the email you used and we’ll sort it out.',
  },
  {
    q: 'How do I cancel?',
    a: 'You can cancel your subscription through the same flow you used to sign up (e.g. the payment provider’s customer portal or account page). If you need help finding it, contact us and we’ll point you in the right direction. There are no cancellation fees.',
  },
  {
    q: 'Are the courses self-paced?',
    a: 'Yes. All courses are on-demand and self-paced. You can start and finish them on your own schedule. The community is available whenever you need questions answered or want to connect with others.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We handle refund requests case by case. If you’re unhappy in the first few days, reach out and we’ll work with you. Our goal is to make the Hive useful—not to lock you in unfairly.',
  },
  {
    q: 'I have a question that isn’t answered here.',
    a: 'No problem. Use our contact form to get in touch. If you’re already a member, you can also ask in the community—other members and our team check in regularly.',
  },
];

export default function HelpPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <header className="border-b border-primary/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
            Help Center
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Answers to common questions about courses, community access, and billing. Can’t find what you need? We’re here to help.
          </p>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-white [font-family:var(--font-montserrat)]">
            Frequently asked questions
          </h2>
          <dl className="space-y-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-primary/10 pb-10 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold text-white mb-3">{faq.q}</dt>
                <dd className="text-slate-400 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30 border-t border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4 text-white [font-family:var(--font-montserrat)]">
            Still need help?
          </h2>
          <p className="text-slate-400 mb-8">
            Reach out and we’ll get back to you as soon as we can.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all [font-family:var(--font-montserrat)]"
            >
              Contact us
              <span className="material-icons">arrow_forward</span>
            </Link>
            <a
              href={COMMUNITY_LEARNING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-primary/20 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all"
            >
              Go to Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
