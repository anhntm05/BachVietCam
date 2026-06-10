# Bách Việt Cầm - Design System Guidelines (`design.md`)

## 1. Design Philosophy (The Design Way)
The interface system of **Bách Việt Cầm** is positioned around the concept of a **Cultural Digital Atelier**. It is a harmonious blend of modern geometric structures (Bento grid, clear Auto Layout layers) and classic details imbued with traditional Vietnamese identity:
* **Material Depth:** Heavy use of gradient blends (`linear-gradient`) combined with carefully calibrated opacity and shadows (`box-shadow`, `inset shadow`) to simulate traditional material surfaces such as dark wood, lacquer, and gold inlay.
* **Imperial Accents:** Delicate borders, symbolic vector details, or active states are coated in a golden bronze hue (`#C9A84C` / `#E8C96E`), creating a luxurious feel that honors tradition.
* **Cultural Watermarks:** Sacred symbolic images like the Lotus motif, Dong Son drum, or instrument silhouettes are intricately integrated into the background with extremely high transparency (`opacity: 0.04` - `0.07`), blurring the line between a rigid technical interface and an artistic space.

---

## 2. Color Tokens

### 2.1. Primary Colors (Cultural Greens)
Utilizing the shades of the great forest, jade green, and the muted green of bamboo as the backbone for the entire system.

| Variable Name | Color Code (Hex / RGBA) | Role & Application |
| :--- | :--- | :--- |
| `--color-green-deep` | `#1A4331` | Main title text color (*Practice Studio*), main Footer background, and core buttons. |
| `--color-green-dark` | `#244334` | Text color for instrument labels (*Đàn Bầu*, *Sáo Trúc*), color of lacquer interface frames. |
| `--color-green-black` | `#1E2E28` | Near-black dark green, used for sub-titles, main display metrics (`BPM`), and the gauge needle axis. |
| `--color-green-container`| `#12462D` | Dark background color of inner panels within the practice area. |
| `--color-green-muted` | `#4A6B55` / `#7A9A82` | Used for descriptive text, introductory paragraphs, and secondary lesson metrics. |

### 2.2. Backgrounds & Gradients
| Variable Name | Configuration Value | Application |
| :--- | :--- | :--- |
| `--bg-mint-wash` | `#CEFFE7` | The outermost base background color of the Body tag. |
| `--bg-app-light` | `#F4F9F4` | Background color of the main application frame and lesson segments. |
| `--gradient-hero` | `linear-gradient(160deg, #C8E5C8 8.49%, #D3E1D8 50%, #F3F7F1 91.51%)` | Soft gradient background for the top Hero Section. |
| `--gradient-studio` | `linear-gradient(180deg, #CBDAC2 0%, #D3E2D2 100%)` | Rustic gradient background layer for the Workspace area. |
| `--gradient-lacquer` | `linear-gradient(135deg, #1A4331 0%, #2C6E49 60%, #1D5438 100%)` | Deep jade green gradient simulating a lacquer effect for heritage banners. |

### 2.3. Imperial Gold & Bronze Accents
| Variable Name | Color Code (Hex / RGBA) | Application |
| :--- | :--- | :--- |
| `--accent-gold-metallic`| `#C9A84C` | Silk gold thread borders, dot centers, and premium social media link buttons. |
| `--accent-gold-light` | `#E8C96E` | Glowing borders, sub-category text labels (*Cultural Heritage*), and gauge control box borders. |
| `--accent-bronze` | `#C97933` / `#E8A87C` | Orange-tinted bronze tone used for pitch icons, the *Retry* action button, and progress bar measuring strips. |
| `--gradient-gold-cta` | `linear-gradient(135deg, #C9A84C 0%, #E8C96E 100%)` | Imperial gold gradient reserved exclusively for primary Call to Action (CTA) buttons. |

### 2.4. Semantic Colors
| Variable Name | Color Code (Hex) | Application |
| :--- | :--- | :--- |
| `--color-cream-light` | `#F8F5EC` / `#FEFFFE` | Light text displaying high contrast on dark backgrounds (dark green studio or footer background). |
| `--color-success` | `#22C55E` | Display measuring bar when the user hits the absolute perfect pitch. |
| `--color-warning` | `#F87171` | Measuring bar signaling that the pitch tends to be slightly flat or sharp. |
| `--color-error` | `#DC2626` / `#B91C1C` | Needle indicating a widely off pitch (`+11.3 ¢`), measuring bar for severe deviation amplitude. |

---

## 3. Typography
To balance the classical traditional element with the precision of an audio measurement application, the font system is clearly divided into 3 groups:

* **Classical / Expressive Group (Playfair Display, Lora):**
  * *Playfair Display:* Applied to formal main titles (*Practice Studio*, *Practice Results*), super large display scores (`96px`, `font-weight: 700`).
  * *Lora:* Used exclusively for the dial's musical note characters (*A, B, C#, G♭*), creating an elegant feel akin to an ancient music book.
* **Modern / Functional Group (Inter, Public Sans, TikTok Sans):**
  * *Inter / Public Sans:* Used for navigation tabs, descriptive text, and sub-category labels to help users read without eye strain.
  * *TikTok Sans:* Used for quick functional interaction labels like *Live Record*, *Upload*, *New Recording*.
* **Technical / Measurement Group (DM Mono, Nunito Sans):**
  * *DM Mono / Nunito Sans:* Used to display Hz, Cents, and digital tempo parameters precisely to every decimal point (`440.0 Hz`, `+11.3 ¢`).

---

## 4. Shapes & Material Effects (Skeuomorphism)

### 4.1. Border Radius & Shape Hierarchy
* **Large Bento Blocks (Outer Border Radius):** Strong rounded corners from `28px` to `46px` for bounding frames, overview result display boards, and the main Studio area.
* **Small Functional Blocks (Inner Border Radius):** Rounded corners from `14px` to `18px` for internal component cards (Teacher/Student file upload boxes).
* **Buttons and Functional Labels (Capsule Pills):** Using an absolutely rounded shape (`border-radius: 999px`) bringing a soft, modern feel when selecting instrument tabs.

### 4.2. Glassmorphic Effects & 3D Shadowing
* **Light Glassmorphism Surface:**
  * Structure: Frosted white background `rgba(255, 255, 255, 0.15)` or `rgba(255, 255, 255, 0.42)`.
  * Border: `0.8px` or `1px` with an opaque or matte bronze color to highlight the material edge against the gradient background.
  * Shadow: Creates a solid mass through wide-area shadowing `box-shadow: -5px 8px 5.2px rgba(0,0,0,0.25)`.
* **Skeuomorphic Dial Engraving Effect:**
  * The tempo and pitch control dials use an inward shadow effect (`inset`) to create the illusion of a mechanical dial carved deep into the wood grain: `inset 0px 3px 8px rgba(40, 72, 32, 0.13), inset 0px -1px 5px rgba(180, 155, 70, 0.17)`.