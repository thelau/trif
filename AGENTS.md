# AGENTS.md

This repository contains TRIF, an audio-visualizer web application built with vanilla JavaScript, CSS, and modern npm scripts. Agents working in this codebase should follow these guidelines.

## Build Commands

```bash
# Install dependencies
npm install

# Start development server (Vite, HTTPS, hot reload on port 4000+)
npm run dev

# Minify CSS for production (edits assets/css/style.css directly)
npm run build

# Preview production build
npm run preview

# Clean and reinstall dependencies
npm run clean
```

## Development Workflow
- Do not push code to the main branch until confirmed working locally.
- If working in a feature branch, you can add, commit, and push under that branch for PR review.

## Completed
- Performance optimizations (throttling, CSS hints, Lighthouse audits)
- Enhanced UX (help panel with keyboard shortcuts)
- Code quality (ESLint, Stylelint, Jest, Husky, CI/CD)
- Mobile support (Web Audio API detection)
- Deployment automation (S3/CloudFront)
- Radio management (JSON extraction, status, index-based navigation, default visuals)

## Backlog
- Add new radio streams (4 more for variety)
- Create radio test page for dev testing
- PWA features (service worker, manifest)
- Accessibility improvements (ARIA labels)
- Customization/Themes
- Mobile enhancements
- Figure out proper logging system (low priority)

## Code Style

### JavaScript

- **Syntax**: ES5 only (no ES6+ features)
- **Variables**: Use `var` for all declarations (not `const` or `let`)
- **Functions**: Use function declarations: `function name() {}`
- **Indentation**: 4 spaces
- **Semicolons**: Always use semicolons
- **Naming**:
  - Variables: camelCase (`currentRadioId`, `audioElement`)
  - Functions: camelCase (`playPauseRadio()`, `setupAudio()`)
  - DOM elements: `[type]Element` suffix (`controlsElement`, `visualsElement`)
- **DOM Access**:
  - Use `document.getElementById("element-id")` for element selection
  - Use `document.querySelector()` when needed for complex selectors
- **Event Listeners**:
  ```javascript
  element.addEventListener("click", function(){
    // handler code
  });
  ```
- **No module system**: All scripts are loaded via `<script>` tags in `index.html`
- **UMD Pattern**: Library files (parser.js, tokenizer.js) use UMD for AMD/CommonJS/browser compatibility
- **Comments**: Use `//` for single-line comments. Block comments `/* */` are acceptable for multi-line descriptions
- **Analytics**: Track events with Google Analytics: `ga('send', 'event', 'category', 'action', 'label')`

### CSS

- **Syntax**: Plain CSS
- **Indentation**: 4 spaces
- **Vendor Prefixes**: Manually add vendor prefixes for experimental CSS features (`-webkit-`, `-moz-`, `-ms-`, `-o-`)
- **Units**: Prefer responsive units (`vmax`, `%`) over fixed units (`px`)
- **Selectors**: Use `#` for IDs and `.` for classes. Element selectors should be lowercase
- **Colors**: Use CSS color names, hex values, or `rgba()` for colors with transparency
- **Media Queries**: Use `@media (property: value)` for responsive breakpoints
- **Important**: Use `!important` sparingly, only when necessary to override specificity (e.g., for filter effects)

### HTML

- **DOCTYPE**: Always use `<!DOCTYPE html>`
- **Encoding**: `<meta charset="utf-8">` in `<head>`
- **Viewport**: Include viewport meta tag: `<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device">`
- **IDs**: Use kebab-case for element IDs (`play-pause`, `visuals-container`)
- **Classes**: Use kebab-case for class names (`overlay`, `scanlines`)
- **Self-closing**: For void elements, use `<tag />` (though `>` is also acceptable)
- **Attribute quotes**: Always use double quotes around attribute values

### File Organization

```
/
├── index.html                 # Main HTML file
├── .config/                  # Development configs (ESLint, Stylelint, Jest)
├── .github/                 # CI/CD workflows
├── .husky/                  # Pre-commit hooks
├── docs/                    # Documentation (AWS policies)
├── reports/                 # Generated reports (Lighthouse)
├── package.json             # Dependencies and project info
├── AGENTS.md                # Agent guidelines
├── lighthouserc.json        # Lighthouse audit config
├── vite.config.js           # Vite build config
├── index.html               # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet (edited directly)
│   ├── js/
│   │   ├── index.js        # Main application logic
│   │   └── [other libs]   # PxLoader, keymaster, preloadjs
│   ├── gifs/                # Visual assets organized by category
│   └── images/              # Static images (icons, logos)
```

### Browser Compatibility

- **Primary Target**: Google Chrome (desktop)
- **Mobile**: Supported if Web Audio API available
- **APIs Used**:
  - Web Audio API (`AudioContext`, `AnalyserNode`)
  - `requestAnimationFrame` for animations
  - `getUserMedia` for microphone input
  - Fullscreen API with vendor prefixes

### Error Handling

- Use `console.log()` for debugging (commented out in production)
- Use `console.error()` for error messages
- Wrap error-prone operations in try-catch blocks when necessary
- Provide user feedback for API failures (e.g., getUserMedia errors)

### Third-Party Libraries

- **keymaster.js**: Keyboard shortcuts
- **PxLoader**: Image preloading
- **preloadjs**: Asset loading (CreateJS suite)



When making changes:
1. Test in Chrome desktop browser only
2. Test CSS changes in the dev server
3. Check responsive behavior if modifying layout
4. Verify audio visualization still works correctly
5. Preview changes in the running dev server (hot-reloads automatically)
