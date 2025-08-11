const plugin = require('tailwindcss/plugin');

/**
 * @feedfuse/tailwind-neobrutalism
 * 
 * A comprehensive Tailwind CSS plugin for neobrutalism design
 * with full RTL/Farsi support and customizable theming.
 * 
 * Features:
 * - Complete neobrutalism component library
 * - RTL/LTR bidirectional support
 * - Farsi and English font support
 * - Customizable color schemes
 * - YouTube-inspired default theme
 */

module.exports = plugin.withOptions(function(options = {}) {
  return function({ addBase, addComponents, addUtilities, theme, addVariant }) {
    
    // Default configuration
    const defaultConfig = {
      colors: {
        youtube: {
          red: '255 0 0',
          dark: '40 40 40',
          white: '255 255 255',  
          gray: '96 96 96',
          'light-gray': '242 242 242',
          black: '0 0 0'
        },
        brutal: {
          primary: '255 235 59', // Yellow
          secondary: '76 175 80', // Green  
          accent: '233 30 99', // Pink
          warning: '255 152 0', // Orange
          error: '244 67 54', // Red
          info: '33 150 243', // Blue
          success: '76 175 80' // Green
        }
      },
      fonts: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        farsi: ['Vazirmatn', 'Samim', 'IRANSans', 'Tahoma', 'sans-serif']
      },
      shadows: {
        x: '4px',
        y: '4px',
        xHover: '2px', 
        yHover: '2px'
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem', 
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem'
      },
      borderRadius: {
        brutal: '5px'
      },
      borderWidth: {
        brutal: '2px'
      }
    };

    // Merge user options with defaults
    const config = {
      colors: { ...defaultConfig.colors, ...options.colors },
      fonts: { ...defaultConfig.fonts, ...options.fonts },
      shadows: { ...defaultConfig.shadows, ...options.shadows },
      spacing: { ...defaultConfig.spacing, ...options.spacing },
      borderRadius: { ...defaultConfig.borderRadius, ...options.borderRadius },
      borderWidth: { ...defaultConfig.borderWidth, ...options.borderWidth }
    };

    // Add base styles (CSS reset, typography, font loading)
    addBase({
      // Font face definitions for included fonts
      '@font-face': [
        {
          fontFamily: 'Space Grotesk',
          src: 'url("./fonts/SpaceGrotesk-Variable.woff2") format("woff2")',
          fontWeight: '300 700',
          fontStyle: 'normal',
          fontDisplay: 'swap'
        },
        {
          fontFamily: 'Vazirmatn',
          src: 'url("./fonts/Vazirmatn-Variable.woff2") format("woff2")',
          fontWeight: '100 900', 
          fontStyle: 'normal',
          fontDisplay: 'swap'
        }
      ],
      
      // Root CSS variables for theming
      ':root': {
        // Colors
        '--color-youtube-red': config.colors.youtube.red,
        '--color-youtube-dark': config.colors.youtube.dark,
        '--color-youtube-white': config.colors.youtube.white,
        '--color-youtube-gray': config.colors.youtube.gray,
        '--color-youtube-light-gray': config.colors.youtube['light-gray'],
        '--color-youtube-black': config.colors.youtube.black,
        
        '--color-brutal-primary': config.colors.brutal.primary,
        '--color-brutal-secondary': config.colors.brutal.secondary,
        '--color-brutal-accent': config.colors.brutal.accent,
        '--color-brutal-warning': config.colors.brutal.warning,
        '--color-brutal-error': config.colors.brutal.error,
        '--color-brutal-info': config.colors.brutal.info,
        '--color-brutal-success': config.colors.brutal.success,
        
        // Shadows
        '--shadow-x': config.shadows.x,
        '--shadow-y': config.shadows.y,
        '--shadow-x-hover': config.shadows.xHover,
        '--shadow-y-hover': config.shadows.yHover,
        
        // Computed shadows
        '--shadow-brutal': `var(--shadow-x) var(--shadow-y) 0px 0px rgb(var(--color-youtube-black))`,
        '--shadow-brutal-hover': `var(--shadow-x-hover) var(--shadow-y-hover) 0px 0px rgb(var(--color-youtube-black))`,
        '--shadow-brutal-sm': '2px 2px 0px 0px rgb(var(--color-youtube-black))',
        
        // Spacing
        '--spacing-xs': config.spacing.xs,
        '--spacing-sm': config.spacing.sm,
        '--spacing-md': config.spacing.md,
        '--spacing-lg': config.spacing.lg,
        '--spacing-xl': config.spacing.xl,
        '--spacing-2xl': config.spacing['2xl'],
        '--spacing-3xl': config.spacing['3xl'],
        
        // Border radius
        '--radius-brutal': config.borderRadius.brutal,
        
        // Border width  
        '--border-brutal': config.borderWidth.brutal,
        
        // Fonts
        '--font-sans': config.fonts.sans.join(', '),
        '--font-mono': config.fonts.mono.join(', '),
        '--font-farsi': config.fonts.farsi.join(', '),
        
        // Typography
        '--font-heading-weight': '700',
        '--font-base-weight': '500',
        
        // Transitions
        '--transition-brutal': 'all 0.2s ease'
      },
      
      // Dark mode overrides
      '.dark': {
        '--color-youtube-dark': '18 18 18',
        '--shadow-brutal': `var(--shadow-x) var(--shadow-y) 0px 0px rgb(var(--color-youtube-white))`,
        '--shadow-brutal-hover': `var(--shadow-x-hover) var(--shadow-y-hover) 0px 0px rgb(var(--color-youtube-white))`,
        '--shadow-brutal-sm': '2px 2px 0px 0px rgb(var(--color-youtube-white))'
      },
      
      // RTL-specific adjustments
      '[dir="rtl"]': {
        fontFamily: 'var(--font-farsi)'
      }
    });

    // Add utility classes
    addUtilities({
      // Base brutal utilities
      '.brutal-base': {
        border: 'var(--border-brutal) solid rgb(var(--color-youtube-black))',
        borderRadius: 'var(--radius-brutal)'
      },
      
      '.brutal-shadow': {
        boxShadow: 'var(--shadow-brutal)',
        transition: 'var(--transition-brutal)'
      },
      
      '.brutal-hover': {
        '&:hover': {
          transform: 'translate(var(--shadow-x-hover), var(--shadow-y-hover))',
          boxShadow: 'var(--shadow-brutal-hover)'
        }
      },
      
      // Typography utilities
      '.font-brutal-base': {
        fontWeight: 'var(--font-base-weight)'
      },
      
      '.font-brutal-heading': {
        fontWeight: 'var(--font-heading-weight)'
      },
      
      '.font-farsi': {
        fontFamily: 'var(--font-farsi)'
      },
      
      // Transform utilities for brutal effects
      '.translate-brutal': {
        transform: 'translate(var(--shadow-x), var(--shadow-y))'
      },
      
      '.translate-brutal-hover': {
        transform: 'translate(var(--shadow-x-hover), var(--shadow-y-hover))'
      },
      
      // Shadow utilities
      '.shadow-brutal': {
        boxShadow: 'var(--shadow-brutal)'
      },
      
      '.shadow-brutal-hover': {
        boxShadow: 'var(--shadow-brutal-hover)'
      },
      
      '.shadow-brutal-sm': {
        boxShadow: 'var(--shadow-brutal-sm)'
      },
      
      '.shadow-brutal-none': {
        boxShadow: 'none'
      }
    });

    // Add comprehensive component library
    addComponents({
      // Buttons
      '.btn-brutal': {
        '@apply brutal-base brutal-shadow brutal-hover': {},
        padding: '0.75rem 1.5rem',
        fontWeight: 'var(--font-base-weight)',
        backgroundColor: 'rgb(var(--color-youtube-red))',
        color: 'rgb(var(--color-youtube-white))',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
        '&:active': {
          transform: 'translate(var(--shadow-x), var(--shadow-y))',
          boxShadow: 'none'
        },
        '&:disabled': {
          opacity: '0.6',
          cursor: 'not-allowed',
          '&:hover': {
            transform: 'none',
            boxShadow: 'var(--shadow-brutal)'
          }
        }
      },
      
      '.btn-brutal-ghost': {
        '@apply btn-brutal': {},
        backgroundColor: 'rgb(var(--color-youtube-white))',
        color: 'rgb(var(--color-youtube-black))'
      },
      
      '.btn-brutal-dark': {
        '@apply btn-brutal': {},
        backgroundColor: 'rgb(var(--color-youtube-dark))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      '.btn-brutal-primary': {
        '@apply btn-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-primary))',
        color: 'rgb(var(--color-youtube-black))'
      },
      
      '.btn-brutal-secondary': {
        '@apply btn-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-secondary))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      '.btn-brutal-sm': {
        '@apply btn-brutal': {},
        padding: '0.5rem 1rem',
        fontSize: '0.875rem'
      },
      
      '.btn-brutal-lg': {
        '@apply btn-brutal': {},
        padding: '1rem 2rem',
        fontSize: '1.125rem'
      },
      
      '.btn-brutal-xl': {
        '@apply btn-brutal': {},
        padding: '1.25rem 2.5rem',
        fontSize: '1.25rem'
      },
      
      // Cards
      '.card-brutal': {
        '@apply brutal-base brutal-shadow': {},
        backgroundColor: 'rgb(var(--color-youtube-white))',
        padding: '1.5rem'
      },
      
      '.card-brutal-hover': {
        '@apply card-brutal brutal-hover': {}
      },
      
      '.card-brutal-dark': {
        '@apply card-brutal': {},
        backgroundColor: 'rgb(var(--color-youtube-dark))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      '.card-brutal-primary': {
        '@apply card-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-primary))',
        color: 'rgb(var(--color-youtube-black))'
      },
      
      // Forms
      '.input-brutal': {
        '@apply brutal-base': {},
        padding: '0.75rem 1rem',
        backgroundColor: 'rgb(var(--color-youtube-white))',
        color: 'rgb(var(--color-youtube-black))',
        width: '100%',
        fontSize: '1rem',
        '&:focus': {
          outline: '2px solid rgb(var(--color-youtube-black))',
          outlineOffset: '2px'
        },
        '&::placeholder': {
          color: 'rgb(var(--color-youtube-gray))'
        }
      },
      
      '.input-brutal-sm': {
        '@apply input-brutal': {},
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem'
      },
      
      '.input-brutal-lg': {
        '@apply input-brutal': {},
        padding: '1rem 1.25rem',
        fontSize: '1.125rem'
      },
      
      '.textarea-brutal': {
        '@apply input-brutal': {},
        minHeight: '6rem',
        resize: 'vertical'
      },
      
      '.select-brutal': {
        '@apply input-brutal': {}
      },
      
      '.checkbox-brutal': {
        width: '1.25rem',
        height: '1.25rem',
        border: 'var(--border-brutal) solid rgb(var(--color-youtube-black))',
        borderRadius: 'var(--radius-brutal)',
        backgroundColor: 'rgb(var(--color-youtube-white))',
        cursor: 'pointer',
        '&:checked': {
          backgroundColor: 'rgb(var(--color-brutal-primary))',
          backgroundImage: 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'rgb(0,0,0)\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z\'/%3e%3c/svg%3e")'
        }
      },
      
      '.radio-brutal': {
        '@apply checkbox-brutal': {},
        borderRadius: '50%',
        '&:checked': {
          backgroundImage: 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'rgb(0,0,0)\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3ccircle cx=\'8\' cy=\'8\' r=\'3\'/%3e%3c/svg%3e")'
        }
      },
      
      // Navigation
      '.nav-brutal': {
        '@apply brutal-base': {},
        backgroundColor: 'rgb(var(--color-youtube-white))',
        padding: '1rem'
      },
      
      '.nav-brutal-item': {
        padding: '0.75rem 1rem',
        color: 'rgb(var(--color-youtube-black))',
        textDecoration: 'none',
        display: 'block',
        transition: 'var(--transition-brutal)',
        '&:hover': {
          backgroundColor: 'rgb(var(--color-youtube-light-gray))'
        },
        '&.active': {
          backgroundColor: 'rgb(var(--color-youtube-red))',
          color: 'rgb(var(--color-youtube-white))',
          fontWeight: 'var(--font-heading-weight)'
        }
      },
      
      // Breadcrumbs
      '.breadcrumb-brutal': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgb(var(--color-youtube-gray))',
        fontSize: '0.875rem'
      },
      
      '.breadcrumb-brutal-item': {
        '&:not(:last-child)::after': {
          content: '"/"',
          marginInlineStart: '0.5rem',
          color: 'rgb(var(--color-youtube-gray))'
        },
        '&:last-child': {
          color: 'rgb(var(--color-youtube-black))',
          fontWeight: 'var(--font-base-weight)'
        },
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      },
      
      // Tables
      '.table-brutal': {
        '@apply brutal-base': {},
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0',
        backgroundColor: 'rgb(var(--color-youtube-white))'
      },
      
      '.table-brutal th': {
        padding: '0.75rem 1rem',
        backgroundColor: 'rgb(var(--color-youtube-light-gray))',
        fontWeight: 'var(--font-heading-weight)',
        textAlign: 'start',
        borderBottom: 'var(--border-brutal) solid rgb(var(--color-youtube-black))'
      },
      
      '.table-brutal td': {
        padding: '0.75rem 1rem',
        borderBottom: '1px solid rgb(var(--color-youtube-gray))'
      },
      
      '.table-brutal tbody tr:hover': {
        backgroundColor: 'rgb(var(--color-youtube-light-gray))'
      },
      
      // Modals
      '.modal-brutal': {
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '50'
      },
      
      '.modal-brutal-content': {
        '@apply card-brutal': {},
        maxWidth: '32rem',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto'
      },
      
      // Dropdowns
      '.dropdown-brutal': {
        position: 'relative',
        display: 'inline-block'
      },
      
      '.dropdown-brutal-content': {
        '@apply brutal-base brutal-shadow': {},
        position: 'absolute',
        top: '100%',
        insetInlineStart: '0',
        backgroundColor: 'rgb(var(--color-youtube-white))',
        minWidth: '12rem',
        zIndex: '10',
        marginTop: '0.25rem',
        opacity: '0',
        visibility: 'hidden',
        transform: 'translateY(-0.5rem)',
        transition: 'opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease'
      },
      
      '.dropdown-brutal.active .dropdown-brutal-content': {
        opacity: '1',
        visibility: 'visible',
        transform: 'translateY(0)'
      },
      
      '.dropdown-brutal-item': {
        '@apply nav-brutal-item': {},
        borderRadius: '0',
        border: 'none'
      },
      
      // Tooltips
      '.tooltip-brutal': {
        position: 'relative',
        '&:hover .tooltip-brutal-content': {
          opacity: '1',
          visibility: 'visible'
        }
      },
      
      '.tooltip-brutal-content': {
        '@apply brutal-base': {},
        position: 'absolute',
        bottom: '100%',
        insetInlineStart: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgb(var(--color-youtube-black))',
        color: 'rgb(var(--color-youtube-white))',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        opacity: '0',
        visibility: 'hidden',
        transition: 'opacity 0.2s, visibility 0.2s',
        marginBottom: '0.25rem',
        zIndex: '20'
      },
      
      '[dir="rtl"] .tooltip-brutal-content': {
        transform: 'translateX(50%)'
      },
      
      // Badges
      '.badge-brutal': {
        '@apply brutal-base': {},
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem',
        fontWeight: 'var(--font-heading-weight)',
        backgroundColor: 'rgb(var(--color-youtube-light-gray))',
        color: 'rgb(var(--color-youtube-black))'
      },
      
      '.badge-brutal-primary': {
        '@apply badge-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-primary))'
      },
      
      '.badge-brutal-secondary': {
        '@apply badge-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-secondary))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      '.badge-brutal-error': {
        '@apply badge-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-error))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      '.badge-brutal-warning': {
        '@apply badge-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-warning))',
        color: 'rgb(var(--color-youtube-black))'
      },
      
      '.badge-brutal-success': {
        '@apply badge-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-success))',
        color: 'rgb(var(--color-youtube-white))'
      },
      
      // Progress bars
      '.progress-brutal': {
        '@apply brutal-base': {},
        width: '100%',
        height: '1rem',
        backgroundColor: 'rgb(var(--color-youtube-light-gray))',
        overflow: 'hidden'
      },
      
      '.progress-brutal-bar': {
        height: '100%',
        backgroundColor: 'rgb(var(--color-brutal-primary))',
        transition: 'width 0.3s ease'
      },
      
      // Alerts
      '.alert-brutal': {
        '@apply card-brutal': {},
        padding: '1rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem'
      },
      
      '.alert-brutal-info': {
        '@apply alert-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-info) / 0.1)',
        borderColor: 'rgb(var(--color-brutal-info))',
        color: 'rgb(var(--color-brutal-info))'
      },
      
      '.alert-brutal-success': {
        '@apply alert-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-success) / 0.1)',
        borderColor: 'rgb(var(--color-brutal-success))',
        color: 'rgb(var(--color-brutal-success))'
      },
      
      '.alert-brutal-warning': {
        '@apply alert-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-warning) / 0.1)',
        borderColor: 'rgb(var(--color-brutal-warning))',
        color: 'rgb(var(--color-brutal-warning))'
      },
      
      '.alert-brutal-error': {
        '@apply alert-brutal': {},
        backgroundColor: 'rgb(var(--color-brutal-error) / 0.1)',
        borderColor: 'rgb(var(--color-brutal-error))',
        color: 'rgb(var(--color-brutal-error))'
      },
      
      // Tabs
      '.tabs-brutal': {
        '@apply brutal-base': {},
        backgroundColor: 'rgb(var(--color-youtube-white))'
      },
      
      '.tabs-brutal-nav': {
        display: 'flex',
        borderBottom: 'var(--border-brutal) solid rgb(var(--color-youtube-black))'
      },
      
      '.tabs-brutal-tab': {
        padding: '0.75rem 1.5rem',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'var(--font-base-weight)',
        color: 'rgb(var(--color-youtube-gray))',
        borderBottom: 'var(--border-brutal) solid transparent',
        marginBottom: 'calc(-1 * var(--border-brutal))',
        '&.active, &:hover': {
          color: 'rgb(var(--color-youtube-black))',
          borderBottomColor: 'rgb(var(--color-youtube-black))'
        }
      },
      
      '.tabs-brutal-content': {
        padding: '1.5rem'
      },
      
      // Accordions
      '.accordion-brutal': {
        '@apply brutal-base': {},
        backgroundColor: 'rgb(var(--color-youtube-white))'
      },
      
      '.accordion-brutal-item': {
        '&:not(:last-child)': {
          borderBottom: '1px solid rgb(var(--color-youtube-gray))'
        }
      },
      
      '.accordion-brutal-header': {
        width: '100%',
        padding: '1rem 1.5rem',
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'start',
        fontSize: '1rem',
        fontWeight: 'var(--font-heading-weight)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          backgroundColor: 'rgb(var(--color-youtube-light-gray))'
        }
      },
      
      '.accordion-brutal-content': {
        padding: '0 1.5rem 1rem',
        color: 'rgb(var(--color-youtube-gray))'
      },
      
      // Lists
      '.list-brutal': {
        '@apply brutal-base': {},
        backgroundColor: 'rgb(var(--color-youtube-white))'
      },
      
      '.list-brutal-item': {
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        '&:not(:last-child)': {
          borderBottom: '1px solid rgb(var(--color-youtube-gray))'
        },
        '&:hover': {
          backgroundColor: 'rgb(var(--color-youtube-light-gray))'
        }
      },
      
      // Pagination
      '.pagination-brutal': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem'
      },
      
      '.pagination-brutal-item': {
        '@apply btn-brutal-sm': {},
        minWidth: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&.active': {
          backgroundColor: 'rgb(var(--color-brutal-primary))',
          color: 'rgb(var(--color-youtube-black))'
        },
        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed'
        }
      },
      
      // Chat bubbles for messaging
      '.chat-brutal-user': {
        '@apply brutal-base shadow-brutal-sm': {},
        backgroundColor: 'rgb(var(--color-youtube-red))',
        color: 'rgb(var(--color-youtube-white))',
        padding: '1rem',
        marginInlineStart: 'auto',
        marginInlineEnd: '0',
        maxWidth: '80%',
        wordWrap: 'anywhere',
        wordBreak: 'break-word'
      },
      
      '.chat-brutal-agent': {
        '@apply brutal-base shadow-brutal-sm': {},
        backgroundColor: 'rgb(var(--color-youtube-light-gray))',
        color: 'rgb(var(--color-youtube-black))',
        padding: '1rem',
        marginInlineStart: '0',
        marginInlineEnd: 'auto',
        maxWidth: '80%',
        wordWrap: 'anywhere',
        wordBreak: 'break-word'
      },
      
      // Dividers
      '.divider-brutal': {
        height: 'var(--border-brutal)',
        backgroundColor: 'rgb(var(--color-youtube-black))',
        border: 'none',
        margin: '1rem 0'
      },
      
      '.divider-brutal-vertical': {
        width: 'var(--border-brutal)',
        height: '100%',
        backgroundColor: 'rgb(var(--color-youtube-black))',
        border: 'none',
        margin: '0 1rem'
      },
      
      
      // Avatars
      '.avatar-brutal': {
        '@apply brutal-base': {},
        overflow: 'hidden',
        display: 'inline-block',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      },
      
      '.avatar-brutal-sm': {
        '@apply avatar-brutal': {},
        width: '2rem',
        height: '2rem'
      },
      
      '.avatar-brutal-md': {
        '@apply avatar-brutal': {},
        width: '3rem',
        height: '3rem'
      },
      
      '.avatar-brutal-lg': {
        '@apply avatar-brutal': {},
        width: '4rem',
        height: '4rem'
      },
      
      '.avatar-brutal-xl': {
        '@apply avatar-brutal': {},
        width: '5rem',
        height: '5rem'
      }
    });

    // Add RTL variants
    addVariant('rtl', '[dir="rtl"] &');
    addVariant('ltr', '[dir="ltr"] &');
  };
});