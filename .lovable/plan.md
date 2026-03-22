

# Update Site with Technical Engineering Realities

## Overview

Incorporate the detailed engineering analysis from your email into the site, making the technical narrative more credible and grounded. This involves updating existing sections and adding a new "Engineering Deep Dive" section that addresses the real engineering challenges and feasibility questions.

## Changes

### 1. Update "Why Doesn't This Already Exist?" section
Revise the five cards to align with the specific technical barriers from your email:
- **Miniaturisation is Hard** → Update description to reference magnetic drive centrifugal micro-pump specifics, 40-80W in a 120mm x 60mm housing
- **Battery + Water = Caution** → Add detail about IPX7 dual-chamber (wet/dry) architecture, o-ring and ultrasonic-welded seals, steam exposure lifespan
- **Existing Solutions 'Work'** → Reference Methven SatinJet, Nebia (nozzle physics only), Davey whole-house pumps ($500+ installed), UK electric showers
- **Regulatory Barriers** → Mention WaterMark certification (Australia), IEC electrical safety, backflow/check valve requirements specifically
- **Perceived as a Niche Problem** → Keep similar but sharpen with renter/apartment stats

### 2. New section: "Engineering Deep Dive" (after Why Not Exist)
An accordion-based section addressing the six core feasibility questions from the email. Each item shows the challenge and a brief, honest assessment:

- **Power Budget vs Runtime** — 40-80W draw, 30Wh battery, ~20-45min runtime (~3-5 showers). Honest about efficiency assumptions.
- **Cavitation Risk** — Small pumps at 8,000-20,000 RPM with aerated municipal water. Discuss inlet conditions and mitigation.
- **Thermal Management** — 40-80W in sealed 120mm x 60mm cylinder. Water as heatsink for wet chamber, passive aluminium heat sinking for dry chamber. Open question on power density limits.
- **Waterproofing Architecture** — Dual-chamber design, o-rings, gaskets, ultrasonic welding, IPX7 target. Steam exposure durability for 2+ year lifespan.
- **The Mixer Valve Problem** — Downstream pump vs thermostatic/pressure-balance valves. Does boost get cancelled? Key risk clearly stated.
- **Noise** — Target <45dB with brushless motor at 8,000-20,000 RPM in resonant housing attached to plumbing. Rubber mounts, balanced impeller.

Uses the shadcn Accordion component. Styled with glass-card aesthetic.

### 3. Update ProductConceptSection
- Remove "USB-C charging port" from the component list (replace with "Magnetic drive coupling" — motor in dry chamber, magnetic coupling spins impeller in wet chamber)
- Update pump description to reference "Magnetic drive centrifugal micro-pump"
- Update battery description to "7.4–11.1V, 3000–6000mAh" with "~3–5 showers per charge"
- Add pressure sensor detail: "Auto-activates on flow detection, ramps pump speed, shuts off when flow stops"

### 4. Update ComparisonSection
Add a new row for "High-Pressure Shower Head" column (Methven/Nebia type) as a fourth comparison column, making the distinction clear that nozzle physics ≠ actual pressure boost. Update existing descriptions to be more specific.

### 5. Update RecirculationSection flow diagram
Add "Pre-Filter" and "Pressure Sensor" as explicit steps in the flow, matching the internal architecture: Inlet → Sediment Pre-Filter → Pressure Sensor → Pump Impeller → Stabilisation Chamber → Outlet.

### 6. Add manufacturing cost breakdown card
A small card at the bottom of the comparison section showing the transparent BOM estimate:
- Pump & motor: $20-40
- Battery: $10-20
- Electronics: $8-15
- Housing & seals: $10-15
- Filter & connectors: $5-10
- Assembly: $8-12
- **Total: ~$60-110** → Retail: $249

## Technical Details

- New file: `src/components/sections/EngineeringDeepDiveSection.tsx` — Accordion-based section using `@/components/ui/accordion`
- Modified files: `WhyNotExistSection.tsx`, `ProductConceptSection.tsx`, `ComparisonSection.tsx`, `RecirculationSection.tsx`, `Index.tsx`
- All new content uses existing design patterns (glass-card, framer-motion animations, water-gradient)
- No new dependencies required

