# albertgotri.github.io

Personal site of Albert Gómez Triunfante — AI Engineer.

Vue 3 + Vite, built to static files and served from GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the built output locally
```

## Editing content

All copy lives in [`src/data/profile.js`](src/data/profile.js) — bio, experience,
projects, skills, education, contact links. Components render whatever that file
says, so adding a project or rewording a bullet means editing one file and nothing
else.

## Theme

Light is the default for everyone; dark applies only when a visitor picks it in the
masthead control, which sets `data-theme="dark"` on `<html>` and saves the choice.

The small inline `<script>` in `index.html` re-applies that saved choice **before
first paint**. Don't move it out of `<head>` or make it external — if it runs any
later, the page paints light and then flips, which is worse than having no toggle.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. One-time setup: **Settings → Pages → Source →
GitHub Actions**.

## Structure

```
index.html            page shell, meta tags, JSON-LD
src/
  main.js             app entry
  App.vue             section composition
  style.css           design tokens and all styling
  data/profile.js     all site content
  components/         one component per section
public/favicon.svg
```
