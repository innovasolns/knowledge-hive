import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Knowledge Hive',
  description: 'Knowledge Hive terms of service and use.',
};

export default function TermsPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-8 text-white [font-family:var(--font-montserrat)]">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: [Date]. These terms govern your use of Knowledge Hive. By using our site and services, you agree to these terms. If you do not agree, do not use our services.
        </p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of terms</h2>
            <p>
              By accessing or using Knowledge Hive (“we,” “us,” “our”), including our website, courses, and community (collectively, the “Services”), you agree to be bound by these Terms of Service and our Privacy Policy. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Description of services</h2>
            <p>
              Knowledge Hive provides an online learning platform and community. Our services include access to courses, materials, and a private community for members. We may update, suspend, or discontinue parts of the Services with reasonable notice where feasible. Your membership entitles you to access the content and community as described at the time of purchase and as updated in our pricing and membership pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Account and membership</h2>
            <p>
              You must provide accurate information when creating an account and keep it up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must notify us promptly of any unauthorized use. Membership is personal to you unless we explicitly offer team or organizational plans; you may not share your login or redistribute course materials or access to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Payment and cancellation</h2>
            <p>
              Fees for membership are as stated on our pricing page. You authorize us (or our payment processor) to charge your chosen payment method on a recurring basis until you cancel. You may cancel at any time through the method provided (e.g. payment provider portal). Cancellation will take effect at the end of the current billing period; you will retain access until then. We do not provide refunds for partial periods except as required by law or at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Acceptable use</h2>
            <p>
              You agree to use the Services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Services. You may not: (a) copy, scrape, or redistribute course content or community posts in bulk; (b) use the Services to harass, spam, or harm others; (c) attempt to gain unauthorized access to our systems or other accounts; (d) use the Services for any illegal purpose. We may suspend or terminate your access if we believe you have violated these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Intellectual property</h2>
            <p>
              We (or our licensors) own all rights in the Services and in our content, including courses, design, and branding. We grant you a limited, non-exclusive, non-transferable license to access and use the Services for your personal (or organizational, if applicable) use in accordance with these terms. You do not acquire any ownership rights. User-generated content you post in the community remains yours; you grant us a license to use, display, and moderate it as needed to operate the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Disclaimers</h2>
            <p>
              The Services and content are provided “as is.” We do not guarantee that the Services will be uninterrupted, error-free, or that the content will meet your specific goals. Educational and community content is for general informational purposes; it is not professional advice (e.g. legal, financial, or medical). You use the Services at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Knowledge Hive and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the Services. Our total liability for any claims arising from or related to these terms or the Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to terms</h2>
            <p>
              We may update these terms from time to time. We will post the updated terms on this page and update the “Last updated” date. Material changes may be communicated by email or a notice in the Services. Your continued use after the effective date of changes constitutes acceptance. If you do not agree, you must cancel your membership and stop using the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. General</h2>
            <p>
              These terms constitute the entire agreement between you and Knowledge Hive regarding the Services. If any provision is held invalid, the remaining provisions remain in effect. Our failure to enforce a right does not waive that right. You may not assign these terms without our consent; we may assign them in connection with a merger or sale of assets. Governing law and dispute resolution will be specified in a final version of these terms (e.g. the laws of [State/Country] and exclusive jurisdiction in [courts]).
            </p>
          </section>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          This is a draft for reference. Have a lawyer review and adapt these terms to your jurisdiction and business before relying on them. For questions, see our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page or <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </article>
    </div>
  );
}
