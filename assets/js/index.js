// Trippy audio visualizer below
// -----------------------------

// Effects and the gifs associated

var effects = [
  {"name":"techno",
   "fullName":"Techno",
   "gifs":[["smoking-triangle", "mouth", "walking-mickey", "urchin", "abstract-art-loop", "flashing-wall"],
           ["kidmograph-3", "base-jumping", "elephant", "road", "squares", "zebra", "heart", "run", "kidmograph-2", "reagan", "shapes-tunnel", "dolphins", "random-shapes", "small-abstract-rectangles"],
           ["triangle", "spinning-pyramids", "3d-circle", "3d-mirrors", "kidmograph", "crossing-eyes", "biology", "cubes", "abstract-geometry", "trippy-abstract"],
           ["simpsons", "abstract-rainbow-3", "abstract-rainbow-4"]]},

  {"name":"dubstep",
   "fullName":"Dubstep",
   "gifs":[["smoking-triangle", "mouth", "walking-mickey", "urchin", "abstract-art-loop", "flashing-wall"],
           ["kidmograph-3", "base-jumping", "elephant", "road", "squares", "zebra", "heart", "run", "kidmograph-2", "reagan", "shapes-tunnel", "dolphins", "random-shapes", "small-abstract-rectangles"],
           ["yellow-particles", "triangle", "3d-circle", "3d-mirrors", "bmx", "crossing-eyes", "biology", "cubes", "abstract-geometry", "trippy-abstract"],
           ["jennifer-lopez", "breakdancer"]]},

  {"name":"trance",
   "fullName":"Trance",
   "gifs":[["smoking-triangle", "mouth", "walking-mickey", "urchin", "abstract-art-loop", "flashing-wall"],
           ["kidmograph-3", "psychedelic-globes", "zebra", "kidmograph-2", "shapes-tunnel", "dolphins", "random-shapes", "small-abstract-rectangles"],
           ["psychedelic-kaleidoscope", "psychedelic-fire", "psychedelic-kaleidoscope-2", "mandala", "3d-circle", "3d-mirrors", "kidmograph", "crossing-eyes", "biology", "cubes", "abstract-geometry", "trippy-abstract", "trippy-abstract"],
           ["simpsons", "abstract-rainbow-3", "abstract-rainbow-4"]]}
];
var currentEffectId;
var currentEffectName;
var hasCurrentEffectColor = false;
var currentGifForNoIntensity;
var currentGifForIntensityLevel1;
var currentGifForIntensityLevel2;
var currentGifForIntensityLevel3;
var intervalRandomizingVisuals;
var intervalTimeRandomizingVisuals = 15000; // Changing visuals every 10 seconds

// Audio variables
var audioContext;
var audioAnalyser;
var fftSize = 32;
var smoothingTimeConstant = 0.8; // Default 0.8
var audioSetup = false;
var audioPlaying;
var audioElement = new Audio();

// Radios to play
var defaultLevels = [0, 120, 150, 170, 185];
var radios = [
  {"name":"Dublovers.FM",
   "url":"http://mlc.fm/",
   "stream":"http://ml0.t4e.dj:80/dublovers_high.mp3",
   "effect":1,
   "levels":[0, 120, 150, 175, 190]},
  {"name":"DubTerrain.net",
   "url":"http://www.dubterrain.net/",
   "stream":"http://ic2255.c471.fast-serv.com:80/autodj",
   "effect":1,
   "levels":defaultLevels},
  {"name":"UZIC techno - minimal",
   "url":"http://www.uzic.ch/",
   "stream":"http://stream.uzic.ch:9010/;nsv.mp3",
   "effect":0,
   "levels":defaultLevels},
  {"name":"HBR1 - Tronic Lounge",
   "url":"http://www.hbr1.com",
   "stream":"http://radio.hbr1.com:19800/tronic.ogg",
   "effect":0,
   "levels":defaultLevels},
  {"name":"BunkerTV",
   "url":"http://bunkertv.de",
   "stream":"http://www3.2lss.de:8002/bb.mp3",
   "effect":0,
   "levels":defaultLevels},
  {"name":"BassDrive.com",
   "url":"http://www.bassdrive.com",
   "stream":"http://shouthost.com.19.streams.bassdrive.com:8200/;stream.mp3",
   "effect":1,
   "levels":defaultLevels},
  {"name":"HBR1 - I.D.M. Tranceponder",
   "url":"http://www.hbr1.com",
   "stream":"http://radio.hbr1.com:19800/trance.ogg",
   "effect":2,
   "levels":defaultLevels}
];
var defaultRadioId = 0;
var currentRadioId;
var currentIntensityLevel1;
var currentIntensityLevel2;
var currentIntensityLevelAlt;
var currentIntensityLevel3;
var currentIntensityLevel3Alt;

// This variable will adjust browser reaction to intensity
// XXX: Kill if this is not changing anything
var browserIntensityCompensation = 0;

// Visual variables
var visualsElement = document.getElementById("visuals");
var nowPlayingElement = document.getElementById("now-playing");

// TO DEFINE
function init() {
  //console.log("in init");

  requestAnimationFrame(updateVisuals);
  setupAudio();
}
window.addEventListener('load',init,false);

// TO DEFINE
function setupAudio() {
  //console.log("setupAudio()");

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  audioAnalyser = audioContext.createAnalyser();
  audioAnalyser.fftSize = fftSize;
  audioAnalyser.smoothingTimeConstant = smoothingTimeConstant;

  // Configure the <audio> element
  audioElement.autoplay = true;
  audioElement.preload = true;

  setPlayingRadio(defaultRadioId);

  // Connect the source, analyser and the output together
  var audioSource = audioContext.createMediaElementSource(audioElement);
  audioSource.connect(audioAnalyser);
  audioAnalyser.connect(audioContext.destination);

  // We good to go, yo, let's trif!
  audioSetup = true;
}

// Update audio being played
function setPlayingRadio(radioId) {
  //console.log("updateAudio(" + radioId + ")");

  // Test if ID is bigger than the size of the table.
  // If so go back to the first one
  if (radioId < 0) {
    currentRadioId = radios.length - 1;
  } else {
    currentRadioId = radioId % radios.length;
  }
  //console.log("New currentRadioId is: " + currentRadioId);

  // Change audio source and replace radio label + external URL
  audioElement.src = radios[currentRadioId].stream;
  nowPlayingElement.href = radios[currentRadioId].url;
  nowPlayingElement.innerHTML = radios[currentRadioId].name;

  // Prepare & randomize the visuals
  currentEffectId = radios[currentRadioId].effect;
  currentEffectName = effects[currentEffectId].name;

  // At which level is the effect going to react for this radio
  //
  currentIntensityLevel1 =
    (radios[currentRadioId].levels[0] > browserIntensityCompensation)
    ? radios[currentRadioId].levels[0] - browserIntensityCompensation
    : 0;
  currentIntensityLevel2 =
    (radios[currentRadioId].levels[1] > browserIntensityCompensation)
    ? radios[currentRadioId].levels[1] - browserIntensityCompensation
    : 0;
  currentIntensityLevel2Alt =
    (radios[currentRadioId].levels[2] > browserIntensityCompensation)
    ? radios[currentRadioId].levels[2] - browserIntensityCompensation
    : 0;
  currentIntensityLevel3 =
    (radios[currentRadioId].levels[3] > browserIntensityCompensation)
    ? radios[currentRadioId].levels[3] - browserIntensityCompensation
    : 0;
  currentIntensityLevel3Alt =
    (radios[currentRadioId].levels[4] > browserIntensityCompensation)
    ? radios[currentRadioId].levels[4] - browserIntensityCompensation
    : 0;

  // Choose gifs to display with this new radio
  randomizeVisuals();

  // Prepare for gifs to change randomly
  intervalRandomizingVisuals = setInterval(randomizeVisuals, intervalTimeRandomizingVisuals);
}

// Button click & keyboard shortcut to play/pause the current radio
var playPauseRadioElement = document.getElementById("play-pause");
playPauseRadioElement.addEventListener("click", playPauseRadio);
key('space', function(){ playPauseRadio() });

function playPauseRadio() {
  //console.log("playPauseRadio()");

  if(audioPlaying) {
    pauseRadio();
  } else {
    playRadio();
  }
}

function playRadio() {
  //console.log("playRadio()");

  audioElement.play();
}

function pauseRadio() {
  //console.log("pauseRadio()");

  audioElement.pause();
}

// Button click & keyboard shortcut to switch to the next radio
var nextRadioElement = document.getElementById("next");
nextRadioElement.addEventListener("click", nextRadio);
key('right', function(){ nextRadio() });

function nextRadio() {
  //console.log("nextRadio()");

  setPlayingRadio(currentRadioId + 1);

  playRadio();
}

// Keyboard shortcut to switch to the previous radio
key('left', function(){ previousRadio() });

function previousRadio() {
  //console.log("previousRadio()");

  setPlayingRadio(currentRadioId - 1);

  playRadio();
}

audioElement.addEventListener("play", whenPlaying);
audioElement.addEventListener("playing", whenPlaying);

function whenPlaying() {
  //console.log("whenPlaying()");

  playPauseRadioElement.dataset.state = "playing";
  audioPlaying = true;
}

audioElement.addEventListener("pause", whenPaused);

function whenPaused() {
  //console.log("whenPaused()");

  playPauseRadioElement.dataset.state = "paused";
  audioPlaying = false;
}

// Keyboard shortcut to randomize visuals
// Switch to manual mode at the same time, so clear the interval variable randomizing visuals.
key('r', function(){ clearInterval(intervalRandomizingVisuals); randomizeVisuals(); });

function randomizeVisuals() {
  //console.log("prepareVisuals()");

  // Which gifs to display
  currentGifForNoIntensity = effects[currentEffectId].gifs[0][Math.floor(Math.random() * effects[currentEffectId].gifs[0].length)];
  currentGifForIntensityLevel1 = effects[currentEffectId].gifs[1][Math.floor(Math.random() * effects[currentEffectId].gifs[1].length)];
  currentGifForIntensityLevel2 = effects[currentEffectId].gifs[2][Math.floor(Math.random() * effects[currentEffectId].gifs[2].length)];
  currentGifForIntensityLevel3 = effects[currentEffectId].gifs[3][Math.floor(Math.random() * effects[currentEffectId].gifs[3].length)];
}

// Keyboard shortcut to switch color mode
key('c', function(){ hasCurrentEffectColor = !hasCurrentEffectColor; });

// Draw the visuals
function updateVisuals() {
  //console.log("updateVisuals()");

  requestAnimationFrame(updateVisuals);

  if(!audioSetup) return;
  //console.log("updateVisuals(): Audio setup ok");

  var bFrequencyData = new Uint8Array(audioAnalyser.frequencyBinCount);
  //var fFrequencyData = new Float32Array(audioAnalyser.frequencyBinCount);
  audioAnalyser.getByteFrequencyData(bFrequencyData);
  //audioAnalyser.getFloatFrequencyData(fFrequencyData);

  // Figure out the intensity of the moment
  // XXX: This thing below should be an array but well the user don't care, later...
  /*var lowIntensity = 0;
  var midLowIntensity = 0;
  var midHighIntensity = 0;
  var highIntensity = 0;
  var intensityGroupSize = audioAnalyser.frequencyBinCount / 4;*/
  var totalIntensity = 0;

  //console.log(bFrequencyData);
  //console.log(fFrequencyData);
  for(var i=0; i < audioAnalyser.frequencyBinCount; i++) {
    /*if (i < audioAnalyser.frequencyBinCount / 4) {
      lowIntensity += bFrequencyData[i];
    } else if (i < (audioAnalyser.frequencyBinCount / 4) * 2) {
      midLowIntensity += bFrequencyData[i];
    } else if (i < (audioAnalyser.frequencyBinCount / 4) * 3) {
      midHighIntensity += bFrequencyData[i];
    } else {
      highIntensity += bFrequencyData[i];
    }*/
    totalIntensity += bFrequencyData[i];
  }

  //var totalIntensity = lowIntensity + midLowIntensity + midHighIntensity + highIntensity;
  //console.log("updateVisuals(): Intensity: " + totalIntensity + " (Low: " + lowIntensity + " - Mid low: " + midLowIntensity + " - Midhigh: " + midHighIntensity + " - High: " + highIntensity + ")");
  //console.log("updateVisuals() - Total intensity: " + totalIntensity);

  var averageIntensity = totalIntensity / audioAnalyser.frequencyBinCount;

  // Current gif reaction is based on intensity.
  // Probably the wrong way to do it but that works for now.
  // Well, a hack is not a hack if it's perfect.
  // NB: If you set the background directly below using style.backgroundImage,
  // it will not loop the same way and
  if (averageIntensity > currentIntensityLevel3Alt) {
    visualsElement.className = currentEffectName + "-alt"
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForIntensityLevel3;

  } else if (averageIntensity > currentIntensityLevel3) {
    visualsElement.className = currentEffectName
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForIntensityLevel3;

  } else if (averageIntensity > currentIntensityLevel2Alt) {
    visualsElement.className = currentEffectName + "-alt"
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForIntensityLevel2;

  } else if (averageIntensity > currentIntensityLevel2) {
    visualsElement.className = currentEffectName
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForIntensityLevel2;

  } else if (averageIntensity > currentIntensityLevel1) {
    visualsElement.className = currentEffectName
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForIntensityLevel1;

  } else {
    visualsElement.className = currentEffectName
    + ((hasCurrentEffectColor) ? "-color" : "")
    + " gif-" + currentGifForNoIntensity;
  }
}

// Keyboard shortcut to enter/exit fullscreen
var fullScreenElement = document.getElementById("full-screen");
fullScreenElement.addEventListener("click", toggleFullScreen);
key('f', function(){ toggleFullScreen(); });

// Enter/exit fullscreen
function toggleFullScreen() {

  if (!document.fullscreenElement // alternative standard method
      // current working methods
      && !document.mozFullScreenElement
      && !document.webkitFullscreenElement
      && !document.msFullscreenElement ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      fullScreenElement.dataset.state = "full-screen";
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
      fullScreenElement.dataset.state = "full-screen";
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
      fullScreenElement.dataset.state = "full-screen";
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      fullScreenElement.dataset.state = "full-screen";
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullScreenElement.dataset.state = "not-full-screen";
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      fullScreenElement.dataset.state = "not-full-screen";
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      fullScreenElement.dataset.state = "not-full-screen";
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      fullScreenElement.dataset.state = "not-full-screen";
    }
  }
}

// vh / vw Polyfill
// ----

if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}
