import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111111",
          inverse: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5B5FEF",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F2F2F2",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#111111",
        },
        canvas: "#FFFFFF",
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F7F5",
        },
        inverse: {
          DEFAULT: "#111111",
          surface: "#1C1C1C",
        },
        success: "#1E8E5A",
        warning: "#B7791F",
        error: "#C0362C",
        info: "#2563AA",
        accent: {
          available: "#22C55E",
        },
        text: {
          primary: "#111111",
          secondary: "#525252",
          muted: "#8A8A8A",
          disabled: "#BDBDBD",
          inverse: "#FFFFFF",
        },
        state: {
          hover: "rgba(0, 0, 0, 0.06)",
          active: "rgba(0, 0, 0, 0.12)",
          focus: "#5B5FEF",
          "disabled-bg": "#F2F2F2",
        },
        border: {
          default: "#E5E5E5",
          subtle: "#F0F0F0",
          strong: "#D4D4D4",
          inverse: "#333333",
        },
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        30: "120px",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        pill: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.04)",
        sm: "0 2px 6px rgba(0,0,0,0.06)",
        md: "0 6px 16px rgba(0,0,0,0.08)",
        lg: "0 12px 32px rgba(0,0,0,0.10)",
        xl: "0 24px 48px rgba(0,0,0,0.12)",
      },
      fontSize: {
        display: ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        h1: ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["36px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        button: ["15px", { lineHeight: "1", letterSpacing: "0", fontWeight: "500" }],
        label: ["13px", { lineHeight: "1.3", letterSpacing: "0.01em", fontWeight: "500" }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
