// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      spacing: {
        px: '1px',
        '0': '0px',
        '0.5': 'var(--space-0_5, 0.125rem)',
        '1': 'var(--space-1, 0.25rem)',
        '1.5': 'var(--space-1_5, 0.375rem)',
        '2': 'var(--space-2, 0.5rem)',
        '2.5': 'var(--space-2_5, 0.625rem)',
        '3': 'var(--space-3, 0.75rem)',
        '3.5': 'var(--space-3_5, 0.875rem)',
        '4': 'var(--space-4, 1rem)',
        '5': 'var(--space-5, 1.25rem)',
        '6': 'var(--space-6, 1.5rem)',
        '8': 'var(--space-8, 2rem)',
        '10': 'var(--space-10, 2.5rem)',
        '12': 'var(--space-12, 3rem)',
        '16': 'var(--space-16, 4rem)',
        '20': 'var(--space-20, 5rem)',
        '24': 'var(--space-24, 6rem)',
        '32': 'var(--space-32, 8rem)',
        '40': 'var(--space-40, 10rem)',
        '48': 'var(--space-48, 12rem)',
        '56': 'var(--space-56, 14rem)',
        '64': 'var(--space-64, 16rem)'
      },
      fontSize: {
        xs: 'var(--font-xs, 0.75rem)',
        sm: 'var(--font-sm, 0.875rem)',
        base: 'var(--font-base, 1rem)',
        lg: 'var(--font-lg, 1.125rem)',
        xl: 'var(--font-xl, 1.25rem)'
      }
    }
  },
  plugins: []
}
