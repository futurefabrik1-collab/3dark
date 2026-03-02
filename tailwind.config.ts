import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Rajdhani", "Tahoma", "sans-serif"], // Changed to Rajdhani for headers
        mono: ["Space Mono", "monospace"],
        
        // Urban font variations for testing - color coded
        'urban-1': ["Anton", "Impact", "sans-serif"],           // Red accent - Bold Impact
        'urban-2': ["Bebas Neue", "Arial Black", "sans-serif"], // Blue accent - Tall & Condensed
        'urban-3': ["Oswald", "Arial Narrow", "sans-serif"],    // Green accent - Modern Street
        'urban-4': ["Rajdhani", "Tahoma", "sans-serif"],        // Purple accent - Tech/Cyberpunk
        'urban-5': ["Barlow Condensed", "Arial", "sans-serif"], // Orange accent - Industrial
      },
      fontSize: {
        // Base sizes increased by 2 points (from default Tailwind)
        xs: ['0.875rem', { lineHeight: '1.25rem' }],      // was 0.75rem
        sm: ['1rem', { lineHeight: '1.5rem' }],           // was 0.875rem
        base: ['1.125rem', { lineHeight: '1.75rem' }],    // was 1rem
        lg: ['1.25rem', { lineHeight: '1.875rem' }],      // was 1.125rem
        xl: ['1.375rem', { lineHeight: '2rem' }],         // was 1.25rem
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }],   // was 1.5rem
        '3xl': ['2rem', { lineHeight: '2.5rem' }],        // was 1.875rem
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],     // was 2.25rem
        '5xl': ['3.125rem', { lineHeight: '1.1' }],       // was 3rem
        '6xl': ['3.875rem', { lineHeight: '1.1' }],       // was 3.75rem
        '7xl': ['5rem', { lineHeight: '1.05' }],          // was 4.5rem
        '8xl': ['6.25rem', { lineHeight: '1' }],          // was 6rem
        '9xl': ['8.25rem', { lineHeight: '1' }],          // was 8rem
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        glow: "hsl(var(--glow))",
        "glow-muted": "hsl(var(--glow-muted))",
        surface: "hsl(var(--surface))",
        "surface-elevated": "hsl(var(--surface-elevated))",
        parchment: "hsl(var(--parchment))",
        ink: "hsl(var(--ink))",
        "ink-light": "hsl(var(--ink-light))",
        sketch: "hsl(var(--sketch))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "sketch-in": {
          "0%": { opacity: "0", transform: "scale(0.95) rotate(-1deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "draw-line": "draw-line 2s ease-out forwards",
        "pulse-gentle": "pulse-gentle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "sketch-in": "sketch-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
