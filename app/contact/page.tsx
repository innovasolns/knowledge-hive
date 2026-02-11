import Link from 'next/link';
import { COMMUNITY_LEARNING_URL, MEMBERSHIP_INCLUDES } from '@/constants';

export const metadata = {
  title: 'Contact Us | Knowledge Hive',
  description: 'Get in touch with Knowledge Hive—membership, teams, scholarships, and support.',
};

export default function ContactPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="border-b border-primary/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
            Contact Us
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Questions about membership, courses, the community, team plans, or scholarships? Reach out and we’ll get back to you as soon as we can.
          </p>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            How to reach us
          </h2>
          <div className="space-y-8 text-slate-400">
            <div>
              <h3 className="text-primary font-semibold mb-2">General inquiries</h3>
              <p className="leading-relaxed">
                For questions about what’s included ({MEMBERSHIP_INCLUDES.toLowerCase()}), billing, or access, send us a message using your preferred method below. We typically respond within 1–2 business days.
              </p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Team and organization plans</h3>
              <p className="leading-relaxed">
                If you’re interested in group access for your team or company, mention “Team plan” or “For teams” in your message and we’ll follow up with options and pricing.
              </p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Scholarships</h3>
              <p className="leading-relaxed">
                To apply for a scholarship spot, mention “Scholarship” in your message and include a brief note on why you’d like to join and how you plan to use the Hive. We review applications in batches and will reply either way.
              </p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Already a member?</h3>
              <p className="leading-relaxed">
                If you’re already in the Hive, you can often get faster answers by asking in the community. Other members and our team check in regularly. You can access the community from the main site (e.g. “Go to Community” in the nav when logged in) or directly at the link below.
              </p>
              <a
                href={COMMUNITY_LEARNING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-primary font-medium hover:underline"
              >
                Go to Community
                <span className="material-icons text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30 border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            Send a message
          </h2>
          <p className="text-slate-400 mb-8">
            We don’t use a contact form on this site yet—to avoid spam and keep things simple. Please email us at the address you received in your welcome or receipt email, or reach out through the same channel you used to join (e.g. the platform’s support or message feature). If you’re not yet a member and don’t have a contact point, you can still reach us through the support or contact option on our learning platform (linked above as “Go to Community”—there’s often a way to message or request support from the login or help area).
          </p>
          <p className="text-slate-500 text-sm">
            We’re a small team and prioritize member support. If you’ve already joined and need help logging in or accessing content, mention that and we’ll make sure you get sorted quickly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Visit the Help Center
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Join the Hive
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
