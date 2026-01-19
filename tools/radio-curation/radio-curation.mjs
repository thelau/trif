import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = path.join(__dirname, 'candidates.json');

// Underground genres to filter
const genres = ['undergroundtechno', 'hardtechno', 'jungle', 'neurofunk'];

console.log('Fetching radio stations from public API...');

// Try fetching from a free radio API (radio-browser.info)
const apiUrls = [
  'https://de1.api.radio-browser.info/json/stations/search?tag=techno&limit=10',
  'https://de1.api.radio-browser.info/json/stations/search?tag=electronic&limit=10',
  'https://de1.api.radio-browser.info/json/stations/search?tag=dance&limit=10'
];

// Fetch from multiple URLs and combine
let allStations = [];
let fetchPromises = apiUrls.map(url =>
  new Promise((resolve) => {
    exec(`curl -s "${url}"`, (error, stdout) => {
      if (!error && stdout) {
        try {
          const stations = JSON.parse(stdout);
          resolve(stations);
        } catch (err) {
          console.error('Error parsing response for', url, err);
          resolve([]);
        }
      } else {
        resolve([]);
      }
    });
  })
);

Promise.all(fetchPromises).then((results) => {
  results.forEach(stations => allStations.push(...stations));
  // Remove duplicates and limit to 20 unique
  const uniqueStations = Array.from(new Set(allStations.map(s => s.url_resolved || s.url)))
    .map(url => allStations.find(s => (s.url_resolved || s.url) === url))
    .slice(0, 20);

  let candidates = uniqueStations.map(station => ({
    name: station.name,
    stream: station.url_resolved || station.url,
    key: station.tags ? station.tags.split(',')[0] : 'unknown'
  }));

  console.log(`Fetched ${candidates.length} candidates from API`);

  if (candidates.length === 0) {
    // Fallback
    candidates = [
      { name: 'Underground Techno', stream: 'https://example.com/undergroundtechno.mp3', key: 'techno' },
      { name: 'Hard Techno', stream: 'https://example.com/hardtechno.mp3', key: 'electronic' },
      { name: 'Jungle', stream: 'https://example.com/jungle.mp3', key: 'jungle' },
      { name: 'Drum & Bass', stream: 'https://example.com/dnb.mp3', key: 'drum and bass' }
    ];
    console.log('Using fallback candidates');
  }

  fs.writeFileSync(outputFile, JSON.stringify(candidates, null, 2));
  console.log('Saved candidates to ' + outputFile);
}).catch((err) => {
  console.error('Error in fetching:', err);
});