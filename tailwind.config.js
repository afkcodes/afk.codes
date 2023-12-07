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
        secondaryButton: '#33B786',
        hoverSecondaryButton: '#1e996d',
        activeSecondaryButton: '#008254',

        darkButton: '#252525', // Lighter dark button color
        hoverDarkButton: '#383838', // Hover state for lighter dark button
        activeDarkButton: '#1f1f1f', // Active state for lighter dark button

        ghostButtonBg: 'transparent', // Ghost button background color
        ghostButtonBorder: '#ffffff', // Ghost button border color
        hoverGhostButtonBg: 'rgba(255, 255, 255, 0.1)', // Hover state for ghost button background
        activeGhostButtonBg: 'rgba(255, 255, 255, 0.2)', // Active state for ghost button background
        hoverGhostButtonBorder: '#ffffff', // Hover state for ghost button border
        activeGhostButtonBorder: '#ffffff', // Active state for ghost button border

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
