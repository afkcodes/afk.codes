/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './renderer/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        darkBackground: '#1a1a1a',

        // Text colors
        lightText: '#ffffff',
        mediumText: '#cccccc',
        darkText: '#333333',
        accentText: '#b8c7e0',

        // Accent colors
        primaryAccent: '#E74F5B',

        // Error/Warning colors
        error: '#ff6347',
        warning: '#ffA500',

        // Call to Action (CTA) colors
        primaryCTA: '#33B786',
        hoverPrimaryCTA: '#1e996d',
        activePrimaryCTA: '#008254',

        // Primary Button
        primaryButton: '#E74F5B',
        hoverPrimaryButton: '#b73b4a',
        activePrimaryButton: '#902731',

        // Secondary Button
        secondaryButton: '#00bcd4',
        hoverSecondaryButton: '#0088a3',
        activeSecondaryButton: '#006772',

        // Links
        link: '#58a6ff',
        hoverLink: '#448eff',
        activeLink: '#2354cc',

        // Disabled state
        disabled: '#666666'
      }
    }
  },
  plugins: []
};
