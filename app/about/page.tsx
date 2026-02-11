import Image from 'next/image';
import Link from 'next/link';
import { COURSES, IMAGES, COMMUNITY_PRICE } from '@/constants';

function getCategoryCount(courses: typeof COURSES): number {
  return new Set(courses.map((c) => c.category)).size;
}

export default function AboutPage() {
  const categoryCount = getCategoryCount(COURSES);

  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <header className="relative overflow-hidden pt-24 pb-32 hive-grid hive-grid-glow">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wide uppercase mb-6">
            About Knowledge Hive
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8 text-white [font-family:var(--font-montserrat)]">
            Where Ideas Turn <br />
            <span className="text-primary italic">Into Action.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-12">
            Knowledge Hive is a learning hub and community for creators and
            entrepreneurs. Access {COURSES.length}+ courses across AI, marketing,
            sales, and operations—plus a supportive community to ask questions,
            share resources, and grow together.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex -space-x-3">
              <Image
                src={IMAGES.avatar1}
                alt="Community member"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white dark:border-background-dark object-cover"
              />
              <Image
                src={IMAGES.avatar2}
                alt="Community member"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white dark:border-background-dark object-cover"
              />
              <Image
                src={IMAGES.avatar3}
                alt="Community member"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
              />
            </div>
            <span className="text-sm font-medium text-primary-muted">
              Join creators and entrepreneurs in the Hive
            </span>
          </div>
        </div>
      </header>

      {/* Why Knowledge Hive */}
      <section className="py-16 bg-navy-deep border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 text-white [font-family:var(--font-montserrat)]">
            Why Knowledge Hive
          </h2>
          <ul className="space-y-4 text-slate-300 text-left">
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary mt-0.5 shrink-0">check_circle</span>
              <span><strong className="text-white">Learn by doing.</strong> Courses are built by practitioners—you get tactics you can use right away, not theory.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary mt-0.5 shrink-0">check_circle</span>
              <span><strong className="text-white">One place for courses and community.</strong> Ask questions, share wins, and get feedback without juggling multiple platforms.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary mt-0.5 shrink-0">check_circle</span>
              <span><strong className="text-white">Simple, affordable access.</strong> One low monthly price for everything—no tiers or upsells.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Image
              src={IMAGES.dataNodes}
              alt="Connected learning and community"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-0"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white [font-family:var(--font-montserrat)]">
              Courses + Community, One Place
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Learning in isolation only goes so far. Knowledge Hive combines
              on-demand courses with an active community so you can get real
              answers, swap tactics, and apply what you learn with feedback from
              people on the same path.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <span className="block text-2xl font-bold text-primary">{COURSES.length}+</span>
                <span className="text-sm font-medium">Courses</span>
              </div>
              <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <span className="block text-2xl font-bold text-primary">{categoryCount}</span>
                <span className="text-sm font-medium">Categories</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Topics include AI & automation, paid ads, organic social, SEO,
              funnels, email marketing, virtual assistants, and more—all taught
              by practitioners focused on results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-deep border-t border-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white [font-family:var(--font-montserrat)]">What You Get</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              One membership: full access to the course library and the
              Knowledge Hive community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'menu_book',
                title: 'Course library',
                desc: 'Browse and take {COURSES.length}+ courses at your own pace, from AI and ChatGPT to Google Ads, TikTok, funnels, and local SEO.',
              },
              {
                icon: 'forum',
                title: 'Community access',
                desc: 'Join the Hive on our learning platform: ask questions, share wins, get feedback, and connect with other creators and entrepreneurs.',
              },
              {
                icon: 'payments',
                title: 'Simple pricing',
                desc: 'Affordable monthly access to everything—courses and community—so you can focus on learning and growing, not on subscription fatigue.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface p-8 rounded-xl shadow-sm border border-primary/10 relative group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-navy-deep transition-colors">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc.replace('{COURSES.length}', String(COURSES.length))}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-colors [font-family:var(--font-montserrat)]"
            >
              Join for ${COMMUNITY_PRICE}/mo
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
