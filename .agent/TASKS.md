# Task Breakdown - Fixes & Improvements

This document breaks down the review findings into small, testable tasks. Each task includes:
- What to change
- How to test
- UI impact assessment

---

## 🔴 Phase 1: Critical Bug Fixes (No UI Impact)

### Task 1: Fix Invalid Section IDs
**Files:** `index.html`, `projects.html`
**Lines:** 
- `index.html`: 27, 37
- `projects.html`: 24, 46, 67, 114

**Change:** Remove `#` from section IDs
- `id="#hero"` → `id="hero"`
- `id="#social"` → `id="social"`
- `id="#about"` → `id="about"`
- etc.

**Test:**
1. Open browser DevTools
2. Run `document.getElementById('hero')` - should return element (not null)
3. Check that anchor links work if any exist
4. Verify no console errors

**UI Impact:** None - IDs are for JavaScript/anchors, not styling

---

### Task 2: Fix Empty Link Hrefs
**File:** `index.html`
**Lines:** 30, 231

**Change:**
- Line 30: `<a href="">nib</a>` → Add URL or make it plain text
- Line 231: `<a href="" class="description">figjam file</a>` → Add FigJam URL or remove link

**Test:**
1. Click both links - should navigate or not be clickable
2. Check hover states work correctly
3. Verify no broken link indicators

**UI Impact:** None - fixes broken functionality

---

### Task 3: Fix Typos
**Files:** `index.html`, `projects.html`
**Lines:**
- `index.html` line 242: "satistifaction" → "satisfaction"
- `projects.html` line 88: "Universiy" → "University"

**Change:** Simple text corrections

**Test:**
1. Visual inspection of text
2. Spell check if available
3. Verify text displays correctly

**UI Impact:** None - text content only

---

### Task 4: Remove Unused Font Reference
**File:** `styles.css`
**Line:** 43-47

**Change:** Remove entire `@font-face` block for GT Maru font

**Test:**
1. Check browser DevTools Network tab - no 404 for font file
2. Verify page still loads correctly
3. Check no layout shifts

**UI Impact:** None - font not used anywhere

---

## 🟡 Phase 2: Accessibility Fixes (No UI Impact)

### Task 5: Add Alt Text to Logo Images
**Files:** `index.html`, `projects.html`
**Lines:**
- `index.html`: 18, 384
- `projects.html`: 14

**Change:** 
- `alt=""` → `alt="Luke Ylias logo"` or `alt="Home"` for navigation logo

**Test:**
1. Use screen reader (VoiceOver/NVDA) - should announce alt text
2. Hover over image - tooltip should show
3. Visual appearance unchanged

**UI Impact:** None - alt text is invisible to sighted users

---

### Task 6: Add Alt Text to Profile Image
**File:** `projects.html`
**Line:** 26

**Change:** 
- `alt=""` → `alt="Luke Ylias in Queenstown"` or similar descriptive text

**Test:**
1. Screen reader announces description
2. Image displays normally
3. No layout changes

**UI Impact:** None

---

### Task 7: Add Alt Text to Tool Icons
**File:** `projects.html`
**Lines:** 119, 128, 138, 148

**Change:**
- `alt=""` → Descriptive text like `alt="Granola logo"`, `alt="Whispr Flow logo"`, etc.

**Test:**
1. Screen reader announces each tool name
2. Icons display normally
3. No visual changes

**UI Impact:** None

---

### Task 8: Add ARIA Attributes to Modal
**File:** `index.html`
**Lines:** 389-400

**Change:**
- Add `role="dialog"` and `aria-modal="true"` to modal div
- Add `aria-label="Close modal"` to close button
- Add `aria-labelledby` pointing to modal title

**Test:**
1. Open modal with screen reader - should announce as dialog
2. Close button should be announced properly
3. Modal functionality unchanged
4. Visual appearance unchanged

**UI Impact:** None - ARIA is for assistive tech only

---

## 🔵 Phase 3: Code Quality (Low UI Risk)

### Task 9: Extract Scroll Event Listener
**Files:** `index.html`, `projects.html`
**Current:** Duplicate code in both files (lines 404-411 in index.html, 197-204 in projects.html)

**Change:**
1. Create `js/main.js`
2. Move scroll listener code to external file
3. Remove from both HTML files
4. Add `<script src="js/main.js"></script>` before closing `</body>`

**Test:**
1. Scroll page - header should still get `scrolled` class
2. Check both pages work
3. Verify no console errors
4. Visual appearance unchanged

**UI Impact:** Very Low - same functionality, different location

---

### Task 10: Extract Modal Functionality
**File:** `index.html`
**Lines:** 414-460

**Change:**
1. Move modal code to `js/modal.js` or add to `js/main.js`
2. Remove from HTML
3. Ensure script loads before use

**Test:**
1. Click project cards - modals open
2. Close with X button - works
3. Close with Escape key - works
4. Click outside modal - closes
5. Modal content displays correctly
6. No visual changes

**UI Impact:** Very Low - functionality preserved

---

### Task 11: Extract Page Transition Code
**Files:** `index.html`, `projects.html`
**Lines:**
- `index.html`: 463-482
- `projects.html`: 207-228

**Change:**
1. Move transition code to external JS
2. Remove from both HTML files
3. Ensure script loads

**Test:**
1. Click navigation links - fade transition works
2. Page loads correctly after transition
3. No visual glitches
4. Works on both pages

**UI Impact:** Very Low - same behavior

---

### Task 12: Move Inline Styles - Index Page
**File:** `index.html`
**Lines:** 151-156 (iframe styles)

**Change:**
1. Create CSS class `.modal-video iframe` in `styles.css`
2. Remove inline `style` attribute
3. Add class to iframe

**Test:**
1. Open modal with video
2. Video displays with same dimensions
3. Border radius matches
4. Margin matches
5. No layout shifts

**UI Impact:** Low - must match existing styles exactly

---

### Task 13: Move Inline Styles - Projects Page
**File:** `projects.html`
**Lines:** 177, 181, 186 (background-image styles)

**Change:**
1. Create CSS classes for each image container
2. Move `background-image` to CSS
3. Remove inline styles

**Test:**
1. Images display correctly
2. Stacking/positioning unchanged
3. No layout shifts
4. Responsive behavior unchanged

**UI Impact:** Low - must preserve exact positioning

---

### Task 14: Remove Unused CSS
**File:** `styles.css`
**Lines:** 851-887 (test-hero, test-heading, test-p, site-notice)

**Change:** Delete unused CSS classes

**Test:**
1. Page displays normally
2. No broken styles
3. Check DevTools - no references to removed classes
4. Visual appearance unchanged

**UI Impact:** None - classes not used

---

### Task 15: Remove Material Icons (If Unused)
**File:** `index.html`
**Lines:** 9-12

**Change:** 
1. Check if Material Icons are used in HTML
2. If only in CSS (`.read-more-btn .material-icons`), check if that class is used
3. If unused, remove Google Fonts link

**Test:**
1. Check all icons display correctly
2. No missing icons
3. Page loads faster (one less request)
4. Visual appearance unchanged

**UI Impact:** None if truly unused, but verify first

---

### Task 16: Standardize LinkedIn URLs
**File:** `index.html`
**Lines:** 77, 373

**Change:** Use consistent format (prefer `https://www.linkedin.com/in/lukeylias/`)

**Test:**
1. Both links navigate to same profile
2. Links work correctly
3. No visual changes

**UI Impact:** None

---

### Task 17: Remove Commented CSS
**File:** `styles.css`
**Line:** 58

**Change:** Remove commented line `/* background-color: #1a1b1f; */`

**Test:**
1. Page displays normally
2. Background color unchanged (should be `#171923` from line 59)
3. No visual changes

**UI Impact:** None - commented code

---

## 🟢 Phase 4: SEO & Performance (No UI Impact)

### Task 18: Add Meta Descriptions
**Files:** `index.html`, `projects.html`

**Change:**
- Add `<meta name="description" content="...">` to `<head>` of both files
- Unique descriptions for each page

**Test:**
1. Check page source - meta tags present
2. Verify in browser DevTools
3. No visual changes

**UI Impact:** None - meta tags invisible

---

### Task 19: Add Open Graph Tags
**Files:** `index.html`, `projects.html`

**Change:**
- Add OG tags to `<head>`:
  - `og:title`
  - `og:description`
  - `og:image`
  - `og:url`
  - `og:type`

**Test:**
1. Use Facebook Debugger or similar tool
2. Verify tags appear
3. No visual changes to page

**UI Impact:** None - meta tags only

---

### Task 20: Add Lazy Loading to Images
**Files:** `index.html`, `projects.html`

**Change:**
- Add `loading="lazy"` to images below the fold
- Keep above-fold images without lazy loading

**Test:**
1. Check Network tab - images load as you scroll
2. Above-fold images load immediately
3. No layout shifts
4. Visual appearance unchanged

**UI Impact:** None - same images, different loading timing

---

## Testing Checklist (After All Changes)

### Visual Testing
- [ ] Homepage displays correctly on desktop
- [ ] Homepage displays correctly on mobile
- [ ] About page displays correctly on desktop
- [ ] About page displays correctly on mobile
- [ ] Modal opens and displays correctly
- [ ] All images load and display
- [ ] Navigation works
- [ ] Hover states work
- [ ] Colors and fonts unchanged

### Functional Testing
- [ ] All links work
- [ ] Modal opens/closes correctly
- [ ] Page transitions work
- [ ] Scroll effects work
- [ ] No JavaScript errors in console
- [ ] No 404 errors in Network tab

### Accessibility Testing
- [ ] Screen reader can navigate site
- [ ] All images have alt text
- [ ] Modal is accessible
- [ ] Keyboard navigation works
- [ ] Focus indicators visible

### Performance Testing
- [ ] Page loads quickly
- [ ] Images lazy load correctly
- [ ] No unnecessary requests
- [ ] No console errors

---

## Risk Assessment

**High Safety (No UI Risk):**
- Tasks 1-4, 5-8, 14, 16-19

**Medium Safety (Low UI Risk):**
- Tasks 9-11 (JavaScript extraction - same code, different location)
- Tasks 12-13 (Inline styles - must match exactly)

**Requires Careful Testing:**
- Task 15 (Material Icons - verify not used first)
- Task 20 (Lazy loading - test image loading behavior)

---

## Recommended Order

1. **Start with Phase 1** - Critical bugs, zero UI risk
2. **Then Phase 2** - Accessibility, zero UI risk
3. **Then Phase 4** - SEO/Performance, zero UI risk
4. **Finally Phase 3** - Code quality, requires careful testing

This order ensures we fix critical issues first, then improve accessibility and SEO, and finally refactor code with careful testing.

