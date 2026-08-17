## Task: Add a Premium Stats Strip Below the Hero Profile

I want you to make a **small, precise UI enhancement** to my existing portfolio website.

### Important: Do NOT redesign the website

The existing portfolio already has an established visual identity, layout, typography, spacing system, colors, hero composition, navigation, profile image, buttons, and responsive behavior.

**Do not change or redesign any of these.**

Do not:

* Change the existing color palette
* Change the beige / warm brown visual identity
* Change typography
* Change the navbar
* Change the hero layout
* Change the profile image
* Change the existing buttons
* Change hero spacing unnecessarily
* Change the page background
* Change responsive behavior outside the new component
* Add unnecessary animations
* Create a completely new card design
* Introduce blue, purple, green, gradients, glassmorphism, or unrelated visual styles

The goal is a **surgical UI enhancement**, not a redesign.

---

## What I Want

Look at the current Hero section.

I want a **small premium statistics strip/card directly underneath the hero profile area**, inspired by the compact stats section visible.

However, **do not copy its visual style exactly**.

The new component must be designed specifically for my existing portfolio's warm beige/brown aesthetic.

### Statistics to display

Use these three statistics:

**100+**
Projects Built

**30+**
Projects Live

**20+**
Projects Sold

The numbers must be visually dominant and the labels must be smaller and secondary.

---

## Design Direction

The component should feel like it was originally designed as part of this portfolio.

Use the existing site's:

* Warm beige background
* Brown typography
* Existing brown accent color
* Existing border treatment
* Existing rounded-corner language
* Existing shadows
* Existing spacing system

The card should be:

* Compact
* Elegant
* Premium
* Minimal
* Professional
* Consistent with the current portfolio
* Visually balanced with the hero section

Think of it as a **small credibility/proof bar**, not a large dashboard widget.

---

## Recommended Structure

Create a horizontal three-column stats component:

```text
┌─────────────────────────────────────────────────────┐
│       100+          │       30+        │    20+     │
│   Projects Built    │  Projects Live   │ Projects Sold │
└─────────────────────────────────────────────────────┘
```

Use subtle vertical separators between the three statistics.

The entire component should have the same visual language as the existing portfolio.

### Desktop

On desktop:

* Three columns
* Equal width
* Compact height
* Numbers centered
* Labels centered
* Subtle separators
* Rounded corners consistent with existing UI
* Position it naturally below/around the hero profile area without making the hero unnecessarily tall

### Mobile

On mobile:

* Preserve the compact three-column layout if it fits naturally
* Reduce horizontal padding
* Reduce font sizes proportionally
* Make sure no text wraps awkwardly
* Make sure the card does not overflow horizontally
* Do not break the existing mobile hero layout

If three columns become too cramped at a very small viewport, use a clean responsive layout while preserving the same visual hierarchy.

---

## Typography

Follow the existing typography system.

Do not introduce another font.

Numbers should be:

* Bold
* Large enough to immediately communicate the achievement
* Consistent with the existing heading weight

Labels should be:

* Smaller
* Medium/regular weight
* Slightly muted compared with the numbers

Example hierarchy:

```text
100+
Projects Built
```

The `100+` should be the primary visual element.

---

## Animation

Keep animation extremely subtle.

If the project already has entrance animations, reuse the existing animation system.

Do NOT introduce:

* flashy counters
* bouncing animations
* excessive hover effects
* glowing effects
* parallax
* unnecessary motion

A subtle fade/slide-in is acceptable only if it matches existing animations.

---

## Component Architecture

Before modifying anything:

1. Inspect the existing project structure.
2. Identify the Hero component.
3. Identify the existing design tokens/theme.
4. Identify the existing responsive breakpoints.
5. Identify whether reusable Card/Stats components already exist.

If an existing component can be reused safely, reuse it.

Otherwise create a small isolated component such as:

```text
HeroStats
```

or an equivalent name matching the project's architecture.

Keep the implementation clean and maintainable.

---

## Data

Do not hardcode the statistics throughout the JSX.

Prefer a small data structure:

```ts
const heroStats = [
  {
    value: "100+",
    label: "Projects Built",
  },
  {
    value: "30+",
    label: "Projects Live",
  },
  {
    value: "20+",
    label: "Projects Sold",
  },
];
```

Then render the component from the data.

This makes the statistics easy to update later.

---

## Critical Layout Requirement

The new statistics strip must **not push the hero content into an awkward position**.

After implementation:

* Check desktop viewport
* Check tablet viewport
* Check mobile viewport
* Check very small mobile viewport

Make sure:

* Hero heading remains visually dominant
* Profile image remains properly positioned
* CTA buttons remain accessible
* Stats do not overlap anything
* Stats do not cause unexpected horizontal scrolling
* Existing whitespace remains intentional
* The overall Hero section still feels balanced

---

## Visual Quality Check

Compare the result against the existing portfolio screenshot and preserve the original design language.

The final result should feel like:

> "This stats section was always part of the original portfolio."

It should NOT feel like:

> "A component copied from another portfolio and pasted here."

---

## Do Not Modify Existing Content

Unless technically necessary for placement, do not modify existing:

* Hero copy
* Name
* Job title
* Description
* Profile image
* CTA buttons
* Navbar
* Social links
* Page sections
* Footer
* Existing statistics elsewhere on the website

Only add the requested Hero stats strip.

---

## Final Validation

After implementation:

1. Run the project.
2. Check for TypeScript errors.
3. Check for lint errors.
4. Check desktop responsiveness.
5. Check tablet responsiveness.
6. Check mobile responsiveness.
7. Verify there is no horizontal overflow.
8. Verify existing UI remains visually unchanged.
9. Verify the new stats use the existing theme.
10. Verify all three statistics are displayed correctly:

**100+ Projects Built**
**30+ Projects Live**
**20+ Projects Sold**

If anything in the implementation requires changing existing UI, prefer the **smallest possible change**.

The priority is:

**Existing UI integrity > New stats component > Everything else.**