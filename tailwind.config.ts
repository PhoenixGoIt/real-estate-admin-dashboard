import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1600px",
      },
    },
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        reveal: "reveal 1s ease-in-out",
        message: "message 5 ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spinSlow: 'spin 2s ease infinite',
      },
       animationDelay: {
        '-1.5s': '-1.5s',
        '-1s': '-1s',
        '-0.5s': '-0.5s',
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        reveal: {
          "0%": {
            clipPath: "circle(0% at 0 0)",
          },
          "100%": {
            clipPath: "circle(150% at 0 0)",
          },
        },
        message: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin:{
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(100%)' },
          '50%': { transform: 'translate(100%, 100%)' },
          '75%': { transform: 'translate(0, 100%)' },
        },
      },
      colors: {
        text_Primary_color: "#11142D",
        primary_color: "#475BE8",
        second_text_color: "#808191",
        secondary_color: "#DADEFA",
        bg_color: "#F4F4F4",
        property_purple: "#6C5DD3",
        property_pink: "#FFA2C0",
        property_red: "#F45252",
        property_green: "#7FBA7A",
        opacity_purple: "#CFC8FF",
        green: "#2ED480",
        pink: "#FE6D8E",
        yellow: "#FFCE73",
        orange: "#FD8539",
        white: "#FCFCFC",

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
      },
      borderRadius: {
        full: "9999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
   plugins: [
    require("tailwindcss-animate"),
    // Кастомный плагин animation-delay
    //@ts-ignore
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay') as Record<string, string>;
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.animation-delay-${e(key)}`]: { animationDelay: value },
      }));
      addUtilities(utilities);
    },
  ],
  safelist: [{ pattern: /^w-\[.*px\]/ }, { pattern: /^w-\[.*%\]/ }],
} satisfies Config;

export default config;
