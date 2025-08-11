# @feedfuse/tailwind-neobrutalism

🔥 **A comprehensive Tailwind CSS plugin for neobrutalism design with full RTL/Farsi support**

[![NPM Version](https://img.shields.io/npm/v/@feedfuse/tailwind-neobrutalism.svg)](https://www.npmjs.com/package/@feedfuse/tailwind-neobrutalism)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![RTL Support](https://img.shields.io/badge/RTL-Supported-green.svg)](#rtl--farsi-support)

## ✨ Features

- 🎨 **40+ Brutal Components** - Complete library of neobrutalism UI components
- 🌍 **RTL/Farsi Support** - Full bidirectional text support with Persian fonts
- 🎯 **Customizable Theming** - Easy color, font, and spacing customization
- 📱 **Responsive Design** - Mobile-first responsive components
- ♿ **Accessibility** - WCAG 2.1 AA compliant components
- 🎭 **Dark Mode Ready** - Built-in dark theme support
- 📦 **TypeScript** - Full TypeScript definitions included
- 🚀 **Performance** - Tree-shakeable and optimized bundle size

## 🚀 Quick Start

### Installation

```bash
npm install @feedfuse/tailwind-neobrutalism
```

### Basic Setup

Add the plugin to your `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  plugins: [
    require('@feedfuse/tailwind-neobrutalism')()
  ],
}
```

### Your First Brutal Component

```html
<button class="btn-brutal">Click Me!</button>
<div class="card-brutal">
  <h3 class="font-brutal-heading">Hello Brutalism!</h3>
  <p>This is a brutal card with shadow effects.</p>
</div>
```

## 🎨 Component Library

### Buttons
```html
<!-- Primary buttons -->
<button class="btn-brutal">Primary</button>
<button class="btn-brutal-ghost">Ghost</button>
<button class="btn-brutal-dark">Dark</button>

<!-- Sizes -->
<button class="btn-brutal-sm">Small</button>
<button class="btn-brutal-lg">Large</button>
<button class="btn-brutal-xl">Extra Large</button>

<!-- Custom colors -->
<button class="btn-brutal-primary">Custom Primary</button>
<button class="btn-brutal-secondary">Custom Secondary</button>
```

### Forms
```html
<!-- Text inputs -->
<input type="text" class="input-brutal" placeholder="Enter text">
<input type="text" class="input-brutal-lg" placeholder="Large input">
<textarea class="textarea-brutal" placeholder="Message"></textarea>

<!-- Select and options -->
<select class="select-brutal">
  <option>Choose option</option>
  <option>Option 1</option>
</select>

<input type="checkbox" class="checkbox-brutal" id="check1">
<input type="radio" class="radio-brutal" id="radio1">
```

### Cards
```html
<div class="card-brutal">Basic Card</div>
<div class="card-brutal-hover">Hoverable Card</div>
<div class="card-brutal-dark">Dark Card</div>
<div class="card-brutal-primary">Primary Card</div>
```

### Navigation
```html
<nav class="nav-brutal">
  <a href="#" class="nav-brutal-item active">Home</a>
  <a href="#" class="nav-brutal-item">About</a>
  <a href="#" class="nav-brutal-item">Contact</a>
</nav>

<!-- Breadcrumbs -->
<nav class="breadcrumb-brutal">
  <div class="breadcrumb-brutal-item"><a href="#">Home</a></div>
  <div class="breadcrumb-brutal-item"><a href="#">Products</a></div>
  <div class="breadcrumb-brutal-item">Current Page</div>
</nav>
```

### Data Display
```html
<!-- Badges -->
<span class="badge-brutal">Default</span>
<span class="badge-brutal-success">Success</span>
<span class="badge-brutal-error">Error</span>

<!-- Progress bars -->
<div class="progress-brutal">
  <div class="progress-brutal-bar" style="width: 75%"></div>
</div>

<!-- Alerts -->
<div class="alert-brutal-info">Information alert</div>
<div class="alert-brutal-success">Success message</div>
<div class="alert-brutal-warning">Warning message</div>
<div class="alert-brutal-error">Error message</div>
```

### Tables
```html
<table class="table-brutal">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

### Interactive Elements
```html
<!-- Dropdown -->
<div class="dropdown-brutal">
  <button class="btn-brutal">Menu ▼</button>
  <div class="dropdown-brutal-content">
    <a href="#" class="dropdown-brutal-item">Item 1</a>
    <a href="#" class="dropdown-brutal-item">Item 2</a>
  </div>
</div>

<!-- Tabs -->
<div class="tabs-brutal">
  <div class="tabs-brutal-nav">
    <button class="tabs-brutal-tab active">Tab 1</button>
    <button class="tabs-brutal-tab">Tab 2</button>
  </div>
  <div class="tabs-brutal-content">
    Tab content goes here
  </div>
</div>

<!-- Pagination -->
<div class="pagination-brutal">
  <button class="pagination-brutal-item">‹</button>
  <button class="pagination-brutal-item active">1</button>
  <button class="pagination-brutal-item">2</button>
  <button class="pagination-brutal-item">›</button>
</div>
```

## 🌍 RTL & Farsi Support

### Enable RTL Mode

```html
<html dir="rtl" lang="fa">
<head>
  <!-- Your head content -->
</head>
<body class="font-farsi">
  <!-- Your RTL content -->
</body>
</html>
```

### RTL-Aware Components

All components automatically adapt to RTL layout:

```html
<!-- These work perfectly in both LTR and RTL -->
<div class="card-brutal">
  <h3>عنوان فارسی</h3>
  <p>این متن در راست به چپ نمایش داده می‌شود</p>
</div>

<nav class="nav-brutal">
  <a href="#" class="nav-brutal-item">خانه</a>
  <a href="#" class="nav-brutal-item">درباره ما</a>
  <a href="#" class="nav-brutal-item">تماس</a>
</nav>
```

### Persian Typography

```html
<!-- Use Persian fonts -->
<div class="font-farsi">
  <h1>عنوان فارسی</h1>
  <p>متن فارسی با فونت مناسب</p>
</div>
```

## ⚙️ Customization

### Basic Configuration

```javascript
module.exports = {
  plugins: [
    require('@feedfuse/tailwind-neobrutalism')({
      colors: {
        brutal: {
          primary: '255 235 59',    // Yellow
          secondary: '76 175 80',   // Green
          accent: '233 30 99',      // Pink
          warning: '255 152 0',     // Orange
          error: '244 67 54',       // Red
        },
        youtube: {
          red: '255 0 0',
          dark: '40 40 40',
          white: '255 255 255',
          // ... more colors
        }
      },
      fonts: {
        sans: ['Space Grotesk', 'Inter', 'system-ui'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        farsi: ['Vazirmatn', 'IRANSans', 'Tahoma']
      },
      shadows: {
        x: '4px',
        y: '4px',
        xHover: '2px',
        yHover: '2px'
      },
      borderRadius: {
        brutal: '5px'
      },
      borderWidth: {
        brutal: '2px'
      }
    })
  ]
}
```

### Theme Presets

#### YouTube Theme (Default)
```javascript
require('@feedfuse/tailwind-neobrutalism')({
  // Default YouTube-inspired colors
})
```

#### Custom Color Schemes

```javascript
// Spotify-inspired
require('@feedfuse/tailwind-neobrutalism')({
  colors: {
    brutal: {
      primary: '30 215 96',     // Spotify Green
      secondary: '0 0 0',       // Black
      accent: '255 255 255',    // White
    }
  }
})

// Discord-inspired  
require('@feedfuse/tailwind-neobrutalism')({
  colors: {
    brutal: {
      primary: '88 101 242',    // Blurple
      secondary: '67 181 129',  // Green
      accent: '250 166 26',     // Yellow
    }
  }
})
```

## 🎯 Advanced Usage

### Dark Mode

Enable dark mode by adding the `dark` class to your HTML element:

```html
<html class="dark">
  <body>
    <!-- Components automatically use dark theme -->
    <button class="btn-brutal">Dark Mode Button</button>
  </body>
</html>
```

### Custom Utilities

The plugin also provides utility classes for custom components:

```html
<div class="brutal-base brutal-shadow brutal-hover bg-brutal-primary">
  Custom component with brutal styling
</div>
```

Available utilities:
- `.brutal-base` - Adds border and border radius
- `.brutal-shadow` - Adds box shadow with transition
- `.brutal-hover` - Adds hover transform effects
- `.font-brutal-base` - Base font weight (500)
- `.font-brutal-heading` - Heading font weight (700)
- `.translate-brutal` - Transform with shadow offset
- `.shadow-brutal` - Brutal box shadow
- `.shadow-brutal-sm` - Small brutal shadow

## 🚀 Performance

### Bundle Size
- **Gzipped**: ~45KB (including all components)
- **Tree-shakeable**: Use only what you need
- **No runtime dependencies**: Pure CSS output

### Optimization Tips

1. **Purge unused styles** in production:
```javascript
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  // Tailwind will automatically purge unused styles
}
```

2. **Load fonts efficiently**:
```html
<link rel="preload" href="/fonts/SpaceGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

## 📱 Responsive Design

All components are mobile-first responsive:

```html
<button class="btn-brutal sm:btn-brutal-lg md:btn-brutal-xl">
  Responsive Button
</button>

<div class="card-brutal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Responsive Grid Layout
</div>
```

## ♿ Accessibility

Components follow WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility  
- ✅ High contrast ratios
- ✅ Focus indicators
- ✅ ARIA attributes where needed

### Accessibility Examples

```html
<!-- Proper labels for form inputs -->
<label for="email" class="font-brutal-base">Email Address</label>
<input type="email" id="email" class="input-brutal" aria-describedby="email-help">
<small id="email-help">We'll never share your email</small>

<!-- Keyboard accessible dropdowns -->
<div class="dropdown-brutal">
  <button class="btn-brutal" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-brutal-content" role="menu">
    <a href="#" class="dropdown-brutal-item" role="menuitem">Item 1</a>
  </div>
</div>
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Components render correctly in LTR layout
- [ ] Components render correctly in RTL layout  
- [ ] Hover effects work properly
- [ ] Focus states are visible
- [ ] Dark mode works correctly
- [ ] Mobile responsive breakpoints
- [ ] Screen reader compatibility
- [ ] Keyboard navigation

### Automated Testing

```bash
# Run tests
npm test

# Build demo
npm run demo

# Serve demo locally
npm run serve
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/your-org/tailwind-neobrutalism.git
cd tailwind-neobrutalism
npm install

# Run demo in watch mode
cd demo
npm install
npm run dev
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Neobrutalism Design**: Inspired by the brutalist architecture movement
- **Fonts**: Space Grotesk, JetBrains Mono, Vazirmatn, and other open source fonts
- **Tailwind CSS**: This plugin extends the amazing Tailwind CSS framework

## 🔗 Links

- 📦 [NPM Package](https://www.npmjs.com/package/@feedfuse/tailwind-neobrutalism)
- 🌐 [Live Demo](https://your-org.github.io/tailwind-neobrutalism)
- 📚 [Documentation](https://your-org.github.io/tailwind-neobrutalism/docs)
- 🐛 [Issues](https://github.com/your-org/tailwind-neobrutalism/issues)
- 💬 [Discussions](https://github.com/your-org/tailwind-neobrutalism/discussions)

---

**Made with ❤️ for the web development community**