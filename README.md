# TRIF

An audio-visual experience for the browser: internet radio streams (or your microphone) drive a wall of GIFs through the Web Audio API.

TRIF ran at trif.it from 2014 to 2026. The site is now offline and the project is open source. It may come back online one day; until then, you can run it locally.

## Run it

Requires Node 18.20 or later.

```bash
npm install
npm run dev
```

Vite prints the local URL. Open it in Chrome and press play.

Other scripts:

```bash
npm run build     # copy the site to dist/ and minify the CSS
npm run preview   # serve the build
npm run lint
npm test
```

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| H | Toggle help |
| F | Toggle fullscreen |
| R | Randomize visuals |
| C | Toggle color |
| = / - | Adjust intensity |
| Left / Right | Previous / next radio |

## How it is built

Vanilla ES5 JavaScript, plain CSS and a single `index.html`; no framework and no module system.

- `assets/js/index.js`: application logic (audio analysis, visuals, controls)
- `assets/css/style.css`: styles
- `assets/radios.json`: radio streams
- `assets/gifs/`: visuals
- `tools/radio-curation/`: script and test page for checking radio streams

Streams come from third-party broadcasters and can go offline at any time; edit `assets/radios.json` to replace them.

## Deployment

The site was hosted on Amazon S3 behind CloudFront. The workflow in `.github/workflows/deploy.yml` is kept for reference and only runs when started by hand.

## Browser support

Google Chrome on desktop is the main target. Other browsers and mobile work where the Web Audio API is available.

## License

The code is released under the [MIT License](LICENSE).

The license does not cover the GIFs in `assets/gifs/`, which belong to their respective owners and are included for demonstration only, nor the radio streams, nor the bundled third-party libraries (keymaster.js, PxLoader, vminpoly), which keep their own licenses. If you own one of the GIFs and want it removed, open an issue.
