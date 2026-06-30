# Testimonial Submission + Curation — Design Spec

Date: 2026-06-30
Project: Oragon Labs website (`projects/Oragon`, oragon.com.ph)
Status: Approved design, pending spec review

## Goal

Let happy clients submit a testimonial through a moderated flow, and keep the
homepage testimonial wall curated as the list grows. Miguel approves every
testimonial before it goes live. Nothing publishes automatically.

## Context

- Testimonials are a static data array in `lib/testimonials.ts`, rendered by
  `components/sections/Testimonials.tsx`. There is currently **one** testimonial
  (Vero Denim Bags).
- The homepage grid is a `.map()`. It does not hard-cap at 3; extra entries wrap
  to new rows. "Only 3 fit" is an aesthetic choice, not a constraint.
- Resend is already wired (`app/api/contact/route.ts`), and the contact form is a
  client component (`components/sections/ContactForm.tsx`) that POSTs JSON to that
  route. The testimonial flow reuses these exact patterns.

## Decisions (locked)

1. Build the **private submission form + email route now**. It is cheap because it
   copies the existing contact route.
2. The submission form is reachable **two ways**: a direct private link Miguel sends
   clients after a successful job, and a **subtle text link** under the testimonials
   section for clients he forgot to ask.
3. Add a `featured` flag so the homepage stays curated (top 3) as the list grows.
4. **Publishing is manual by design.** The notification email contains a
   ready-to-paste `Testimonial` object. Approving = paste into `lib/testimonials.ts`
   and push. No datastore, no CMS, no auto-publish (overkill for the handful of
   testimonials this site will ever have).
5. **Deferred** until ~4-5 testimonials exist: the `/testimonials` see-more overflow
   page. The data model supports it now, so it is a quick add later.

## Architecture

Four changes, all mirroring existing patterns in this repo.

### 1. Data model — `lib/testimonials.ts`

- Add `featured: boolean` to the `Testimonial` type.
- Set Vero's existing entry to `featured: true`.

### 2. Curated render — `components/sections/Testimonials.tsx`

- Render `testimonials.filter((t) => t.featured).slice(0, 3)` instead of the full
  array, so only featured testimonials (max 3) show on the homepage.
- The existing 1-vs-many layout logic (single centered featured card vs 3-grid)
  operates on the filtered list, so current behavior with one testimonial is
  unchanged.
- Add a subtle text link below the grid:
  "Worked with Oragon? Share your experience →" linking to `/share-your-experience`.
  Styled as quiet mono text (muted color), not a loud button.

### 3. Submission page — `app/share-your-experience/page.tsx` + `components/sections/TestimonialForm.tsx`

- Mirror the contact page structure exactly: a server component page exporting
  `metadata` and wrapping a `"use client"` form component, same as
  `app/contact/page.tsx` + `components/sections/ContactForm.tsx`.
- Not added to `Nav.tsx`. Reachable only by direct URL or the subtle in-section link.
- Form fields:
  - **Quote** (textarea, required)
  - **Name** (required)
  - **Title** (optional)
  - **Company** (optional)
  - **Email** (optional, used only as `replyTo` in the notification, never published)
  - **Consent checkbox** (required): "I'm happy for Oragon to publish this testimonial
    on its website."
  - **Honeypot** (hidden field, e.g. `website`): visually hidden, `tabIndex={-1}`,
    `autoComplete="off"`. If filled, the API silently drops the submission.
- State machine and styling copied from `ContactForm.tsx`: `idle | loading | success |
  error`, same inline design tokens, same success card. Success copy sets the
  expectation that it is reviewed, not instantly live, e.g. "Thank you. We will review
  it and add it to the site shortly."

### 4. API route — `app/api/testimonial/route.ts`

- Copy `app/api/contact/route.ts`. Same Resend setup, `from: "Oragon Website
  <contact@oragon.com.ph>"`, `to: "support@oragon.com.ph"`, `replyTo` = submitter email
  if provided.
- Validate: require `quote`, `name`, and `consent === true`. Reject with 400 otherwise.
- Honeypot: if the hidden field is non-empty, return `{ success: true }` without
  sending (silently drop spam).
- Email body: a branded layout like the contact route, showing the submitted fields,
  **plus a fenced code block containing a ready-to-paste `Testimonial` object**:

  ```
  {
    id: "<slug-of-company-or-name>",
    quote: "<quote>",
    name: "<name>",
    title: "<title>",
    company: "<company>",
    featured: false,
  },
  ```

  `id` is a suggested slug; Miguel adjusts `id` and `featured` when pasting.

## Publish flow (manual)

1. Client submits via the form.
2. Miguel receives the notification email with the ready-to-paste object.
3. If approved: paste into the `testimonials` array in `lib/testimonials.ts`, set
   `featured` as desired, commit, push. Live on next deploy.
4. If not: ignore. Nothing is stored anywhere, so there is nothing to clean up.

## Out of scope (now)

- Public "add a testimonial" button on the homepage (spam-prone at one client; the
  subtle in-section link plus the private direct link cover the real need).
- `/testimonials` see-more overflow page (build at ~4-5 testimonials).
- Any datastore, admin panel, or one-click approve endpoint.
- Collecting testimonials #2-5: that is direct outreach to warm clients, not a build,
  and it is the actual near-term leverage.

## Verification

- `npm run lint` and `npm run build` pass.
- Submitting the form with valid fields returns success and an email arrives at
  support@oragon.com.ph containing a paste-ready object.
- Submitting with the honeypot filled returns success but sends no email.
- Submitting without consent or without quote/name is rejected.
- Homepage renders only `featured` testimonials, capped at 3; with one testimonial it
  looks identical to today.
- The subtle in-section link routes to `/share-your-experience`.
