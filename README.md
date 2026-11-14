# 🌐 Frontier UI — Google Frontier AI Interface Clones

> **High-Fidelity Monorepo Housing Faithful Implementations of Google Labs Opal and Google DeepMind Genie 4.**  
> Built with **Turborepo**, **React 18**, **TypeScript**, **Tailwind CSS**, **XYFlow / React Flow**, and direct **Google Cloud Storage (GCS) WebM simulation streams**.

---

## 🌟 Overview

Frontier AI models are changing not just what intelligence can do, but how humans interact with it. **Frontier UI** reconstructs two of Google's most visionary, frontier-level AI interfaces into an open-source, production-grade monorepo:

```
                                      FRONTIER UI MONOREPO
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 │                                                             │
         ┌───────────────┐                                             ┌───────────────┐
         │   apps/       │                                             │   apps/       │
         │   opal-flow   │                                             │   genie-world │
         └───────┬───────┘                                             └───────┬───────┘
                 │                                                             │
   Google Labs Opal Visual Builder                               Google DeepMind Genie 4 Simulator
   • Node workflow canvas (XYFlow)                               • 19 GCS WebM simulation streams
   • 10 pre-loaded official templates                            • Real-time WASD action tokenizer
   • Live reactive Mini-App runner                               • 60 FPS / 16ms Latent HUD
   • Material You / Google Labs tokens                           • Cybernetic DeepMind dark theme
                 │                                                             │
                 └──────────────────────────────┬──────────────────────────────┘
                                                │
                                    ┌───────────────────────┐
                                    │ packages/             │
                                    │ shared-tokens         │
                                    └───────────────────────┘
                                    • Google & DeepMind Palettes
                                    • Google Sans Flex & Icons
                                    • Universal Type Definitions
```

---

## 🚀 Applications

### 1. `apps/opal-flow` — Google Labs Opal (AI Mini-App Visual Builder)
*Official Reference: [opal.google](https://opal.google/)*

- **Node Graph Workflow Engine**: Connect Input Prompts, Gemini 2.5 Flash / Pro reasoning nodes, and Output UI Cards with animated bezier edges and reactive sockets using `@xyflow/react`.
- **10 Pre-Loaded Google Labs Templates**:
  1. 📚 **Book Recs**: Curate literary discoveries based on reader vibes and favorite authors.
  2. 🏢 **Business Profiler**: Internet reputation, moat analysis, and brand sentiment synthesis.
  3. 🏰 **City Builder**: Game mechanics concept design with visual art direction bibles.
  4. ✨ **Fashion Stylist**: Weather-resilient haute couture ensemble recommendations.
  5. 🎧 **Generated Playlist**: Ambient deep-work soundtracks matched to BPM and mood.
  6. 🎓 **Learning with YouTube**: Automatic comprehension quiz generator from video lectures.
  7. 🔍 **Product Research**: Orthopaedic & durability comparison matrices.
  8. 📢 **Social Media Post**: High-signal viral X threads and LinkedIn thought-leadership copy.
  9. 🎬 **Video Marketer**: 30-second commercial storyboard director for Veo / Sora.
  10. 📝 **Blog Post Writer**: Publication-ready technical deep dives with SEO structure.
- **Dual-Mode Workspace**: Seamlessly toggle between **Flow Canvas** (building/inspecting nodes) and **Mini-App View** (the end-user interactive form and live output card generator).
- **Node Inspector & Flow Simulator**: Adjust Gemini temperature sliders, edit system prompts, test run animated data flow pulses, and export flows as JSON.
- **Google Material You Design System**: `#ffffff` / `#131314` theme toggle, `#0b57d0` Google Blue, rounded pill buttons, and Google Sans typography.

---

### 2. `apps/genie-world` — Google DeepMind Genie 4 (World Model Simulator)
*Official Reference: [deepmind.google/models/genie](https://deepmind.google/models/genie/)*

- **Interactive World Simulation Stage**: Directly streams 19 high-definition WebM simulation videos reverse engineered from Google Cloud Storage (`storage.googleapis.com/gdm-deepmind-com-prod-public/`).
- **Unsupervised Latent Action Controller**:
  - Live keyboard listener capturing `W`, `A`, `S`, `D`, `Arrow Keys`, and `Space` (Discrete Impulse).
  - Virtual cybernetic directional pad with reactive key illumination.
  - Streaming Action Token telemetry window outputting real-time tokens: `[ACTION_FORWARD_MOVE] Δv: +0.94 | latent_shift: 0.0182`.
- **DeepMind Cybernetic HUD**:
  - Real-time simulated inference metrics: `60 FPS`, `< 16.6 ms Latency`, `1024x16x16 Latent Grid`.
  - Aspect ratio switcher (`16:9` standard and `21:9` cinematic ultrawide).
  - Playback rate controller (`0.5x`, `1.0x`, `2.0x`) and full-screen capability.
- **Prompt-to-World Synthesis**: Enter custom world prompts or select presets (alpine powder skiing, cathedral caustics, etc.) to trigger generative world model rollouts.
- **DeepMind Neural Architecture Deep Dive**: Technical breakdowns of the Spatio-Temporal Video Tokenizer, Latent Action Model (LAM), Autoregressive Dynamics Transformer, and Sim-to-Real Robotics benchmarks.

---

## 📦 Extracted Google Cloud Storage Simulation Assets

All 19 simulation assets in `apps/genie-world` stream from Google's official GCS media buckets:

| Domain | Scene Title | Resolution / FPS | Physical Phenomena Simulated in Latent Space |
|---|---|---|---|
| 🎬 **Hero Reel** | *Genie 4 Reel* | 1080p @ 60 FPS | Multi-domain rollout, camera translation, procedural lighting |
| 🪶 **Fauna** | *Crowned Crane* | 720p @ 60 FPS | Snow crust displacement, plumage subsurface scattering, leg kinematics |
| 🔮 **Optics** | *Stained Glass Cathedral* | 720p @ 60 FPS | Chromatic dispersion, volumetric dust motes, raytraced caustics |
| ⛷️ **Physics** | *First-Person Skiing* | 720p @ 60 FPS | 60fps powder aerosol spray, carve momentum, high-velocity camera tilt |
| 🚣 **Fluids** | *Boat & Lilypads* | 720p @ 60 FPS | Navier-Stokes surface ripples, buoyancy pitch/roll, flora collisions |
| 👗 **Deform** | *Dressing Room* | 720p @ 60 FPS | Anisotropic cloth drape, recursive planar mirrors, fabric self-collision |
| 🧣 **Aerodynamics**| *Silk Scarf Turbulence* | 720p @ 60 FPS | Vorticity flutter frequency, microscopic fiber sheen, sheer translucency |
| 🍉 **Materials** | *Watermelon Slicing* | 720p @ 60 FPS | Tensile fracture propagation, droplet splatter, knife shear |
| 🎈 **Atmosphere** | *Hot Air Balloon* | 720p @ 60 FPS | Thermal burner refraction waves, cloud volume slicing, sunrise irradiance |
| 🦎 **Aquatic** | *Axolotl Cavern* | 720p @ 60 FPS | Undulating gill filaments, water viscosity drag, dappled caustics |
| 🤖 **Robotics** | *Robotics UR5 Manipulation* | 720p @ 60 FPS | Sim-to-real robotic policy execution, contact mechanics, Gemini planning |
| ✨ **Interactive** | *First-Person Magician* | 720p @ 60 FPS | Real-time particle spellcasting, emissive lighting, runic cascades |
| 🏛️ **Optics** | *Royal Opera House* | 720p @ 60 FPS | Gilded architectural scale, acoustic lighting, grand hall depth culling |
| 🏍️ **Vehicles** | *Motorcycle Hero* | 720p @ 60 FPS | Non-holonomic vehicle dynamics, tire traction, native audio generation |
| 🐉 **Fauna** | *Dragon Flight* | 720p @ 60 FPS | Leading-edge vortex wing lift, high-altitude alpine aerodynamics |
| 🎹 **Acoustics** | *Island Piano Duet* | 720p @ 60 FPS | Coastal ocean breaker shoaling, wind shear, audio-visual co-generation |
| 🚄 **Urban** | *Japanese Train Station* | 720p @ 60 FPS | Rain-slicked platform Fresnel reflections, transit deceleration physics |
| 🦊 **Platformer** | *White Fox Platformer* | 720p @ 60 FPS | Parabolic jump arcs, collider bounding box resolution, ledge dynamics |
| 🎨 **Stylized** | *Illustrated City Street* | 720p @ 60 FPS | Non-photorealistic watercolor brushwork coherency, pedestrian crowd tempo |

---

## 🛠️ Repository Architecture

```
frontier-ui/
├── apps/
│   ├── opal-flow/                   # Google Labs Opal Clone
│   │   ├── src/
│   │   │   ├── components/          # Canvas, Header, Inspector, Runner, Gallery
│   │   │   ├── data/templates.ts    # 10 Google Labs templates
│   │   │   ├── store/workflowStore  # Workflow reactive state
│   │   │   └── App.tsx              # Dual-mode application shell
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── genie-world/                 # Google DeepMind Genie 4 Clone
│       ├── src/
│       │   ├── components/          # SimulatorStage, Gamepad, Carousel, Benchmarks
│       │   ├── data/simulations.ts  # 10 GCS WebM simulation records
│       │   ├── store/simulationStore# Action token & latency telemetry store
│       │   └── App.tsx              # DeepMind Cybernetic showcase shell
│       ├── package.json
│       └── vite.config.ts
│
├── packages/
│   └── shared-tokens/               # Shared Design System & Typings
│       ├── src/
│       │   ├── tokens.ts            # Google & DeepMind palettes
│       │   ├── icons.tsx            # SVG vector assets
│       │   └── types.ts             # Shared interfaces
│       └── package.json
│
├── package.json                     # Monorepo root with npm workspaces
├── turbo.json                       # Turborepo task pipeline
└── README.md
```

---

## ⚡ Quickstart

### Prerequisites
- **Node.js**: `>= 20.0.0` (Tested on Node `v24.19.0`)
- **npm**: `>= 10.0.0` (or `pnpm` / `bun`)

### 1. Installation
Clone the repository and install all workspace dependencies in a single step:

```bash
git clone https://github.com/your-username/frontier-ui.git
cd frontier-ui
npm install
```

### 2. Development

Run both applications simultaneously with Turborepo:
```bash
npm run dev
```

Or run an individual application:
```bash
# Launch Google Opal Flow on http://localhost:3000
npm run dev:opal

# Launch DeepMind Genie World Simulator on http://localhost:3001
npm run dev:genie
```

### 3. Production Build

Build the entire monorepo with parallel pipeline caching:
```bash
npm run build
```

---

## 🔬 Reverse Engineering Lineage

- **Inspection Instruments**: Google Chrome DevTools Protocol + `rea` AST extraction.
- **Design Tokens**: Captured from production CSS bundles `site.271afe95.css` (DeepMind) and `shell.css` (Google Labs).
- **Video Origin**: Verified public Google Cloud Storage CDN endpoints for Google DeepMind research publications.

---

## 📄 License

Licensed under the **Apache License, Version 2.0**. See `LICENSE` for details.  
*All trademarks, logos, and brand names (Google, DeepMind, Opal, Genie, Gemini) belong to their respective owners.*
