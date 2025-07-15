import { test, expect } from '@playwright/test';

test('basic MCP check', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
