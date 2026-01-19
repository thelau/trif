var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

var outputFile = path.join(__dirname, 'candidates.json');

// Underground genres to filter
var genres = ['undergroundtechno', 'hardtechno', 'jungle', 'neurofunk'];

console.log('Fetching di.fm channels...');

// Fallback: hardcode some placeholder streams for now
// TODO: Implement di.fm API call with auth
var fallback = [
  { name: 'Underground Techno', stream: 'https://example.com/undergroundtechno.mp3', key: 'undergroundtechno' },
  { name: 'Hard Techno', stream: 'https://example.com/hardtechno.mp3', key: 'hardtechno' },
  { name: 'Jungle', stream: 'https://example.com/jungle.mp3', key: 'jungle' },
  { name: 'Drum & Bass', stream: 'https://example.com/dnb.mp3', key: 'neurofunk' }
];

fs.writeFileSync(outputFile, JSON.stringify(fallback, null, 2));
console.log('Saved fallback candidates to ' + outputFile);