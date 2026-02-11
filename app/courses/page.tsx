'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { COURSES, IMAGES } from '@/constants';
import type { Course } from '@/types';

const COURSES_PER_PAGE = 9;

function getCategories(courses: Course[]): string[] {
  const set = new Set(courses.map((c) => c.category));
  return Array.from(set).sort();
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [difficulty, setDifficulty] = useState<Course['level'] | 'All'>('All');
  const [page, setPage] = useState(1);

  const categories = useMemo(() => getCategories(COURSES), []);

  const filteredCourses = useMemo(() => {
    let list = COURSES;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          (c.description?.toLowerCase().includes(q) ?? false)
      );
    }
    if (selectedCategories.size > 0) {
      list = list.filter((c) => selectedCategories.has(c.category));
    }
    if (difficulty !== 'All') {
      list = list.filter((c) => c.level === difficulty);
    }
    return list;
  }, [searchQuery, selectedCategories, difficulty]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / COURSES_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const paginatedCourses = useMemo(
    () =>
      filteredCourses.slice(
        (currentPage - 1) * COURSES_PER_PAGE,
        currentPage * COURSES_PER_PAGE
      ),
    [filteredCourses, currentPage]
  );

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories(new Set());
    setDifficulty('All');
    setSearchQuery('');
    setPage(1);
  };

  const hasActiveFilters = selectedCategories.size > 0 || difficulty !== 'All' || searchQuery.trim() !== '';

  return (
    <div className="bg-navy-deep min-h-screen pt-20">
      <nav className="sticky top-20 z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold tracking-tight text-primary uppercase [font-family:var(--font-montserrat)]">
              Course Library
            </h1>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons text-primary-muted text-sm">search</span>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                  className="block w-full pl-10 pr-3 py-2 border border-primary/20 bg-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm text-white placeholder:text-slate-500"
                  placeholder="Search courses, instructors..."
                />
              </div>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/30">
              <Image
                src={IMAGES.userAvatar}
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-surface p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-primary uppercase tracking-wider text-xs">
                  Categories
                </h3>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-primary font-medium hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="rounded text-primary focus:ring-primary h-4 w-4 border-slate-300 bg-transparent"
                    />
                    <span className="ml-3 text-sm text-slate-400 group-hover:text-primary transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-6">
                  Difficulty
                </h3>
                <div className="space-y-4">
                  {(['All', 'Beginner', 'Intermediate', 'Expert'] as const).map((diff) => (
                    <label
                      key={diff}
                      className="flex items-center group cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="diff"
                        checked={difficulty === diff}
                        onChange={() => {
                          setDifficulty(diff);
                          setPage(1);
                        }}
                        className="text-primary focus:ring-primary h-4 w-4 border-slate-500 bg-surface"
                      />
                      <span className="ml-3 text-sm text-slate-400 group-hover:text-primary transition-colors">
                        {diff}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky top-40 bg-primary rounded-xl p-6 text-navy-deep overflow-hidden relative shadow-gold-glow">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-navy-deep/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 bg-navy-deep/30 rounded-md text-[10px] font-bold uppercase mb-4 tracking-widest">
                  Premium
                </span>
                <h4 className="text-xl font-bold leading-tight mb-2">
                  Join the Inner Circle
                </h4>
                <p className="text-sm text-navy-deep/80 mb-6">
                  Access 200+ exclusive courses and expert-led live workshops.
                </p>
                <button className="w-full bg-navy-deep text-primary font-bold py-3 rounded-lg hover:bg-navy-deep/90 transition-colors text-sm">
                  Upgrade Today
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white [font-family:var(--font-montserrat)]">
                  Courses Library
                </h1>
                <p className="text-slate-400 text-sm">
                  Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                  {filteredCourses.length !== COURSES.length && ` of ${COURSES.length}`}
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-sm text-slate-500 whitespace-nowrap">
                  Sort by:
                </span>
                <select className="bg-surface border border-primary/10 text-slate-200 rounded-lg text-sm focus:ring-primary w-full sm:w-48">
                  <option>Most Recent</option>
                  <option>Popularity</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-surface border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-gold-glow hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                          course.level === 'Expert'
                            ? 'bg-primary/90'
                            : course.level === 'Intermediate'
                              ? 'bg-amber-500/90'
                              : 'bg-emerald-500/90'
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                      {course.title}
                    </h3>
                    {course.description ? (
                      <p className="text-sm text-slate-400 line-clamp-2 mb-2">
                        {course.description}
                      </p>
                    ) : null}
                    <div className="flex items-center gap-2 mb-4">
                      <Image
                        src={course.instructorImage}
                        alt={course.instructor}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs text-slate-400">
                        {course.instructor}
                      </span>
                      <span className="text-slate-300 mx-1">•</span>
                      <div className="flex items-center text-xs text-slate-500">
                        <span className="material-icons text-sm mr-1">
                          play_circle_outline
                        </span>
                        {course.lessons} Lessons
                      </div>
                    </div>
                    {course.progress ? (
                      <div className="mb-4">
                        <div className="flex justify-between text-[10px] font-bold text-primary mb-1 uppercase tracking-tight">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-primary/10 rounded-full h-1.5">
                          <div
                            className="bg-primary h-1.5 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ) : null}
                    <button
                      className={`w-full font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                        course.progress
                          ? 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
                          : 'bg-primary text-navy-deep hover:shadow-gold-glow'
                      }`}
                    >
                      {course.progress ? 'Resume Course' : 'Start Learning'}
                      {!course.progress && (
                        <span className="material-icons text-sm">
                          arrow_forward
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2" aria-label="Course pagination">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary-muted disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    aria-label="Previous page"
                  >
                    <span className="material-icons">chevron_left</span>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold ${
                        p === currentPage
                          ? 'bg-primary text-navy-deep'
                          : 'border border-primary/20 hover:bg-primary/10 text-slate-400'
                      }`}
                      aria-label={`Page ${p}`}
                      aria-current={p === currentPage ? 'page' : undefined}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary-muted disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    aria-label="Next page"
                  >
                    <span className="material-icons">chevron_right</span>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
