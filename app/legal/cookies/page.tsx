import Link from 'next/link';

export const metadata = {
  title: 'Cookie Settings | Knowledge Hive',
  description: 'Cookie and tracking preferences for Knowledge Hive.',
};

export default function CookiesPage() {
  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-8 text-white [font-family:var(--font-montserrat)]">
          Cookie Settings
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          This page explains how we use cookies and similar technologies and how you can manage your preferences.
        </p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, keep you logged in, and understand how the site is used. We use cookies and similar technologies (e.g. local storage) only as needed to run Knowledge Hive and improve your experience—we do not use them for third-party advertising or extensive tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Types of cookies we use</h2>
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">Essential.</span>
                <span>Required for the site and platform to work (e.g. authentication, security, load balancing). You cannot turn these off without affecting functionality.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">Preference.</span>
                <span>Remember your settings (e.g. theme, language) so you don’t have to set them again. These are optional but improve your experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">Analytics.</span>
                <span>Help us understand how people use our site (e.g. which pages are visited, general traffic). We use this to improve the product. Where we use third-party analytics, we aim to minimize data shared and respect Do Not Track or similar signals where feasible.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Managing your preferences</h2>
            <p className="mb-4">
              You can control cookies in several ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li><strong className="text-slate-300">Browser settings:</strong> Most browsers let you block or delete cookies. Check your browser’s “Privacy” or “Security” settings. Note that blocking all cookies may prevent you from logging in or using certain features.</li>
              <li><strong className="text-slate-300">Do Not Track:</strong> Some browsers send a “Do Not Track” signal. We consider such signals where our analytics or partners support it.</li>
              <li><strong className="text-slate-300">Opt-out links:</strong> If we use third-party services that offer opt-out links (e.g. for analytics or advertising), we will list them here or in our Privacy Policy so you can opt out where available.</li>
            </ul>
            <p>
              Right now we do not offer an in-page “cookie banner” with granular toggles. We use a minimal set of cookies for essential and preference purposes. If we add optional analytics or marketing cookies in the future, we will provide a way to consent or opt out on this page and update our Privacy Policy accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Third-party services</h2>
            <p>
              Our site and learning platform may include or link to third-party services (e.g. payment providers, video hosting, or community tools). Those services may set their own cookies and have their own privacy policies. We encourage you to review their policies if you want to understand their use of cookies and data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Updates</h2>
            <p>
              We may update this page as our use of cookies changes. The “Last updated” date at the top will reflect the latest version. Continued use of the site after changes constitutes acceptance of the updated cookie practices.
            </p>
          </section>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          For more on how we use and protect your data, see our <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>. For questions, <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
      </article>
    </div>
  );
}
