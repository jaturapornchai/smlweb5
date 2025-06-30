# Components Structure

This directory contains modular Astro components used across the SML Soft website.

## Homepage Components

### Main Sections
- **`Hero.astro`** - Hero section with main value proposition
- **`SMLMarketB2B.astro`** - SML Market B2B System article preview
- **`AIFeatures.astro`** - AI Agent & Agentic AI features showcase
- **`AIDemoExamples.astro`** - AI demo examples and links
- **`Stats.astro`** - Company statistics and metrics
- **`Features.astro`** - Core features and benefits
- **`Products.astro`** - Product showcase
- **`AITechnologyExplanation.astro`** - AI technology comparison
- **`FAQ.astro`** - Frequently asked questions
- **`CTA.astro`** - Call-to-action section

### Layout Components
- **`Header.astro`** - Main navigation header
- **`Footer.astro`** - Site footer with links and contact info

## Design Consistency

All components use:
- **Max Width**: `max-w-6xl` for main content containers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Color Scheme**: Consistent gradient and color palette
- **Typography**: Thai language optimized fonts and sizing

## Usage

Import components in your Astro pages:

```astro
---
import SMLMarketB2B from "../components/SMLMarketB2B.astro";
import AIFeatures from "../components/AIFeatures.astro";
// ... other imports
---

<Layout>
  <SMLMarketB2B />
  <AIFeatures />
  <!-- ... other components -->
</Layout>
```

## Maintenance

- Each component is self-contained with its own styling
- Components follow Thai language business context
- All components are designed for easy modification and updates
- Use Tailwind CSS classes for consistent styling
