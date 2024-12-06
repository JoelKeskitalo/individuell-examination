import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.jsx?$/], // Endast transformera JS/JSX
    },
    css: false, // Ignorera CSS helt under tester
  },
});
