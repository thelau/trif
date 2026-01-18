// Mock Web Audio API for testing
global.AudioContext = jest.fn().mockImplementation(() => ({
  createAnalyser: jest.fn(() => ({
    frequencyBinCount: 32,
    getByteFrequencyData: jest.fn()
  }))
}));

global.webkitAudioContext = global.AudioContext;