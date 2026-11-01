import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('desktop navigation sidebar remains pinned while the workbench scrolls', async ({ page }) => {
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const sidebar = page.locator('aside');
  await expect(sidebar).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect
    .poll(() => sidebar.evaluate((element) => Math.round(element.getBoundingClientRect().top)), { timeout: 15_000 })
    .toBe(0);
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
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const cards = page.locator('#unified-component-suite [data-jxui-version]');
  await expect(cards).toHaveCount(24);

  const firstDeferredCardId = await page
    .locator('[data-testid="component-preview-stage"][data-preview-state="deferred"]')
    .first()
    .evaluate((element) => element.closest<HTMLElement>('[data-jxui-version]')?.id);
  expect(firstDeferredCardId).toBeTruthy();
  const firstDeferredPreview = page.locator(`[id="${firstDeferredCardId}"] [data-testid="component-preview-stage"]`);
  const lastPreview = cards.last().getByTestId('component-preview-stage');
  await expect(lastPreview).toHaveAttribute('data-preview-state', 'deferred');
  expect(await page.locator('[data-preview-state="ready"]').count()).toBeLessThan(24);

  const deferredTop = await firstDeferredPreview.evaluate(
    (element) => element.getBoundingClientRect().top + window.scrollY
  );
  await page.evaluate((top) => window.scrollTo(0, Math.max(0, top - 160)), deferredTop);
  await expect(firstDeferredPreview).toHaveAttribute('data-preview-state', 'ready');
  await expect(lastPreview).toHaveAttribute('data-preview-state', 'deferred');
});

test('documentation covers all components with detailed API and usage sections', async ({ page }) => {
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open component documentation' }).click();

  await expect(page.getByRole('heading', { name: 'Documentation', level: 1 })).toBeVisible({ timeout: 30_000 });
  await expect(page.getByTestId('docs-component-total')).toHaveText('361');
  await expect(page.getByTestId('docs-component-row')).toHaveCount(48);
  await expect(page.getByRole('button', { name: 'Load 48 more components' })).toBeVisible();
  await page.getByRole('button', { name: 'Load 48 more components' }).click();
  await expect(page.getByTestId('docs-component-row')).toHaveCount(96);

  await page
    .getByRole('navigation', { name: 'Documentation categories' })
    .getByRole('button', { name: /Buttons & Actions/ })
    .click();
  await expect(page.getByTestId('docs-component-row')).toHaveCount(24);

  const component = page.locator('[data-component-id="jx-button"]');
  await component.click();
  await expect(page.getByRole('heading', { name: 'JXButton', level: 2 })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Overview' })).toBeVisible();

  await page.getByRole('tab', { name: /API/ }).click();
  await expect(page.getByText('Props', { exact: true })).toBeVisible();
  await page.getByRole('tab', { name: 'Accessibility' }).click();
  await expect(page.getByText('Accessibility targets, not certification')).toBeVisible();
  await page.getByRole('tab', { name: 'Responsive' }).click();
  await expect(page.getByText('Supported layouts')).toBeVisible();
  await page.getByRole('tab', { name: 'Guidance' }).click();
  await expect(page.getByText('JXUI approach')).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByRole('combobox', { name: 'Category' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Find a component' })).toBeVisible();
  expect(await page.evaluate(() => document.body.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});

test('playground remains usable on mobile and exposes every component', async ({ page }) => {
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?view=workbench');

  const playground = page.locator('#jx-live-playground');
  await playground.locator(':scope > summary').click();

  const componentSelect = page.getByRole('combobox', { name: 'Select component for Live Playground' });
  await expect(componentSelect).toBeVisible();
  await expect(componentSelect.locator('option')).toHaveCount(361);
  const selectMetrics = await componentSelect.evaluate((element) => ({
    width: element.getBoundingClientRect().width,
    viewport: document.documentElement.clientWidth,
  }));
  expect(selectMetrics.width).toBeLessThanOrEqual(selectMetrics.viewport);

  const featuredShelf = playground.locator('details').first();
  expect(await featuredShelf.evaluate((element) => (element as HTMLDetailsElement).open)).toBe(false);

  await page.getByRole('combobox', { name: 'Preview viewport' }).selectOption('mobile');
  const stage = page.getByTestId('live-playground-stage');
  await expect(page.getByRole('combobox', { name: 'Preview viewport' })).toHaveValue('mobile');
  const stageWidth = await stage.evaluate((element) => element.getBoundingClientRect().width);
  const canvasWidth = await stage.evaluate((element) => element.parentElement?.clientWidth || 0);
  expect(stageWidth).toBeLessThanOrEqual(375);
  expect(stageWidth).toBeLessThanOrEqual(canvasWidth);

  const positions = await Promise.all([
    stage.evaluate((element) => element.getBoundingClientRect().top),
    page.getByText('Component Props Controls', { exact: true }).evaluate((element) => element.getBoundingClientRect().top),
    page.getByTestId('live-playground-code').evaluate((element) => element.getBoundingClientRect().top),
  ]);
  expect(positions[0]).toBeLessThan(positions[1]);
  expect(positions[1]).toBeLessThan(positions[2]);
  expect(await page.evaluate(() => document.body.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});

test('glass category accordion preview starts closed and can be toggled', async ({ page }) => {
  test.setTimeout(90_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/?cat=glass-surfaces');

  await expect(page.getByRole('dialog')).toHaveCount(0);
  const card = page.locator('#spec-jx-accordion');
  await card.scrollIntoViewIfNeeded();
  await expect(card.getByTestId('component-preview-stage')).toHaveAttribute('data-preview-state', 'ready');
  const accordion = card.getByRole('button', { name: /Zero-Layout-Shift Morphing Architecture/ });
  await expect(accordion).toHaveAttribute('aria-expanded', 'false');
  await accordion.click();
  await expect(accordion).toHaveAttribute('aria-expanded', 'true');
  await accordion.click();
  await expect(accordion).toHaveAttribute('aria-expanded', 'false');
});