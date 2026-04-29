# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal academic website for Angus H. Bucknell, hosted on GitHub Pages at `www.ahbucknell.com` (CNAME configured). The site is a fully self-contained single `index.html` — no build system, no package manager, no CI/CD. It is deployed directly by GitHub Pages.

## Previewing locally

Open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
```

## Design

- **Palette**: forest green (`--green: #2d4a3e`), sage (`--sage: #5a8a72`), mint (`--mint: #c8ddd4`), off-white bg (`--bg: #f8f7f4`), dark green bg (`--bg-dark: #1e3028`)
- **Typography**: DM Serif Display (headings) + DM Sans (body), loaded from Google Fonts
- All CSS and JS are inline in `index.html` — no external stylesheet or script files are used

## File structure

- **`index.html`** — the entire site; all styles (inline `<style>`), content, and JS in one file
- **`images/headshot.jpeg`** — portrait photo used in the About section
- **`research.html`** — stub page, not linked from the main nav
- **`assets/`** — legacy assets from the old Stellar/HTML5 UP design; not referenced by the current site
- **`elements.html`**, **`generic.html`** — HTML5 UP template demo pages, not part of the live site

## Content sections in index.html

Sections in DOM order (anchor nav is sticky, inserted between Hero and About):

| Anchor | Background | Content |
|--------|-----------|---------|
| `#hero` | dark | Full-viewport hero with animated canvas + name/title/CTAs |
| `<nav>` | off-white | Sticky nav (sticks once hero scrolls off) |
| `#about` | off-white | Two-column: headshot + bio text with keyword tags |
| `#research` | dark | Three research cards (01–03) |
| `#experience` | paper | Timeline of research positions |
| `#education` | off-white | Two education cards |
| `#publications` | dark | Numbered list of publications and pre-prints |
| `#cv` | off-white | Two-column: intro text + contact/profile links |
| `<footer>` | dark | Name + affiliation |

## Hero animation

The hero canvas (`#network-canvas`) runs a protein interaction network animation — drifting nodes (hub + regular) connected by proximity edges. Defined in the inline `<script>` as a self-invoking `draw()` loop using `requestAnimationFrame`.

## Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`.
- Publication items (`a.pub-item`) are full-row anchor links to DOIs.
- `*` in author lists denotes co-first authorship; noted by `.pub-note` above the list.
- Scroll-reveal uses `.reveal` + `.reveal-delay-{1–5}` classes with an `IntersectionObserver`.
