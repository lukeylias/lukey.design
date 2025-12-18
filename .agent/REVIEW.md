# Project Review: lukeysite

## Project Overview

Personal portfolio website for Luke Ylias, Senior Product Designer. The site features a dark theme, project showcase with modal functionality, and an about page.

---

## 🔴 Critical Issues

### 1. Invalid Section IDs

**Location:** `index.html` (lines 27, 37), `projects.html` (lines 24, 46, 67, 114)

- **Issue:** Section IDs have `#` prefix (e.g., `id="#hero"`), which is invalid HTML
- **Impact:** IDs won't work for anchor links or JavaScript targeting
- **Fix:** Remove `#` prefix (e.g., `id="hero"`)

### 2. Empty Link Hrefs

**Location:** `index.html` (lines 30, 231)

- **Issue:** Two links have empty `href=""` attributes
  - Line 30: `<a href="">nib</a>`
  - Line 231: `<a href="" class="description">figjam file</a>`
- **Impact:** Broken links, poor UX
- **Fix:** Add proper URLs or remove links if not needed

### 3. Missing Font File

**Location:** `styles.css` (line 43)

- **Issue:** References `GT-Maru-Mega-Mini-Trial.otf` which doesn't exist in `assets/fonts/`
- **Impact:** Font fallback, potential layout issues
- **Fix:** Remove unused `@font-face` declaration or add the font file

### 4. Typographical Errors

**Location:**

- `index.html` line 242: "satistifaction" → "satisfaction"
- `projects.html` line 88: "Universiy" → "University"

---

## 🟡 Accessibility Issues

### 1. Missing Alt Text

**Location:** Multiple images across both HTML files

- **Issue:** 8 images have empty `alt=""` attributes
  - Logo images (3 instances)
  - Profile image
  - Tool icon images (4 instances)
- **Impact:** Screen readers can't describe images
- **Fix:** Add descriptive alt text for all images

### 2. Missing ARIA Labels

**Location:** Modal close button (`index.html` line 392)

- **Issue:** Close button lacks `aria-label`
- **Impact:** Screen reader users won't know what the button does
- **Fix:** Add `aria-label="Close modal"`

### 3. Missing Skip to Main Content Link

- **Issue:** No skip navigation link for keyboard users
- **Impact:** Keyboard users must tab through entire navigation
- **Fix:** Add skip link at top of page

### 4. Modal Accessibility

- **Issue:** Modal doesn't trap focus or announce to screen readers
- **Impact:** Poor experience for assistive technology users
- **Fix:** Add `role="dialog"`, `aria-modal="true"`, and focus management

---

## 🟠 SEO & Meta Issues

### 1. Missing Meta Description

- **Issue:** No `<meta name="description">` tags
- **Impact:** Poor search engine optimization
- **Fix:** Add unique meta descriptions for each page

### 2. Missing Open Graph Tags

- **Issue:** No Open Graph or Twitter Card meta tags
- **Impact:** Poor social media link previews
- **Fix:** Add OG tags for title, description, image, URL

### 3. Missing Structured Data

- **Issue:** No JSON-LD structured data for Person/Portfolio
- **Impact:** Missed opportunity for rich search results
- **Fix:** Add structured data markup

---

## 🔵 Code Quality Issues

### 1. Duplicate JavaScript Code

**Location:** Both HTML files

- **Issue:** Scroll event listener code duplicated in both files
- **Impact:** Code duplication, harder to maintain
- **Fix:** Extract to external `script.js` file

### 2. Inline Styles

**Location:** `index.html` (lines 151-156), `projects.html` (lines 177, 181, 186)

- **Issue:** Inline `style` attributes in HTML
- **Impact:** Harder to maintain, violates separation of concerns
- **Fix:** Move to CSS classes

### 3. Unused CSS

**Location:** `styles.css`

- **Issue:** Unused classes:
  - `.test-hero` (line 851)
  - `.test-heading` (line 859)
  - `.test-p` (line 869)
  - `.site-notice` (line 877)
- **Impact:** Unnecessary CSS bloat
- **Fix:** Remove unused styles

### 4. Unused External Resource

**Location:** `index.html` (lines 9-12)

- **Issue:** Google Material Icons loaded but only used in CSS (not in HTML)
- **Impact:** Unnecessary HTTP request
- **Fix:** Remove if not needed, or use SVG icons instead

### 5. Inconsistent URLs

**Location:** LinkedIn links

- **Issue:** Two different LinkedIn URL formats:
  - `https://www.linkedin.com/in/lukeylias/` (line 77)
  - `https://linkedin.com/in/lukeylias` (line 373)
- **Impact:** Inconsistency (though both work)
- **Fix:** Standardize to one format

### 6. Commented Code

**Location:** `styles.css` (line 58)

- **Issue:** Commented out `background-color: #1a1b1f;`
- **Impact:** Dead code
- **Fix:** Remove if not needed

---

## 🟢 Performance Issues

### 1. No Image Lazy Loading

- **Issue:** Images load immediately, even if below fold
- **Impact:** Slower initial page load
- **Fix:** Add `loading="lazy"` to images below fold

### 2. No Image Optimization

- **Issue:** Images may not be optimized (WebP, compression)
- **Impact:** Larger file sizes, slower loads
- **Fix:** Optimize images and consider WebP format

### 3. Inline JavaScript

- **Issue:** JavaScript embedded in HTML
- **Impact:** Can't be cached separately
- **Fix:** Move to external file

---

## 📋 Best Practices Recommendations

### 1. Code Organization

- **Recommendation:** Create separate files:
  - `js/main.js` - Main JavaScript
  - `js/modal.js` - Modal functionality
  - Consider CSS organization (variables, components, utilities)

### 2. Semantic HTML

- **Recommendation:** Use semantic elements more consistently
  - Consider `<article>` for projects
  - Use `<time>` for dates

### 3. CSS Variables

- **Recommendation:** Extract repeated colors to CSS custom properties
  - `#60b3fb` (blue accent) appears 20+ times
  - `#171923` (background) appears multiple times
  - `#e3e6e8` (text) appears multiple times

### 4. Responsive Images

- **Recommendation:** Use `<picture>` element or `srcset` for responsive images

### 5. Error Handling

- **Recommendation:** Add error handling for modal functionality
  - Check if elements exist before adding event listeners
  - Handle edge cases

### 6. Browser Compatibility

- **Recommendation:** Add vendor prefixes where needed
  - `-webkit-backdrop-filter` is present, but check others

### 7. Security

- **Recommendation:** Add `rel="noopener noreferrer"` to all external links (already present, good!)

### 8. README

- **Recommendation:** Add project description, setup instructions, and tech stack to README.md

---

## ✅ What's Working Well

1. **Clean Design:** Modern, professional dark theme
2. **Responsive Design:** Good mobile breakpoints
3. **Modal Functionality:** Well-implemented modal system
4. **External Link Security:** Proper use of `rel="noopener noreferrer"`
5. **Font Loading:** Good use of `font-display: swap`
6. **Page Transitions:** Nice fade effect between pages

---

## Priority Fixes

### High Priority (Fix Immediately)

1. Fix invalid section IDs (remove `#` prefix)
2. Fix empty link hrefs
3. Add alt text to all images
4. Fix typos (satisfaction, University)
5. Remove unused font reference

### Medium Priority (Fix Soon)

1. Extract JavaScript to external file
2. Add meta descriptions
3. Add ARIA labels
4. Remove unused CSS
5. Move inline styles to CSS

### Low Priority (Nice to Have)

1. Add structured data
2. Optimize images
3. Add lazy loading
4. Organize CSS with variables
5. Add skip navigation link

---

## Summary

The site has a solid foundation with good design and functionality. The main issues are:

- **Accessibility:** Missing alt text and ARIA labels
- **Code Quality:** Some duplication and unused code
- **SEO:** Missing meta tags
- **Bugs:** Invalid IDs, empty links, typos

Most fixes are straightforward and will significantly improve the site's quality, accessibility, and maintainability.
