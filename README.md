# Measles: A Complete Learning Guide

An interactive, evidence-based web application for learning everything about the measles virus — its origins, virology, clinical disease, epidemiology (past and present), the vaccine's history, and a case study of what happens when vaccination collapses.

**Live site:** https://coding.epidemiological.net/measles-learn/

## Features

- **Seven learning modules**, each with clear prose, key facts, and inline citations to primary sources:
  1. Origins & Emergence — how a cattle disease became a human one
  2. Virology — what the virus is made of, and how it hijacks the body
  3. Clinical Disease & Societal Impact — what measles does to the body, and how it spreads
  4. Epidemiology — Past — what measles did before the vaccine
  5. Epidemiology — Current — why measles is coming back
  6. Vaccine Development History — how the vaccine was made, and the fraud that hurt it
  7. A Place Without Vaccines — what happened when Samoa's vaccination rate fell
- **Quizzes** for every module — 29 questions in all — with instant feedback and an explanation for each answer.
- **Interactive timeline** of 21 key events spanning from measles' emergence (~528 BCE) through the 2025 U.S. resurgence — the largest since 1992.
- **Progress tracking** saved privately in your browser (localStorage) — nothing is uploaded anywhere.
- **Light & dark mode**, fully responsive, accessible, and keyboard-navigable.

## Tech

A dependency-free static single-page app — plain HTML, CSS, and JavaScript. No build step. All content lives in `js/data.js`.

```
index.html           # App shell and all views
css/style.css        # Design system + component styles
js/data.js           # All module content, quizzes, and timeline data
js/app.js            # View routing, quiz engine, progress tracking
assets/              # SVG illustrations, favicon, module images, and social share image
```

The site deploys automatically to GitHub Pages via the workflow in `.github/workflows/pages.yml`.

## Running locally

Because the app loads local scripts, serve it over HTTP rather than opening the file directly:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Sources & accuracy

Content is written for the educated general public and public-health students. Every module and timeline entry cites primary sources — CDC, WHO, and the peer-reviewed literature. A consolidated reference list is also available in `assets/measles-learn-sources.pdf` and linked from the site's navigation. Key references include the [CDC History of Measles](https://www.cdc.gov/measles/about/history.html), the [WHO Measles Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/measles), [Düx et al. (Science, 2020)](https://www.science.org/doi/10.1126/science.aba9411) on origins, [Mina et al. (Science, 2019)](https://www.science.org/doi/10.1126/science.aay6485) on immune amnesia, and [Thornley et al. / The Lancet (2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7255155/) on the 2019–20 Samoa outbreak. Content accurate as of July 2026.

> **Not medical advice.** This site is for education only. For questions about vaccination or measles risk, consult a qualified health-care professional or your local public health department.

## Author

Created by **Rene F. Najera, DrPH**, an infectious-disease epidemiologist and educator.

## License

Content and code released under the [MIT License](LICENSE). You are free to reuse and adapt with attribution.
