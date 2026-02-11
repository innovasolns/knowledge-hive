import Link from 'next/link';
import Image from 'next/image';
import InstructorIllustration from '@/components/InstructorIllustration';
import { IMAGES, COMMUNITY_PRICE, MEMBERSHIP_INCLUDES } from '@/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden honeycomb-pattern hive-grid-glow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Join 12,000+ Entrepreneurs
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-white [font-family:var(--font-montserrat)]">
              Unlock <span className="text-primary">50+ Courses</span>. One
              Powerful Learning Hub.
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              The premium educational ecosystem designed for creators and
              entrepreneurs. Master AI, marketing, and leadership through
              curriculum developed by real-world practitioners.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 [font-family:var(--font-montserrat)]"
              >
                Join for ${COMMUNITY_PRICE}/mo
                <span className="material-icons">arrow_forward</span>
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 bg-surface border border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src={IMAGES.hero}
                alt="Learning hub: courses, ebooks, and community"
                width={600}
                height={600}
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-primary/10 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-primary-muted">
            Trusted by creators and entrepreneurs building in the Hive
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold mb-4 text-white [font-family:var(--font-montserrat)]">Master Every Skill</h2>
              <p className="text-slate-400 max-w-xl">
                From fundamental business principles to cutting-edge AI
                automation, choose your path to mastery.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-primary font-bold flex items-center gap-2 group"
            >
              View All 12 Categories
              <span className="material-icons group-hover:translate-x-1 transition-transform">
                east
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'psychology', title: 'AI & Automation', desc: 'Leverage machine learning to scale your operations.', count: '14 Courses' },
              { icon: 'campaign', title: 'Marketing', desc: 'Growth hacking and high-conversion brand strategies.', count: '18 Courses' },
              { icon: 'payments', title: 'Sales Mastery', desc: 'The psychology of persuasion and complex sales.', count: '12 Courses' },
              { icon: 'brush', title: 'UI/UX Design', desc: 'Crafting premium experiences that users love.', count: '9 Courses' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="group bg-surface p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-gold-glow transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-navy-deep transition-all">
                  <span className="material-icons">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{cat.desc}</p>
                <span className="text-xs font-bold text-primary-muted uppercase tracking-widest">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Offer Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-surface rounded-3xl p-8 md:p-16 overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight [font-family:var(--font-montserrat)]">
                  The &quot;Infinite Learner&quot; Membership
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited access to 50+ masterclasses',
                    'Weekly live Q&A with industry experts',
                    'Private community & networking',
                    'Resource library (Templates, Scripts, SOPs)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <span className="material-icons text-primary">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary-muted text-sm mb-6">
                  {MEMBERSHIP_INCLUDES}
                </p>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-4xl font-extrabold text-primary">$5</span>
                  <span className="text-slate-400">/ month</span>
                  <span className="ml-4 px-2 py-1 bg-primary/10 rounded text-[10px] uppercase font-bold tracking-widest text-primary">
                    Cancel Anytime
                  </span>
                </div>
                <Link
                  href="/pricing"
                  className="px-10 py-5 bg-primary text-navy-deep font-bold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all inline-block [font-family:var(--font-montserrat)]"
                >
                  Join for $5/mo
                </Link>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-primary/10">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={IMAGES.profile1}
                      alt="Testimonial User"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold">Marcus Chen</h4>
                      <p className="text-slate-400 text-xs">Founder, TechStack</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic mb-4 leading-relaxed">
                    &quot;Knowledge Hive completely replaced my expensive
                    consultant fees. The Marketing Mastery course alone paid for
                    the annual membership in 48 hours.&quot;
                  </p>
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-icons text-sm">star</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Honeycomb Section */}
      <section className="py-24 bg-navy-deep border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6 text-white [font-family:var(--font-montserrat)]">
              Learn from the Architects of Growth
            </h2>
            <p className="text-slate-400">
              No academics. No theorists. Only practitioners who have built
              multi-million dollar ventures from scratch.
            </p>
          </div>
          <div className="relative flex flex-wrap justify-center gap-8 py-10">
            {[
              { variant: 0 as const, name: 'Sarah Jenkins', role: 'Growth @ AirBnB', color: 'bg-surface', mt: '' },
              { variant: 1 as const, name: 'David Vo', role: 'Sales Strategist', color: 'bg-surface', mt: 'md:mt-24' },
              { variant: 2 as const, name: 'Elena Rodriguez', role: 'AI Consultant', color: 'bg-primary/20', mt: '', accent: true },
              { variant: 3 as const, name: 'John D. Miller', role: 'Venture Capitalist', color: 'bg-surface', mt: 'md:mt-24' },
            ].map((inst, i) => (
              <div key={i} className={`relative group ${inst.mt}`}>
                <div
                  className={`w-48 h-56 hexagon-mask ${inst.color} border border-primary/20 overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 flex items-center justify-center p-4`}
                >
                  <InstructorIllustration
                    variant={inst.variant}
                    accent={inst.accent}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface px-4 py-2 rounded-lg shadow-lg border border-primary/20 whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold text-sm text-white">{inst.name}</p>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-tighter">{inst.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
