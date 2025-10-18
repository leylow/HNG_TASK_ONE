# HNG_TASK_ONE
# Profile Card Component

A fully accessible, responsive profile card component built with semantic HTML, vanilla CSS, and JavaScript. Perfect for portfolios, team pages, or user profiles.

## Features

✅ **Semantic HTML** - Uses proper HTML5 elements (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)  
✅ **Fully Accessible** - WCAG 2.1 compliant with keyboard navigation and screen reader support  
✅ **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop  
✅ **Real-time Updates** - Current time displayed in milliseconds, updating every 100ms  
✅ **Test-Ready** - Every element includes `data-testid` attributes for automated testing  
✅ **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript  
✅ **Modern Styling** - Clean, professional design with smooth transitions and hover effects  

## Quick Start

### Option 1: Direct File Opening (Easiest)
1. Download or clone this repository
2. Open `profileCard.html` directly in your web browser
3. That's it! No build tools or server needed


## Component Structure

### HTML Elements & Data-TestIDs

| Element | Data-TestID | Purpose |
|---------|------------|---------|
| `<article>` | `test-profile-card` | Root container for the entire card |
| `<h1>` | `test-user-name` | User's name |
| `<p>` | `test-user-bio` | Short biography/description |
| `<span>` | `test-user-time` | Current time in milliseconds |
| `<img>` | `test-user-avatar` | User's profile photo |
| `<nav>` | `test-user-social-links` | Container for social media links |
| `<a>` | `test-user-social-{network}` | Individual social links (e.g., `test-user-social-github`) |
| `<section>` | `test-user-hobbies` | List of hobbies |
| `<section>` | `test-user-dislikes` | List of dislikes |

### Responsive Breakpoints

- **Mobile** (< 640px): Vertical stack layout
- **Tablet** (640px - 1024px): Centered card with optimized spacing
- **Desktop** (> 1024px): Two-column grid (avatar left, content right)


## Accessibility Features

### Keyboard Navigation
- All interactive elements (links, buttons) are keyboard focusable
- Tab through elements in logical order
- Visible focus indicators with 2px outline

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on navigation
- Alt text on images
- Skip-to-main-content link

### Visual Accessibility
- High contrast ratios (WCAG AA compliant)
- Focus visible states
- Readable font sizes (minimum 14px)
- Proper line-height for readability (1.6)


## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external dependencies** - Loads instantly
- **Minimal CSS** - ~8KB uncompressed
- **Efficient JavaScript** - Updates every 100ms (configurable)
- **Optimized images** - Use `loading="lazy"` for better performance

## Accessibility Compliance

- ✅ WCAG 2.1 Level AA
- ✅ Semantic HTML5
- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ High contrast ratios
- ✅ Focus visible states


**Last Updated:** October 2025  
**Version:** 1.0.0
\`\`\`

