# Knowledge Hive – Site Improvement Suggestions

Suggestions for improving the Knowledge Hive site, ordered by impact and effort.

---

## High impact, relatively quick

### 1. Mobile navigation
The nav links and CTAs are `hidden md:flex`, so on small screens users only see the logo. Add a hamburger menu that toggles a slide-out or dropdown with Courses, About, Pricing, Community, “Go to Community”, and “Join the Hive”.

### 2. Course cards → real destination
“Start Learning” doesn’t go anywhere. Since courses live in GHL, either:
- Link each card (or button) to `COMMUNITY_LEARNING_URL` (e.g. your learning hub), or
- Add a `courseUrl` (or slug) in `constants.ts` and link to that so each course has a clear destination.

### 3. Fix or remove “Sort by”
The courses page “Sort by” dropdown has no `value`/`onChange`, so it doesn’t do anything. Either wire it to sort (e.g. by title, lessons, level) or remove it until you’re ready.

### 4. Footer links
Replace `href="#"` with real URLs where you have them: “Browse Courses” → `/courses`, “Pricing” → `/pricing`, “Community” → `COMMUNITY_LEARNING_URL`. For pages you don’t have yet (Help Center, Terms, Privacy), either add placeholder routes (e.g. `/legal/terms`) or remove those links until the pages exist.

---

## Content and conversion

### 5. One clear primary CTA
You have “Join the Hive”, “Get Started Today”, “Claim Membership Now”, “Go to Community”. Decide the main action (e.g. “Join for $5/mo” or “Go to Community”) and make it the single dominant CTA; use the others as secondary so the value prop is obvious.

### 6. About / social proof
About could add a short “Why Knowledge Hive” or 2–3 bullet benefits. If you have real testimonials or logos (even 1–2), use them; if not, consider removing or softening the “Featured in” bar so it doesn’t feel like placeholder.

### 7. Pricing clarity
On Pricing (and anywhere you mention price), spell out what $5/mo includes in one line, e.g. “Access to the course library + private community” so it’s clear what they get.

---

## SEO and technical

### 8. Per-page metadata
Add `metadata` (or `generateMetadata`) on key routes: `/courses`, `/about`, `/pricing`, `/community` with unique `title` and `description` so search results and shares look right.

### 9. Open Graph / Twitter cards
In `layout.tsx` (or per page), add `openGraph` and `twitter` metadata and an OG image so links look good when shared.

### 10. Favicon
Add a favicon (and optionally apple-touch-icon) that matches the dark + gold brand (e.g. brain/honeycomb mark) in `app/` or `public/`.

---

## Nice to have

### 11. Course detail page
Add `/courses/[slug]` or `/courses/[id]` that shows one course (title, description, lessons, level, CTA to community). Course cards can link here, and this page can link out to GHL for “Start course”.

### 12. “Go to Community” context
Clarify in UI or copy that “Go to Community” is for existing members (e.g. “Already a member? Go to Community”) so new visitors aren’t confused with “Join the Hive”.

### 13. Search on mobile
Course search is `hidden md:flex`. On mobile, show a search icon that opens a full-width search bar or a small modal so mobile users can filter courses too.

### 14. Accessibility
- Ensure focus states are visible (e.g. gold ring on buttons/links).
- Add `aria-label` to icon-only buttons (e.g. hamburger, search).
- Keep level badges and card text with sufficient contrast on dark (you’re close; a quick pass on contrast would help).

---

## Suggested order

1. **Mobile nav** → **Course card links** → **Footer links** → **Sort or remove**
2. Then **content/CTA** (items 5–7) and **SEO/polish** (items 8–10)
