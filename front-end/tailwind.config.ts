import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#eba280",
        "primary-fixed-dim": "#e9c349",
        "on-tertiary-fixed-variant": "#6d391e",
        "tertiary-fixed": "#ffdbcc",
        "surface-container-low": "#f4f4f3",
        "on-secondary-container": "#684000",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#e2e2e2",
        "inverse-surface": "#2f3130",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#2a1700",
        "primary-container": "#d4af37",
        "on-tertiary-fixed": "#351000",
        "secondary-fixed-dim": "#ffb95f",
        "on-tertiary": "#ffffff",
        "secondary-container": "#fea619",
        "secondary-fixed": "#ffddb8",
        "surface-container-high": "#e8e8e7",
        "primary": "#735c00",
        "on-tertiary-container": "#6b371d",
        "on-secondary-fixed-variant": "#653e00",
        "on-background": "#1a1c1c",
        "primary-fixed": "#ffe088",
        "secondary": "#855300",
        "on-error": "#ffffff",
        "inverse-on-surface": "#f1f1f0",
        "on-primary-fixed-variant": "#574500",
        "background": "#f9f9f8",
        "on-surface-variant": "#4d4635",
        "on-primary": "#ffffff",
        "surface-tint": "#735c00",
        "surface-dim": "#dadad9",
        "inverse-primary": "#e9c349",
        "surface": "#f9f9f8",
        "outline": "#7f7663",
        "surface-bright": "#f9f9f8",
        "tertiary": "#895033",
        "tertiary-fixed-dim": "#ffb694",
        "surface-container": "#eeeeed",
        "on-primary-fixed": "#241a00",
        "surface-container-highest": "#e2e2e2",
        "on-surface": "#1a1c1c",
        "outline-variant": "#d0c5af",
        "on-primary-container": "#554300",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "error": "#ba1a1a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-sm": ["Playfair Display", "serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "label-sm": ["Be Vietnam Pro", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"]
      },
      fontSize: {
        "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "display-lg": ["56px", {"lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "display-lg-mobile": ["40px", {"lineHeight": "48px", "fontWeight": "700"}],
        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
      }
    }
  },
  plugins: [],
}

export default config
