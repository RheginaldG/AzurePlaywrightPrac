import { test, expect } from '@playwright/test';

test('Adding Materials with proper requirements', async ({ page }) => {
  await page.goto('http://192.168.2.24:8002/');
  await page.locator('#input-with-sx').click();
  await page.locator('#input-with-sx').fill('admin');
  await page.locator('#input-with-sx').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('admin');
  await page.getByLabel('Icon Button').first().click();
  await page.goto('http://192.168.2.24:8002/item-categories');
  await page.locator('[id="Item\\ Categories\\ Code"]').click();
  await page.locator('[id="Item\\ Categories\\ Code"]').fill('MM');
  await page.locator('[id="Item\\ Categories\\ Description"]').click();
  await page.locator('[id="Item\\ Categories\\ Description"]').fill('Mixed Materials');
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'KG' }).click();
  await page.getByRole('button', { name: 'Text Button' }).click();
  await expect(page.getByRole('cell', { name: 'MM' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Mixed Materials' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'KG' })).toBeVisible();
});