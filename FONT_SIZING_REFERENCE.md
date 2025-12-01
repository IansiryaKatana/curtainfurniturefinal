# Font Sizing Reference - VIP Curtains & Furniture

## Breakpoints
- **Mobile**: < 768px (default)
- **Tablet/Laptop**: ≥ 768px (md:)
- **Desktop**: ≥ 1024px (lg:)
- **Large Desktop**: ≥ 1280px (xl:)

---

## Base Font Sizes

### Body Font (Inter, sans-serif)
| Device | Size | Location |
|--------|------|----------|
| Mobile | **13px** | `src/index.css` line 75 |
| Tablet (≥768px) | **15px** | `src/index.css` line 81 |
| Desktop (≥1024px) | **16px** | `src/index.css` line 87 |

---

## Paragraph & Base Text Sizes

### Paragraphs & `.text-base` (Inter, sans-serif)
| Device | Size | Rem Value | Location |
|--------|------|-----------|----------|
| Mobile | **14px** | 0.875rem | `src/index.css` line 92 |
| Tablet (≥768px) | **15px** | 0.9375rem | `src/index.css` line 98 |
| Desktop (≥1024px) | **16px** | 1rem | `src/index.css` line 104 |

### `.text-sm` (Inter, sans-serif)
| Device | Size | Rem Value | Location |
|--------|------|-----------|----------|
| Mobile | **12px** | 0.75rem | `src/index.css` line 109 |
| Tablet (≥768px) | **13px** | 0.8125rem | `src/index.css` line 114 |
| Desktop (≥1024px) | **14px** | 0.875rem | `src/index.css` line 120 |

---

## Tailwind Default Text Sizes
*Note: These use rem units relative to root (16px default), so actual rendered size depends on browser root font-size*

### Standard Tailwind Classes (No Custom Override)
| Class | Mobile | Tablet | Desktop | Notes |
|-------|--------|--------|---------|-------|
| `.text-xs` | **12px** (0.75rem) | **12px** | **12px** | Tailwind default |
| `.text-sm` | **12px** (custom) | **13px** | **14px** | *Custom override in CSS* |
| `.text-base` | **14px** (custom) | **15px** | **16px** | *Custom override in CSS* |
| `.text-lg` | **18px** (1.125rem) | **18px** | **18px** | Tailwind default |
| `.text-xl` | **20px** (1.25rem) | **20px** | **20px** | Tailwind default |
| `.text-2xl` | **24px** (1.5rem) | **24px** | **24px** | Tailwind default |
| `.text-3xl` | **30px** (1.875rem) | **30px** | **30px** | Tailwind default |
| `.text-4xl` | **36px** (2.25rem) | **36px** | **36px** | Tailwind default |
| `.text-5xl` | **48px** (3rem) | **48px** | **48px** | Tailwind default |
| `.text-6xl` | **60px** (3.75rem) | **60px** | **60px** | Tailwind default |
| `.text-7xl` | **72px** (4.5rem) | **72px** | **72px** | Tailwind default |

---

## Heading Sizes (Cormorant Garamond, serif)

### H1
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **36px** | `text-4xl` | `src/index.css` line 131 |
| Tablet (≥768px) | **48px** | `md:text-5xl` | `src/index.css` line 131 |
| Desktop (≥1024px) | **60px** | `lg:text-6xl` | `src/index.css` line 131 |
| Large Desktop (≥1280px) | **72px** | `xl:text-7xl` | `src/index.css` line 131 |

### H2
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **30px** | `text-3xl` | `src/index.css` line 136 |
| Tablet (≥768px) | **36px** | `md:text-4xl` | `src/index.css` line 136 |
| Desktop (≥1024px) | **48px** | `lg:text-5xl` | `src/index.css` line 136 |
| Large Desktop (≥1280px) | **60px** | `xl:text-6xl` | `src/index.css` line 136 |

### H3
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **24px** | `text-2xl` | `src/index.css` line 140 |
| Tablet (≥768px) | **30px** | `md:text-3xl` | `src/index.css` line 140 |
| Desktop (≥1024px) | **36px** | `lg:text-4xl` | `src/index.css` line 140 |

### H4
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **20px** | `text-xl` | `src/index.css` line 145 |
| Tablet (≥768px) | **24px** | `md:text-2xl` | `src/index.css` line 145 |

### H5
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **18px** | `text-lg` | `src/index.css` line 149 |
| Tablet (≥768px) | **20px** | `md:text-xl` | `src/index.css` line 149 |

### H6
| Device | Size | Tailwind Classes | Location |
|--------|------|------------------|----------|
| Mobile | **14px** | `text-base` | `src/index.css` line 154 |
| Tablet (≥768px) | **18px** | `md:text-lg` | `src/index.css` line 154 |

---

## Component-Specific Font Sizes

### Button Component
- Default: `text-sm` (12px mobile, 13px tablet, 14px desktop)
- Location: `src/components/ui/button.tsx` line 8

### Hero Component
- Subtitle: `text-lg md:text-xl lg:text-2xl`
  - Mobile: 18px
  - Tablet: 20px
  - Desktop: 24px
- Location: `src/components/Hero.tsx` line 46

---

## Summary by Device

### Mobile (< 768px)
- **Body**: 13px
- **Paragraphs**: 14px
- **Small text**: 12px
- **H1**: 36px
- **H2**: 30px
- **H3**: 24px
- **H4**: 20px
- **H5**: 18px
- **H6**: 14px

### Tablet/Laptop (≥ 768px)
- **Body**: 15px
- **Paragraphs**: 15px
- **Small text**: 13px
- **H1**: 48px
- **H2**: 36px
- **H3**: 30px
- **H4**: 24px
- **H5**: 20px
- **H6**: 18px

### Desktop (≥ 1024px)
- **Body**: 16px
- **Paragraphs**: 16px
- **Small text**: 14px
- **H1**: 60px
- **H2**: 48px
- **H3**: 36px
- **H4**: 24px (inherits from tablet)
- **H5**: 20px (inherits from tablet)
- **H6**: 18px (inherits from tablet)

### Large Desktop (≥ 1280px)
- **H1**: 72px
- **H2**: 60px
- Other headings inherit from desktop

---

## Notes

1. **Root Font Size**: Tailwind uses rem units relative to the browser's default root font size (typically 16px). The body font-size changes don't affect rem-based Tailwind classes.

2. **Custom Overrides**: `.text-sm` and `.text-base` have custom overrides in `src/index.css` that differ from Tailwind defaults.

3. **Heading Font Family**: All headings use 'Cormorant Garamond' serif font, while body text uses 'Inter' sans-serif.

4. **Line Heights**:
   - Body: 1.6
   - Paragraphs: 1.65
   - Headings: Default (varies by browser)

5. **Font Weights**:
   - Body: Normal (400)
   - H1: 600 (semibold)
   - H2-H6: 500 (medium)

---

## Files to Edit for Font Size Changes

1. **Global Base Sizes**: `src/index.css` (lines 70-155)
2. **Tailwind Config**: `tailwind.config.ts` (no font size overrides currently)
3. **Component-Specific**: Individual component files for inline text size classes

---

*Last Updated: Based on current codebase state*

