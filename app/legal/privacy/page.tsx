import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Knowledge Hive',
  description: 'How Knowledge Hive collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-8 text-white [font-family:var(--font-montserrat)]">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: [Date]. This policy describes how Knowledge Hive (“we,” “us,” “our”) collects, uses, and protects your information when you use our website, courses, and community.
        </p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information we collect</h2>
            <p className="mb-4">
              We collect information you provide directly and information we get from your use of our services.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-slate-300">Account and profile:</strong> name, email address, and any profile or payment information you give when you sign up or update your account.</li>
              <li><strong className="text-slate-300">Payment:</strong> billing details are processed by our payment provider; we may receive limited transaction data (e.g. that a payment succeeded) but not full card numbers.</li>
              <li><strong className="text-slate-300">Community and usage:</strong> content you post in the community, course progress, and general usage data (e.g. pages visited, features used) to improve the service and troubleshoot issues.</li>
              <li><strong className="text-slate-300">Device and log data:</strong> IP address, browser type, and similar technical data when you access our site or platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How we use your information</h2>
            <p>
              We use the information we collect to: provide, maintain, and improve the Services; process payments and manage your membership; communicate with you (e.g. transactional emails, product updates, support); enforce our terms and protect against abuse; and comply with legal obligations. We may also use aggregated or de-identified data for analytics and product improvement. We do not sell your personal information to third parties for their marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Sharing your information</h2>
            <p>
              We may share your information with: (a) service providers who help us operate (e.g. hosting, payment processing, email), under contracts that limit their use; (b) other members in the community to the extent you post or interact in shared spaces; (c) legal or regulatory authorities when required by law or to protect our rights and safety; (d) a successor in the event of a merger or sale of assets, subject to the same privacy commitments. We do not share your personal information with third parties for their own marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. After you cancel, we may retain certain data for a limited period (e.g. for legal, accounting, or safety reasons) and then delete or anonymize it in accordance with our internal policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your information against unauthorized access, loss, or alteration. No system is completely secure; we cannot guarantee absolute security. You are responsible for keeping your account credentials safe and for notifying us of any suspected breach.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your rights and choices</h2>
            <p className="mb-4">
              Depending on where you live, you may have rights to: access, correct, or delete your personal information; object to or restrict certain processing; data portability; and withdraw consent where we rely on it. You can update account details in your profile and contact us to exercise other rights. You may also unsubscribe from marketing emails via the link in those emails. If you are in the European Economic Area or the UK, you may have the right to lodge a complaint with a supervisory authority.
            </p>
            <p>
              For cookie choices, see our <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Settings</Link> page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Children</h2>
            <p>
              The Services are not directed at children under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. International transfers</h2>
            <p>
              Your information may be processed in countries other than your own, including where data protection laws differ. We take steps to ensure your information receives an adequate level of protection (e.g. standard contractual clauses or other approved mechanisms where required).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the “Last updated” date. Material changes may be communicated by email or a notice in the Services. Your continued use after the effective date constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          This is a draft for reference. Have a lawyer review and adapt it to your jurisdiction and practices before publishing. For questions or to exercise your rights, see our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page or <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>.
        </p>
      </article>
    </div>
  );
}
