# JXUI (`jxui-react`)

<p align="center">
  <img src="./public/logo.png" width="160" alt="JXUI Logo" />
</p>

<h3 align="center">Next-Generation React 19 Component Library &amp; Interactive Design System Workbench</h3>

<p align="center">
  Reimagining enterprise React UI with tactile spring interactions, specular glassmorphism, and stable component geometry across supported state changes.
</p>

<p align="center">
  <a href="https://github.com/jacxishipping/jxui-react/actions"><img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square&logo=github-actions" alt="Build Status" /></a>
  <a href="https://github.com/jacxishipping/jxui-react"><img src="https://img.shields.io/badge/tests-22%2F22%20passing-brightgreen?style=flat-square" alt="Tests" /></a>
  <a href="https://jacxishipping.github.io/jxui-react/"><img src="https://img.shields.io/badge/demo-live%20workbench-indigo?style=flat-square" alt="Live Demo" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/react-19.0.0-blue?style=flat-square&logo=react" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/typescript-strict%20100%25-blue?style=flat-square&logo=typescript" alt="TypeScript Strict" /></a>
  <a href="https://www.w3.org/WAI/WCAG21/quickref/"><img src="https://img.shields.io/badge/accessibility-audit%20matrix-purple?style=flat-square" alt="Accessibility audit matrix" /></a>
  <a href="#"><img src="https://img.shields.io/badge/cls-0.00%20guaranteed-success?style=flat-square" alt="CLS Zero" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational?style=flat-square" alt="License" /></a>
</p>

---

## ⚡ What is JXUI?

Traditional enterprise UI libraries were conceived in an era of static cards, all-caps buttons, notched outlines, and ink ripples. While functional, they introduce visual noise, layout shifts, and dated aesthetics.

**JXUI** unifies **361 components across 18 modular categories**:
- **System A (61 Production Showcases)**: Full state machines with live telemetry, keyboard traps prevention, ARIA contracts, and MUI flaw diffs.
- **System B (300 Modular Primitives)**: Zero-runtime, Tailwind CSS v4 building blocks with true 3D tilt physics, pointer-captured rotary knobs, vector canvases, and magnetic cursor gravitation.

---

## 🚀 Quick Start

### Installation

Install via your preferred package manager:

```bash
# npm
npm install jxui-react motion lucide-react

# pnpm
pnpm add jxui-react motion lucide-react

# yarn
yarn add jxui-react motion lucide-react

# bun
bun add jxui-react motion lucide-react
```

### Basic Usage

Wrap your application in `JXThemeProvider` to enable dynamic token synthesis, elevation tiers, and dark mode:

```tsx
import React from 'react';
import { JXThemeProvider, useJXTheme } from 'jxui-react';
import { TiltCard, LiquidButton, SignaturePad } from 'jxui-react';

export function App() {
  return (
    <JXThemeProvider defaultMode="dark" defaultAccent="indigo">
      <div className="p-8 space-y-6">
        <TiltCard title="Specular Depth">
          <p>True 3D perspective pitch and yaw tracking cursor coordinates.</p>
        </TiltCard>

        <LiquidButton onClick={() => console.log('Tactile Press')}>
          Liquid Viscosity
        </LiquidButton>
      </div>
    </JXThemeProvider>
  );
}
```

---

## 📦 Master Component Suite (18 Categories • 361 Components)

JXUI features 18 unified categories combining interactive showcases and modular primitives:

| # | Category | Components |
| :-: | :--- | :-: |
| **01** | **Buttons & Actions** | **24** |
| **02** | **Glassmorphism & Surfaces** | **24** |
| **03** | **Navigation & Wayfinding** | **30** |
| **04** | **Inputs & Forms** | **32** |
| **05** | **Toggles & Selection** | **18** |
| **06** | **Modals & Overlays** | **22** |
| **07** | **Notifications & Feedback** | **17** |
| **08** | **Loading & Progress** | **17** |
| **09** | **Cards & Content** | **22** |
| **10** | **Data Visualization** | **21** |
| **11** | **Tables & Data Grids** | **18** |
| **12** | **Drag & Drop** | **15** |
| **13** | **Layout & Workspace** | **20** |
| **14** | **Animation & Motion** | **16** |
| **15** | **AI Components** | **16** |
| **16** | **Editors & Creative Tools** | **17** |
| **17** | **Time & Scheduling** | **12** |
| **18** | **Advanced Utilities** | **20** |

---

## ⚖️ JXUI vs Material UI (MUI) Benchmark

| Ergonomic Feature | Material UI (Core / Lab / X) | JXUI (jxui-react) |
| :--- | :--- | :--- |
| **State Geometry** | Spinner/text swaps can change button dimensions | Stable bounds for supported state transitions |
| **Surface Physics** | Flat Android 5 ink ripple with linear easing | **Tactile Spring**: Proximity pull, velocity scaling, 3D tilt |
| **CSS Overhead** | Heavy Emotion / styled-components runtime | **Zero-Runtime**: Tailwind CSS v4 + native CSS variables |
| **Glassmorphism** | Flat gray backgrounds with opaque drop shadows | **Specular Depth**: Ambient blur, top highlight, radial spotlights |
| **Accessibility Guidance** | Complex nested modals need careful keyboard and focus testing | Interactive checklist for keyboard, focus, and ARIA patterns |

---

## 🛠️ Development & Local Workbench

```bash
# Install dependencies
npm install

# Launch the interactive workbench & GitHub showcase
npm run dev

# Run pure logic unit tests (22/22 passing)
npm test

# Run strict TypeScript linting
npm run lint

# Build production bundle
npm run build
```

The interactive workbench runs locally at `http://localhost:3000`.

---

## 🌐 Deploy to GitHub Pages

JXUI includes an automated GitHub Actions continuous deployment pipeline configured in `.github/workflows/deploy.yml`:

1. Push your changes to `master` or `main`.
2. GitHub Actions installs dependencies, validates types (`npm run lint`), runs tests (`npm test`), and compiles the Vite production bundle (`npm run build`).
3. The site is published automatically to `https://<username>.github.io/<repo>/`.

---

## 📄 License

Released under the [MIT License](LICENSE). Built with pride by the JXUI Core Engineering Team.
