# christophalt.github.io

Personal site of Christoph Alt — built with [Astro](https://astro.build), based on the
[Astro Nano](https://github.com/markhorn-dev/astro-nano) theme, deployed to GitHub Pages.

## Development

```
pnpm install
pnpm dev        # dev server
pnpm build      # astro check && astro build
pnpm lint       # eslint
```

## Content

All content lives in `src/content/`:

| Collection     | What goes there                                              |
| -------------- | ------------------------------------------------------------ |
| `publications` | One file per paper. Body is the abstract (omit it if there is none). |
| `news`         | One file per update. `inline: true` renders it as a one-liner; `inline: false` needs a `title` and gets its own page at `/news/<slug>`. |
| `work`         | One file per position, newest first by `dateStart`.           |
| `blog`         | Standard posts. Set `draft: true` to hide one.                |

Schemas are defined and validated in `src/content/config.ts`; `pnpm build` fails on
anything that does not match.

### Adding a publication

Create `src/content/publications/<slug>.md`:

```yaml
---
title: "Paper title"
authors: ["Christoph Alt", "Co Author"]
venue: "Proceedings of ..."
abbr: "ACL"          # optional badge
date: 2026-07-01
type: "inproceedings" # or article, phdthesis
selected: true        # shows on the homepage
pdf: "https://..."    # all links optional
website: "https://..."
doi: "10.18653/..."
url: "https://..."
---

Abstract goes here.
```

Your own name is matched against `SITE.NAME` in `src/consts.ts` and highlighted in the
author list. News items can link to a paper with `/publications#<slug>`.

Site-wide settings — name, email, socials, page descriptions — are in `src/consts.ts`.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.
