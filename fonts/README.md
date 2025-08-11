# Neobrutalism Fonts

This directory contains font files for the neobrutalism plugin.

## Included Fonts

### English Fonts
- **Space Grotesk Variable** (`SpaceGrotesk-Variable.woff2`)
  - Perfect for headings and bold text
  - Variable font with weights 300-700
  - Great for neobrutalism aesthetic

- **JetBrains Mono** (fallback to system fonts)
  - Monospace font for code and technical content
  - Falls back to Consolas, monospace

### Persian/Farsi Fonts
- **Vazirmatn Variable** (`Vazirmatn-Variable.woff2`)
  - Modern Persian font with excellent readability
  - Variable font with weights 100-900
  - Full support for Persian, Arabic, and Urdu scripts

- **Samim** (web fallback)
  - Secondary Persian font option
  - Good for body text

- **IRANSans** (system fallback)
  - System fallback for Persian text
  - Widely available on Persian systems

## Font Loading Strategy

The plugin uses a progressive font loading strategy:

1. **Primary fonts** are loaded as variable WOFF2 files for best performance
2. **Fallback fonts** provide immediate text display
3. **System fonts** ensure text is never invisible
4. **font-display: swap** ensures text appears quickly

## Adding Custom Fonts

To add your own fonts to the plugin configuration:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@feedfuse/tailwind-neobrutalism')({
      fonts: {
        sans: ['YourCustomFont', 'Space Grotesk', 'sans-serif'],
        farsi: ['YourPersianFont', 'Vazirmatn', 'sans-serif']
      }
    })
  ]
}
```

## Font Files

Due to licensing considerations, actual font files are not included in this package. 

To get the recommended fonts:
1. **Space Grotesk**: Download from [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
2. **Vazirmatn**: Download from [GitHub](https://github.com/rastikerdar/vazirmatn)

Place the font files in this directory and update the `@font-face` declarations in `index.js` if needed.