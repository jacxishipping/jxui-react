import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('desktop navigation sidebar remains pinned while the workbench scrolls', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const sidebar = page.locator('aside');
  await expect(sidebar).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(() => sidebar.evaluate((element) => Math.round(element.getBoundingClientRect().top))).toBe(0);
});

test('mobile navigation contains focus and restores it when closed', async ({ page }) => {
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const openButton = page.getByRole('button', { name: 'Open navigation sidebar' });
  await openButton.click();

  const drawer = page.getByRole('dialog', { name: 'Navigation drawer' });
  await expect(drawer.getByRole('textbox').first()).toBeFocused();

  await drawer.getByRole('button', { name: 'Close navigation sidebar' }).focus();
  await page.keyboard.press('Shift+Tab');
  await expect.poll(() => drawer.evaluate((element) => element.contains(document.activeElement))).toBe(true);

  const axeResults = await new AxeBuilder({ page })
    .setLegacyMode()
    .include('#mobile-navigation-drawer')
    .withRules([
      'aria-allowed-attr',
      'aria-dialog-name',
      'aria-required-children',
      'aria-required-parent',
      'aria-valid-attr-value',
      'button-name',
      'color-contrast',
      'label',
    ])
    .analyze();
  expect(axeResults.violations).toEqual([]);

  await page.keyboard.press('Escape');
  await expect(drawer).toBeHidden();
  await expect(openButton).toBeFocused();
  expect(await page.evaluate(() => document.body.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});

test('mobile category selection and active filter chips recover results', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('link', { name: 'Browse components' }).click();

  const categoryFilter = page.getByRole('combobox', { name: 'Filter by category' });
  await categoryFilter.selectOption('inputs-forms');
  await expect(page.getByTestId('component-results-count')).toHaveText('32 results');

  const activeFilters = page.getByRole('group', { name: 'Active filters' });
  await activeFilters.getByRole('button', { name: 'Remove category filter' }).click();
  await expect(page.getByTestId('component-results-count')).toHaveText('361 results');

  await categoryFilter.selectOption('inputs-forms');
  await page.getByRole('combobox', { name: 'Filter by difficulty' }).selectOption('advanced');
  await expect(activeFilters.getByRole('button', { name: 'Remove difficulty filter' })).toBeVisible();
  await activeFilters.getByRole('button', { name: 'Clear all' }).click();
  await expect(page.getByTestId('component-results-count')).toHaveText('361 results');

  await page.getByPlaceholder('Search components, tags, props...').fill('no-such-component');
  await expect(page.getByText('No matching components found')).toBeVisible();
  await page.getByRole('button', { name: 'Reset All Filters' }).click();
  await expect(page.getByTestId('component-results-count')).toHaveText('361 results');
});

test('component previews mount as their cards approach the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const cards = page.locator('#unified-component-suite [data-jxui-version]');
  await expect(cards).toHaveCount(24);

  const firstPreview = cards.first().getByTestId('component-preview-stage');
  const lastPreview = cards.last().getByTestId('component-preview-stage');
  await expect(lastPreview).toHaveAttribute('data-preview-state', 'deferred');
  expect(await page.locator('[data-preview-state="ready"]').count()).toBeLessThan(24);

  await cards.last().scrollIntoViewIfNeeded();
  await expect(lastPreview).toHaveAttribute('data-preview-state', 'ready');
  await expect(firstPreview).toHaveAttribute('data-preview-state', 'ready');
});