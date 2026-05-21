# myBioPortal Frontend 
### Jewish General Hospital & McGill University (Lady Davis Institute)

BioPortal is an institutional, open-science genomic research and cohort discovery platform. This repository contains the unified, highly decoupled frontend framework, custom multi-omics data explorer interface, and CMS architectural pipelines designed to safely bridge clinical participants and global scientific investigators.

---

## 1. Core Technical Ecosystem

The architecture is engineered around lightweight, modern, and zero-latency technical configurations:

* **Framework:** Astro 6 (Strict TypeScript compilation environment)
* **Styling Engine:** Tailwind CSS 4 (Native CSS variable-driven configuration)
* **Visualization Layer:** Chart.js (Optimized canvas orchestration rendering)
* **Compute Infrastructure:** Downstream genomic data transfers and pipeline executions operate across the high-performance computing networks of the Digital Research Alliance of Canada (AllianceCan) and secure private compute clusters hosted at the Lady Davis Institute (LDI).
* **Metadata Standards:** Discovery metrics adhere strictly to the Global Alliance for Genomics and Health (GA4GH) structural schemas.

---

## 2. Directory & Component Architecture

The codebase enforces a highly modular, decoupled structure separating presentation logic, configuration layers, and structured data payloads.

```text
├── astro.config.mjs          # Core production base path and Vite plug-in layers
├── package.json              # Compilation scripts and dependency manifest
├── tsconfig.json             # Enforced type checking protocols (Strict Mode)
└── src/
    ├── components/           # Extracted UI presentation components
    │   ├── Navbar.astro      # Smart navigation bar featuring scroll-to-reveal hooks
    │   ├── Footer.astro      # Centralized privacy/legal footer links
    │   ├── Hero.astro        # High-impact branded landing component
    │   ├── TrustBar.astro    # Institutional peer and funding asset matrix
    │   └── explorer/         # Isolated interactive cohort exploration views
    │       ├── ExplorerGrid.astro
    │       ├── ExplorerHeader.astro
    │       └── ExplorerSidebar.astro
    ├── content/              # Structured Content Collections (Data CMS)
    │   ├── news/             # Cross-sectional research summaries (.md)
    │   ├── pages/            # Decoupled page metadata and copywriting text (.yaml)
    │   └── team/             # Institutional governance profiles (.yaml)
    ├── layouts/
    │   └── Layout.astro      # Global HTML blueprint injecting shared shell wrappers
    ├── pages/                # Direct file-system routing entry points
    │   ├── data/
    │   │   └── explorer.astro# Standalone application viewport for cohort metrics
    │   ├── data.astro        # Researcher entry point and access protocols
    │   ├── index.astro       # Landing gateway routing to sub-portals
    │   ├── participants.astro # Patient portal eligibility processing view
    │   ├── privacy.astro     # Transparent data stewardship safeguards
    │   └── news/
    │       ├── [id].astro    # Dynamic server-side parameter layout for individual posts
    │       └── index.astro   # Historical insights archive timeline
    ├── scripts/
    │   └── explorerEngine.ts # Core client-side processing cluster logic for API matrix
    └── styles/
        └── global.css        # Tailwind 4 configuration tokens and theme matrices

```

---

## 3. Developer Deployment Guide

### Local Development Environment

Ensure your local compute station runs Node.js Version 22.12.0 or higher.

```bash
# Install required dependencies
npm install

# Initialize local developer compilation server with hot-reloading active
npm run dev

```

The application will launch on your local host (typically `http://localhost:4321/mybioportal_frontend`).

### Compiling Production-Ready Assets

```bash
# Run strict compilation and generate optimized static asset bundles
npm run build

# Preview the local production compilation bundle
npm run preview

```

---

## 4. Maintenance Guide: Updating Platform Content

This platform utilizes **Astro Content Collections** to strictly separate text payloads from application code. Developers should never edit HTML files to change layout text.

### Modifying Team Roster Members

The operational roster is updated via discrete YAML definitions inside `src/content/team/`. To append a new individual, generate a unique file (e.g., `20-john-smith.yaml`):

```yaml
name: "Dr. John Smith"
role: "Lead Proteomics Investigator"
image: "/images/team/john-smith.png" # Safe relative mapping asset path
order: 20                             # Controls exact vertical stack position
group: "governing"                    # Enforce strict domain: "governing" or "recruitment"
bio: "Dr. Smith directs deep analytical mass spectrometry pipelines to profile tracking signals..."

```

### Publishing Research Insights & News

Articles are authored using standard Markdown files inside `src/content/news/`. Astro strictly validates frontmatter schemas:

```markdown
---
title: "Identification of Rare Variants in Diabetic Retinopathy Cohorts"
date: 2026-05-20
tag: "Genomics"
excerpt: "A cross-sectional screening across 2,000 active Montreal profiles reveals structural configurations..."
image: "/images/news/retinopathy-study.jpg"
---

## Technical Overview
Insert comprehensive scientific content blocks here using natural markdown semantics...

```

---

## 5. Engineering the Custom Data Explorer

The live statistics explorer (`src/pages/data/explorer.astro`) interfaces dynamically with a decoupled cloud gateway API.

### Managing Visual Assertions & State Interceptors

The execution controller is isolated inside `src/scripts/explorerEngine.ts`.

* **State Transition Control:** Async transitions layer frosting glass mechanics dynamically using `showLoadingState()` and `hideLoadingState()`.
* **Precise Content Hydration:** The explorer enforces title text rendering constraints by updating DOM injection targets (`view-title`) only *after* API response array streams resolve successfully.

### Modifying Layout Metrics

If the targeted research initiative appends tracking arrays to the upstream endpoints, update your local variables in the script directly to synchronize structural behaviors, labels, and analytical options safely.

---

## 6. Strict Design System & Color Language Guidelines

To protect institutional trust, transparency, and safety protocols, the design system adheres to a rigorous **Unified Trust Palette** mapped inside `src/styles/global.css`:

```css
/* Core Structural Tokens */
--color-brand-dark: #003f5e;        /* Primary authority typography and structural bounds */
--color-brand-blue-deep: #26abe2;   /* Secondary authority accents, cards, and data selections */
--color-brand-green-bright: #7fc342;/* Active conversion mechanisms (Safe action points: Join Study) */

```

### UX Design Mandates for Updates:

1. **Interactive Elements:** Action elements (buttons, selectors, toggles) must utilize outlines natively on resting layouts. Solid fills are reserved purely for active hover focus interactions to maximize visual cleanliness.
2. **Hover Behaviors:** Interactive items should implement `hover:brightness-110` transformations to smoothly amplify their native color values rather than arbitrarily swapping raw color steps.
3. **Team Roster:** Portrait hover triggers must implement `group-hover:logo-gradient` rings to smoothly cascade the composite corporate brand profile seamlessly around active card states.

