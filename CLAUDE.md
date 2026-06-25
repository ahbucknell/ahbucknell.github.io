# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal academic website for Angus H. Bucknell, hosted on GitHub Pages at `www.ahbucknell.com` (CNAME configured). No build system, no package manager, no CI/CD — files are served directly by GitHub Pages.

## Previewing locally

Open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
```

## Design

- **Direction**: Technical / Specimen-label — grid-paper-toned light backgrounds, near-black ink, ochre accent, bracket `[tag]` labels, monospace metadata
- **Palette**: ochre accent (`--accent: #c2780f`), bright ochre (`--accent-bright: #e0962f`), ink (`--ink: #16181a`), light bg (`--bg: #eef0ec`), near-black dark bg (`--bg-dark: #14161a`)
- **Typography**: Work Sans (`--sans`, headings + body) + IBM Plex Mono (`--mono`, labels/metadata/buttons), loaded from Google Fonts
- CSS variables are defined in `assets/css/style.css` under `:root`

## File structure

- **`index.html`** — homepage (hero, about, research, experience, publications preview, contact)
- **`research.html`** — expanded research detail page with figures/citations; currently **unlinked from nav on purpose** (content needs a rewrite pass — see `TODO.md`)
- **`publications.html`** — full publications & conference output page
- **`assets/css/style.css`** — all styles
- **`assets/js/main.js`** — scroll-reveal observer + hero canvas animation
- **`assets/js/nav.js`** — mobile nav toggle + theme-color meta swap on scroll
- **`images/headshot.jpeg`** — portrait photo used in the About section
- **`images/`** — institution logos and research figures (not currently referenced by the site, kept for future use)

## Content sections in index.html

Sections in DOM order (anchor nav is sticky, inserted between Hero and About):

| Anchor | Background | Content |
|--------|-----------|---------|
| `#hero` | dark | Full-viewport hero with animated canvas + name/title/CTAs |
| `<nav>` | light | Sticky nav (sticks once hero scrolls off) |
| `#about` | light | Two-column: headshot + bio text with keyword tags |
| `#research` | dark | Research list (no numbering) |
| `#experience` | paper | Timeline of research positions (degree info folded into matching entries, no separate Education section) |
| `#publications` | dark | List of publications and pre-prints |
| `#cv` | light | Two-column: intro text + contact links (email, GitHub, ORCID, Bluesky) |
| `<footer>` | dark | Name + affiliation + funding statement (linked to UKRI grant page) |

## Hero animation

The hero canvas (`#network-canvas`) runs a protein interaction network animation — drifting nodes (hub + regular) connected by proximity edges. Defined in `assets/js/main.js` as a self-invoking `draw()` loop using `requestAnimationFrame`.

## Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`.
- Publication items (`a.pub-item`) are full-row anchor links to DOIs.
- `*` in author lists denotes co-first authorship; noted by `.pub-note` above the list.
- Scroll-reveal uses `.reveal` + `.reveal-delay-{1–5}` classes with an `IntersectionObserver`.
