# TRIF

Audio visualizer web application built with vanilla JavaScript and SASS.

## Setup

```bash
# Install dependencies
npm install

# Start development server with auto-reload (port 4000)
npm run dev

# Compile SASS for production
npm run build
```

## Development

TRIF uses modern build tools:
- **Sass** (Dart Sass) for SCSS compilation
- **live-server** for development server with auto-reload
- **npm-run-all** for running parallel tasks

Run `npm run dev` to start development server. SASS changes are automatically compiled and browser reloads.

## Deployment

TRIF is deployed to Amazon S3 and served via CloudFront CDN.

1. Build production assets:
   ```bash
   npm run build
   ```

2. Upload to S3 bucket

3. Create CloudFront invalidation for:
   - `/assets/css/style.css`
   - `/assets/js/index.js`
   - `/index.html`

## Browser Support

- **Primary**: Google Chrome (desktop)
- **Mobile**: Not supported

## License

ISC
