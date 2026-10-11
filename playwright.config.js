import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', fullyParallel: true, workers: 2, timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:4173/rain-loop-website/', headless: true, launchOptions: { executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] } },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    { name: 'phone-small', use: { viewport: { width: 360, height: 780 }, isMobile: true, hasTouch: true } },
    { name: 'phone-large', use: { viewport: { width: 430, height: 932 }, isMobile: true, hasTouch: true } },
    { name: 'tablet', use: { viewport: { width: 820, height: 1180 }, hasTouch: true } }
  ],
  webServer: { command: 'npm run preview -- --host 127.0.0.1 --port 4173', url: 'http://127.0.0.1:4173/rain-loop-website/', reuseExistingServer: !process.env.CI }
});
