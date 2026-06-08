# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Coltivo** is a static marketing website for a B2B SaaS container management platform, deployed at `www.coltivo.de` via GitHub Pages. The site is written entirely in German (de-DE).

**No build system, no package manager, no framework.** Pure HTML5, CSS3, and vanilla JavaScript (ES6+).

## Local Development

```bash
# Start a local server
python -m http.server 8000
# Then open http://localhost:8000
```

Or simply open any `.html` file directly in the browser. Navigation links between pages are relative.

## Architecture

### File Organization

- `styles.css` — global stylesheet with all shared component styles and CSS custom properties
- `script.js` — minimal shared utilities: navigation active-link detection and `toggleFaq(element)` for FAQ accordions
- Each `.html` page is self-contained and embeds its own page-specific JavaScript inline at the bottom

### CSS Custom Properties (in `styles.css` `:root`)

```css
--primary: #1e7e34   /* green */
--secondary: #0d47a1 /* blue */
--accent: #ff6b35    /* orange, used for CTAs */
--light: #f5f5f5
--dark: #333
--border: #e0e0e0
```

### Pages and Their Inline Logic

| File | Purpose | Notable inline JS |
|------|---------|-------------------|
| `index.html` | Landing page / hero | None |
| `calculator.html` | Pricing calculator | `selectPlan()`, `calculatePrice()`, `updatePrice()` — plan selection and live price calculation with discount logic |
| `demo.html` | 24-hour demo account request | `createDemoAccount(event)` — async POST to `https://app.coltivo.de/users/create-demo`; `startCountdown()` — 24h timer |
| `contact.html` | Contact form | Form validation and submission |
| `news.html` | News/changelog | None |
| `video.html` | YouTube embed + FAQ | FAQ toggle (uses shared `toggleFaq`) |
| `about.html` | Founder bio | None |
| `datenschutz.html` | GDPR privacy policy | None |
| `impressum.html` | Legal notice | None |

### Backend Integration

The only external API call is in `demo.html`:
- **Endpoint:** `https://app.coltivo.de/users/create-demo`
- **Method:** POST, JSON body
- **Purpose:** Creates a temporary 24-hour demo account

## Deployment

Pushes to `main` branch are automatically served via GitHub Pages. The `CNAME` file routes `www.coltivo.de` to the Pages deployment.

The `dev` branch is used for development; merge to `main` to deploy.

## Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px–1199px
- Mobile: < 768px

Main breakpoint in CSS is `768px`.

## MemPalace

- **Wing:** `coltivo`
- **Rooms:** `context`, `decisions`, `status`, `deployment`
- **Tunnel:** linked to `coltivo-mobile` (same product)
