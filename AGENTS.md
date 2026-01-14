# AGENTS.md

This repository contains TRIF, an audio-visualizer web application built with vanilla JavaScript, SASS, and Grunt. Agents working in this codebase should follow these guidelines.

## Build Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:4000)
grunt
# or explicitly:
grunt connect

# Compile SASS to CSS
grunt sass

# Watch for SASS changes and auto-compile
grunt min
# or explicitly:
grunt watch

# Minify CSS
grunt cssmin
```

**Note**: No test framework is configured. There are no unit or integration tests. Testing should be done manually in the browser, targeting Chrome (desktop) as the primary platform.

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

### SASS/CSS

- **Syntax**: SCSS with nesting allowed
- **Indentation**: 4 spaces
- **Variables**: Prefix with `$` (`$basicUnitSize: 1.75vmax;`)
- **Nesting**: Use 2-space indents for nested selectors
- **Vendor Prefixes**: Manually add vendor prefixes for experimental CSS features (`-webkit-`, `-moz-`, `-ms-`, `-o-`)
- **Units**: Prefer responsive units (`vmax`, `vmin`, `%`) over fixed units (`px`)
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
├── Gruntfile.js              # Build configuration
├── package.json              # Dependencies and project info
├── config.rb                 # Compass/SASS configuration
├── assets/
│   ├── scss/
│   │   └── style.scss       # Main stylesheet (source)
│   ├── css/
│   │   └── style.css        # Compiled stylesheet
│   ├── js/
│   │   ├── index-*.js       # Main application logic
│   │   ├── parser.js        # CSS parser (library)
│   │   ├── tokenizer.js     # CSS tokenizer (library)
│   │   └── [other libs]
│   ├── gifs/                # Visual assets organized by category
│   └── images/              # Static images (icons, logos)
```

### Browser Compatibility

- **Primary Target**: Google Chrome (desktop)
- **Mobile**: Not supported - shows incompatible message
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
- **vminpoly**: Polyfill for `vmin` units
- **parser.js/tokenizer.js**: CSS parsing utilities (UMD)

When making changes:
1. Test in Chrome desktop browser only
2. Verify SASS compiles correctly with `grunt sass`
3. Check responsive behavior if modifying layout
4. Verify audio visualization still works correctly
5. Run the dev server with `grunt` to preview changes
