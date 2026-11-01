# JXUI Project Rules & Workflow Standards

## 1. Git & Remote Operations
- Always verify credentials and non-interactive status before pushing to remote repositories.
- In automated environments, never allow `git push` commands to hang indefinitely waiting for interactive credential input.
- Default repository organization is `jacxishipping/jxui-react`.

## 2. UI/UX & Accessibility Standards
- **Zero-Shift Guarantee**: Any state-changing interactive element must pre-allocate or lock bounding geometries (CLS = 0).
- **Mobile Touch Targets**: All interactive buttons, icon buttons, and toggles must meet WCAG 2.1 AA touch target standards (minimum `44px x 44px` on mobile/touch viewports) using `min-h-[44px] min-w-[44px]` and `touch-manipulation`.
- **Kinematics**: Use tactile spring dynamics (`cubic-bezier(0.22, 1, 0.36, 1)`) with subtle active scale down (`active:scale-95` or `0.98`).
