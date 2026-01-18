// Mock Web Audio API for testing
global.AudioContext = jest.fn().mockImplementation(() => ({
  createAnalyser: jest.fn(() => ({
    frequencyBinCount: 32,
    getByteFrequencyData: jest.fn()
  }))
}));

global.webkitAudioContext = global.AudioContext;

// Mock DOM elements to prevent errors on require
document.getElementById = jest.fn((id) => {
  const mockElement = {
    addEventListener: jest.fn(),
    className: '',
    style: {},
    dataset: {},
    src: ''
  };
  return mockElement;
});

document.addEventListener = jest.fn();
document.querySelector = jest.fn(() => ({ addEventListener: jest.fn() }));

// Mock window properties
global.window = global;
global.location = { origin: 'http://localhost' };

// Mock key library
global.key = jest.fn();