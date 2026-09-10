# slate

A lightweight, CSS-only design system for JKLM mini-apps. TweakCN-style theme
variables + Bootstrap-like utility/component classes, all prefixed `.slate-*`.

No build step required — drop in one stylesheet and override a few CSS
variables to theme your app.

## Why

Shared styling across all JKLM mini-apps without dragging in a heavy framework.
Just a single CSS file with a consistent token system.

## Install

```html
<link rel="stylesheet" href="slate.css">
```

Or from npm:

```bash
npm install @jklm/slate
```

```ts
import "@jklm/slate/slate.css";
```

## Usage

Add the `.slate` class to a root element to scope the reset and base styles.

```html
<body class="slate">
  <div class="slate-container">
    <h1>Hello</h1>
    <button class="slate-btn slate-btn-primary">Save</button>
  </div>
</body>
```

## Theming

Every color, font, radius, and shadow is a CSS custom property (token set
adapted from a TweakCN/shadcn theme). Override them on `:root` or a scoped
component to retheme the whole tree — components never hard-code values, they
derive from these tokens.

```css
:root {
  --slate-primary: #d33682;
  --slate-radius: 0.25rem;
  --slate-background: #fdf6e3;
}
```

Dark mode is built in — add the `.dark` class (or `data-theme="dark"`) to `<html>`:

```html
<html class="dark">
```

## Available pieces

- **Layout:** container, flex, grid, gap, alignment, spacing (margin/padding)
- **Typography:** size, weight, color, alignment, truncate, case
- **Components:** buttons, cards, badges, alerts, forms, separator, spinner
- **Utilities:** border, radius, shadow, width/height, position, z-index

See `slate.css` for the full list — every class is `.slate-*` prefixed.

## Build

```bash
npm run build        # minified slate.min.css
npm run minify       # same
```

## License

MIT
