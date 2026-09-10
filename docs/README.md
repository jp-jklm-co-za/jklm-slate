# @jklm/slate — Playground

A single-file, dependency-free live playground for the slate CSS design system (TweakCN-style):

- Sidebar nav: Overview, Colors, Typography, Spacing & Radius, Shadows, Buttons, Badges, Alerts, Forms, Cards, Misc
- Light/dark toggle, section search filter, GitHub link
- Click-to-copy color swatches and class-name hints
- **Theme editor** drawer: live color pickers bound to `--slate-*` custom properties, presets (Solarized default / Ocean blue), Copy CSS (serializes overrides as a `:root` block), Reset

## Open

Open `docs/index.html` directly in a browser, or serve it:

```
npx serve docs
```

It loads `../slate.css` relatively, so it always reflects the working copy — edits to `slate.css` appear on refresh.