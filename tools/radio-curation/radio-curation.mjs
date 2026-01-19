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
const apiUrl = 'https://de1.api.radio-browser.info/json/stations/search?tag=techno&limit=10';

exec(`curl -s "${apiUrl}"`, (error, stdout, stderr) => {
  let candidates = [];

  if (!error && stdout) {
    try {
      const stations = JSON.parse(stdout);
      candidates = stations.slice(0, 4).map(station => ({
        name: station.name,
        stream: station.url_resolved || station.url,
        key: station.tags ? station.tags.split(',')[0] : 'unknown'
      }));
      console.log(`Fetched ${candidates.length} candidates from API`);
    } catch (err) {
      console.error('Error parsing API response:', err);
    }
  }

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
});