// Trippy audio visualizer below
// -----------------------------

// Effects and the gifs associated

var gifsForNoIntensity = ["wall-projection", "next-fashion", "space", "wave", "screen"];
var effects = [
  {
    "name": "techno",
    "fullName": "Techno",
    "assetsPath": window.location.origin + "/assets/gifs/",
    "gifs": [gifsForNoIntensity,
      ["concrete", "falling-chemical-reaction", "filaments-hand", "deepdream", "c4d-glitch", "moving-statue", "3d-scan-1", "meteorit-fractals", "planet-spaceship", "imaginary-system-1", "walking-alien", "light-installation", "recursive-buildings", "parallel-world", "hypnotic-springs", "walking-robot", "kidmograph-3", "elephant", "zebra", "run", "los-angeles", "infinite-room", "night-train", "vintage-face", "underwater-woman", "running-steps", "giant-statue", "rotating-cubes-in-cubes"],
      ["live-painting", "circle-clouds-inverted", "face-particles-inverted", "moutains-pixel-shaded", "raven-kwok-1", "shape-shifting-street-1", "shape-shifting-moutain-2", "broken-screen", "bonnaroo-6", "demo-scene-2", "balls-in-light", "pasto-2", "trippy-abstract", "daft-punk-2", "drawing-alive", "particles-spheres", "water-colour"],
      ["style-transfer-1", "holo-dance", "3d-scan-3", "demo-3", "monkey-fall", "particles-dancer", "kid-changing-clothes", "crowd", "mixed-reality", "vintage-club", "beyonce-2", "glitch-80s", "move", "raver-1", "raver-4"]],
    "treatment": "default",
    "color": false
  },

  {
    "name": "dubstep",
    "fullName": "Dubstep",
    "assetsPath": window.location.origin + "/assets/gifs/",
    "gifs": [gifsForNoIntensity,
      ["concrete", "falling-chemical-reaction", "filaments-hand", "deepdream", "c4d-glitch", "moving-statue", "3d-scan-1", "meteorit-fractals", "planet-spaceship", "imaginary-system-1", "face-water", "distorted-crowd", "light-installation", "recursive-buildings", "kidmograph-3", "base-jumping", "zebra", "run", "los-angeles", "infinite-room", "night-train", "running-steps", "giant-statue", "miami-vice", "rotating-cubes-in-cubes"],
      ["live-painting", "face-particles-inverted", "moutains-pixel-shaded", "raven-kwok-1", "shape-shifting-street-1", "shape-shifting-moutain-2", "broken-screen", "bonnaroo-6", "pasto-2", "drawing-alive", "abstract-excavation"],
      ["3d-scan-3", "demo-3", "particles-dancer", "urban-dancer", "clones-1", "clones-2", "jennifer-lopez", "tyler", "empire"]],
    "treatment": "default",
    "color": false
  },

  {
    "name": "drumnbass",
    "fullName": "Drum and Bass",
    "assetsPath": window.location.origin + "/assets/gifs/",
    "gifs": [gifsForNoIntensity,
      ["concrete", "filaments-hand", "deepdream", "c4d-glitch", "moving-statue", "3d-scan-1", "meteorit-fractals", "planet-spaceship", "imaginary-system-1", "light-installation", "recursive-buildings", "parallel-world", "kidmograph-3", "base-jumping", "zebra", "run", "los-angeles", "infinite-room", "night-train", "running-steps", "giant-statue", "miami-vice", "rotating-cubes-in-cubes"],
      ["live-painting", "face-particles-inverted", "moutains-pixel-shaded", "raven-kwok-1", "shape-shifting-street-1", "shape-shifting-moutain-2", "broken-screen", "bonnaroo-6", "demo-scene-2", "balls-in-light", "pasto-2", "drawing-alive", "water-colour"],
      ["style-transfer-1", "holo-dance", "3d-scan-2", "3d-scan-3", "missy-elliot-2", "missy-elliot-3", "urban-dancer", "missy-elliot-1", "crowd", "mixed-reality", "beyonce-3"]],
    "treatment": "default",
    "color": false
  },

  {
    "name": "trance",
    "fullName": "Trance",
    "assetsPath": window.location.origin + "/assets/gifs/",
    "gifs": [gifsForNoIntensity,
      ["deepdream", "demo-1", "demo-3", "close-up-head", "light-installation", "kidmograph-3", "zebra"],
      ["live-painting", "bubbles-up", "tree-lights", "broken-screen", "glitchy-face", "fractal", "distortion", "trippy-mushrooms", "psychedelic-clouds"],
      ["looking-up", "fast-movements-explosions", "light-dancer-1", "light-dancer-2", "light-dancer-3"]],
    "treatment": "default",
    "color": true
  },

  {
    "name": "women-day",
    "fullName": "Women day",
    "assetsPath": window.location.origin + "/assets/gifs/women-day/",
    "gifs": [gifsForNoIntensity,
      ["audrey-tautou-2", "lips", "audrey-hepburn-3", "audrey-hepburn-1", "zooey-deschanel", "wonder-woman-2", "uma-thurman-3", "uma-thurman-2", "uma-thurman-1", "taylor-swift-2", "smoking-model", "rihanna-7", "rihanna-3", "rihanna-2", "olivia-wilde", "natalie-portman-4", "natalie-portman-2", "nail-art", "monica-bellucci-4", "makeup", "madonna-3", "lady-gaga-12", "lady-gaga-11", "lady-gaga-10", "lady-gaga-9", "lady-gaga-7", "kristen-dunst", "kate-moss", "judy-garland-1", "janelle-monae", "janelle-monae-2", "indonesia", "grace-kelly-1", "glitch-80s", "friendship", "fashion-8", "fashion-7", "fashion-5", "fashion-3", "fashion-1", "emma-stone-1", "destinys-child", "demi-lovato", "beyonce-5", "asian-woman-1", "1940s-woman", "1930s-woman"],
      ["los-angeles", "nicki-minaj-1", "kaleidoscope", "illusion-1", "frequency-waves"],
      ["audrey-tautou-2", "lips", "audrey-hepburn-3", "audrey-hepburn-1", "zooey-deschanel", "wonder-woman-2", "uma-thurman-3", "uma-thurman-2", "uma-thurman-1", "taylor-swift-2", "smoking-model", "rihanna-7", "rihanna-3", "rihanna-2", "olivia-wilde", "natalie-portman-4", "natalie-portman-2", "nail-art", "monica-bellucci-4", "makeup", "madonna-3", "lady-gaga-12", "lady-gaga-11", "lady-gaga-10", "lady-gaga-9", "lady-gaga-7", "kristen-dunst", "kate-moss", "judy-garland-1", "janelle-monae", "janelle-monae-2", "indonesia", "grace-kelly-1", "glitch-80s", "friendship", "fashion-8", "fashion-7", "fashion-5", "fashion-3", "fashion-1", "emma-stone-1", "destinys-child", "demi-lovato", "beyonce-5", "asian-woman-1", "1940s-woman", "1930s-woman"]],
    "treatment": "default",
    "color": false
  }
];
var isDev = window.location.hostname === 'localhost' || window.location.port === '4000';
var lastAverageIntensity = 0;
var lastUpdate = 0;
var currentEffectId;
var currentEffectTreatment;
var hasCurrentEffectColor = false;
var currentGifForNoIntensity;
var currentGifForIntensityLevel1;
var currentGifForIntensityLevel2;
var currentGifForIntensityLevel3;
var timeoutRandomizingVisuals;
var timeoutTimeRandomizingVisuals = 15000; // Changing visuals at max every X ms

// Intensity levels
var defaultIntensityLevels = [0, 100, 127.5, 140, 155];
//var defaultIntensityLevels = [0, 132.5, 150, 162.5, 177.5];
var currentIntensityLevel1;
var currentIntensityLevel2;
var currentIntensityLevelAlt;
var currentIntensityLevel3;
var currentIntensityLevel3Alt;
var intensityLevelAdjustment = 0;

// Audio variables
var radioSource;
var micSource;
var audioContext;
var audioAnalyser;
var audioGain;
var fftSize = 32;
var smoothingTimeConstant = 0.8; // Default 0.8
var audioSetup = false;
var audioPlaying;
var audioElement = document.getElementById("audio");
var inputAudioStream;
var isInputAudioActive = false;

// Radios to play

var defaultRadioId = 0;
var radios = [];
var currentRadioIndex = 0;
var currentLoader = null;


function loadRadios() {
  return fetch('./assets/radios.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      radios = data.filter(function(r) { return r.status === 'confirmed'; });
    });
}
var currentRadioId;

// Visuals variables
var controlsElement = document.getElementById("controls");
var visualsElement = document.getElementById("visuals");
var nowPlayingElement = document.getElementById("now-playing");
var loadingElement = document.getElementById("loading");
var loadingVisuals = false;

// Tools & Utilities functions
var isBrowserIncompatible = false;

// Detect Web Audio API support
var hasWebAudio = function () {
  return !!(window.AudioContext || window.webkitAudioContext);
};

// Detect if it's Chrome
var isChrome = function () {
  return Boolean(window.chrome);
}

// This is where it all starts...
function init() {
  //console.log("in init");

  // Test for Web Audio API support
  if (!hasWebAudio()) {
    var incompatibleElement = document.getElementById("incompatible-desktop");
    incompatibleElement.style.display = "block";
    isBrowserIncompatible = true;
  }

  // If we found that the browser cannot make it, we will take care of that
  // using styling...
  if (isBrowserIncompatible) {
    var root = document.documentElement;
    root.className += " incompatible";

    // ...if not we just party!
  } else {
    setupVisuals();
    loadRadios().then(function() {
      handleRouting();
    });
  }
}
window.addEventListener('load', init, false);


// TODO: DESCRIPTION TO DEFINE
function setupVisuals() {
  //console.log("setupVisuals()");

  requestAnimationFrame(updateVisuals);
}

// TODO: DESCRIPTION TO DEFINE
function setupAudio() {
  //console.log("setupAudio()");

  //audioElement.autoplay = true;
  audioElement.preload = true;
  audioElement.crossOrigin = "anonymous";

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  audioAnalyser = audioContext.createAnalyser();
  audioAnalyser.fftSize = fftSize;
  audioAnalyser.smoothingTimeConstant = smoothingTimeConstant;
  audioGain = audioContext.createGain();

  // Connect the source, analyser and the output together
  radioSource = audioContext.createMediaElementSource(audioElement);
  radioSource.connect(audioAnalyser);
  audioAnalyser.connect(audioGain);
  audioGain.connect(audioContext.destination);

  // We good to go, yo, let's trif!
  audioSetup = true;
}

// TODO 1: DESCRIPTION TO DEFINE
// TODO 2: Don't use hashbang stuff here and go full html5 mode on
// TODO 3: If pushstate was to throw popstate event, we could use the listener
// to trigger functionality like playing radio, etc which should not be handled
// by this function.
// TODO 4: Throw popstate event manually after pushstate calls. Pushstate should
// be done in this function and not the setPlayingRadio one for centralization sake
function handleRouting() {
  //console.log("handleRouting()");

  // Analyse the URL and decides what to play
  var givenHashbang = window.location.hash;
  //console.log("handleRouting() - Given hashbang: " + givenHashbang);

  // If no hashbang, we engage into the default behaviour
  if (!givenHashbang) {
    setPlayingRadio(defaultRadioId, false);
  } else {

    // Check the link type
    var hashbangType;

    // If the hashbang starts with #/radio/
    //console.log("setupAudio() - hasbangType is radio? " + givenHashbang.substring(0, 8));
    if (givenHashbang.substring(0, 8) == "#/radio/") {
      hashbangType = "radio";
    }

    //console.log("setupAudio() - hasbangType: " + hashbangType);

    // Do default behaviour according to the hashbang type
    if (hashbangType == "radio") {
      // Grab the radio encoded name out of the hashbang
      var givenRadioEncodedName = givenHashbang.substring(8);

      //console.log("setupAudio() - Radio - Encoded name: " + givenRadioEncodedName);

      // Check if a radio exists for that encoded name
      var givenRadio = radios.filter(function (radio) {
        return radio.encodedName == givenRadioEncodedName;
      });

      // XXX: If more than one radio is returned (because that's .filter does),
      // too bad because we will take only the first one.
      if (givenRadio.length > 0) {
        //console.log("setupAudio() - Radio - Encoded name was found");
        setPlayingRadio(givenRadio[0].id, false);
      } else {
        //console.log("setupAudio() - Radio - Encoded name was not found");
        setPlayingRadio(defaultRadioId, false);
      }

      // We don't know what this link is, engaging into the default behaviour
    } else {
      setPlayingRadio(defaultRadioId, false);
    }
  }
}

// Routing
window.addEventListener("popstate", function (event) {
  //console.log("popstate event");
  //console.log("popstate event - location: " + document.location);
  //console.log("popstate event - state: " + JSON.stringify(event.state));
  //console.log(event);

  handleRouting();
});

// Update audio being played
function setPlayingRadio(radioId, play) {
  //console.log("setPlayingRadio(" + radioId + " - " + play + ")");

  // Find the radio by ID
  var radio = radios.find(function(r) { return r.id === radioId; });
  if (!radio) {
    currentRadioIndex = 0;
    radio = radios[0];
  } else {
    currentRadioIndex = radios.indexOf(radio);
  }
  // Reset color to the effect's color when changing radio
  hasCurrentEffectColor = effects[radios[currentRadioIndex].effect].color;
  //console.log("setPlayingRadio() - New currentRadioIndex is: " + currentRadioIndex);

  // Change URL by pushing a new state (only if different from the current one)
  // XXX: This code should go in handleRouting() asap with just a replacestate
  // here eventually
  var currentHistoryState = history.state;
  var newHistoryState = { radio: radios[currentRadioIndex].encodedName };
  //console.log("setPlayingRadio() - Current history state: " + JSON.stringify(currentHistoryState));
  //console.log("setPlayingRadio() - New history state: " + JSON.stringify(newHistoryState));
  //console.log("setPlayingRadio() - Current history state == New history state? " + (JSON.stringify(currentHistoryState) == JSON.stringify(newHistoryState)));
  if (JSON.stringify(currentHistoryState) != JSON.stringify(newHistoryState)) {
    history.pushState(newHistoryState, "Listening to " + radios[currentRadioIndex].name + " - TRIF", "#/radio/" + radios[currentRadioIndex].encodedName);
  }

  // Change audio source and replace radio label + external URL
  // XXX: Music plays while we load, ok for now... Not like that on mobile obviously
  audioElement.src = radios[currentRadioIndex].stream;
  if (audioSetup) audioElement.play();
  nowPlayingElement.href = radios[currentRadioIndex].url;
  nowPlayingElement.innerHTML = radios[currentRadioIndex].name;

  //console.log(radioSource);

  loadVisuals(radios[currentRadioIndex].effect);
}

// Load given visuals
function loadVisuals(effectId) {
  if (isDev) {
    console.log("Loading visuals for effectId:", effectId);
  }

  // Stop any previous loader to prevent interruptions
  if (currentLoader && typeof currentLoader.stop === 'function') {
    currentLoader.stop();
  }

  var visualAssetsLoader = new PxLoader();
  currentLoader = visualAssetsLoader;
  var baseVisualAssetsUrl;
  var currentVisualAssetId = 0;

  // Grabbing info about the effect associated with that radio
  currentEffectId = effectId;
  hasCurrentEffectColor = effects[currentEffectId].color;
  currentEffectTreatment = effects[currentEffectId].treatment;
  baseVisualAssetsUrl = effects[currentEffectId].assetsPath;

  // At which level is the effect going to react
  if (!isInputAudioActive) {
    currentIntensityLevel1 = radios[currentRadioIndex].levels[0];
    currentIntensityLevel2 = radios[currentRadioIndex].levels[1]
      + radios[currentRadioIndex].levelAdjustment;
    currentIntensityLevel2Alt = radios[currentRadioIndex].levels[2]
      + radios[currentRadioIndex].levelAdjustment;
    currentIntensityLevel3 = radios[currentRadioIndex].levels[3]
      + radios[currentRadioIndex].levelAdjustment;
    currentIntensityLevel3Alt = radios[currentRadioIndex].levels[4]
      + radios[currentRadioIndex].levelAdjustment;
  } else {
    currentIntensityLevel1 = defaultIntensityLevels[0];
    currentIntensityLevel2 = defaultIntensityLevels[1];
    currentIntensityLevel2Alt = defaultIntensityLevels[2];
    currentIntensityLevel3 = defaultIntensityLevels[3];
    currentIntensityLevel3Alt = defaultIntensityLevels[4];
  }

  // Add all visual assets needed for that radio to the loading queue

  // Load all gifs for the given effect
  for (var i = 0; i < effects[currentEffectId].gifs.length; i++) {
    for (var j = 0; j < effects[currentEffectId].gifs[i].length; j++) {
      tmpVisualAsset = new PxLoaderImage(baseVisualAssetsUrl + effects[currentEffectId].gifs[i][j] + ".gif");
      tmpVisualAsset.imageNumber = ++currentVisualAssetId;
      visualAssetsLoader.add(tmpVisualAsset);
      //console.log("Preparing image#" + currentVisualAssetId + " (" + baseVisualAssetsUrl + effects[currentEffectId].gifs[i][j] + ".gif) for loading");
    }
  }



  // Monitor visual assets when loading is in progress
  visualAssetsLoader.addProgressListener(function (e) {
    /*console.log("visualAssetsLoader.addProgressListener()";
      + " - Image #" + e.resource.imageNumber + " loaded"
      + " - " + e.completedCount + "/" + e.totalCount);*/

    loadingElement.innerHTML = "<p>Loading visuals<br/>"
      + "<span class='count'>"
      + e.completedCount + "/" + e.totalCount +
      "</span></p>";
  });

  // Once visual assets have been loaded, we can setup the magic!
  visualAssetsLoader.addCompletionListener(function () {
    //console.log("visualAssetsLoader.addCompletionListener() - Loading of assets complete for effectId:", currentEffectId);

    loadingElement.style.display = "none";
    loadingVisuals = false;
    currentLoader = null;

    // Randomize visuals to display with this new radio
    randomizeVisuals();
  });

  // Start downloading all visual assets...
  visualAssetsLoader.start();

  // ...and tell the user about it
  loadingElement.style.display = "block";
  loadingVisuals = true;
}

// Button click & keyboard shortcut to play/pause the current radio
var playPauseRadioElement = document.getElementById("play-pause");
playPauseRadioElement.addEventListener("click", function () {
  //mixpanel.track("Click button 'play-pause'");
  playPauseRadio();
});
key('space', function () {
  //mixpanel.track("Press space bar");
  playPauseRadio();
});

function playPauseRadio() {
  //console.log("playPauseRadio()");

  if (audioPlaying) {
    pauseRadio();
  } else {
    playRadio();
  }
}

function playRadio() {
  //console.log("playRadio()");

  if (!audioSetup) setupAudio();
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  audioElement.play();
}

function pauseRadio() {
  //console.log("pauseRadio()");

  if (!audioSetup) setupAudio();
  audioElement.pause();
}

// Button click & keyboard shortcut to switch to the next radio
var nextRadioElement = document.getElementById("next");
nextRadioElement.addEventListener("click", function () {
  //mixpanel.track("Click button 'next-radio'");
  nextRadio();
});
key('right', function () {
  //mixpanel.track("Press right key");
  nextRadio();
});

function nextRadio() {
  //console.log("nextRadio()");

  currentRadioIndex = (currentRadioIndex + 1) % radios.length;
  setPlayingRadio(radios[currentRadioIndex].id, false);
}

// Keyboard shortcut to switch to the previous radio
key('left', function () {
  //mixpanel.track("Press left key");
  previousRadio();
});

function previousRadio() {
  //console.log("previousRadio()");

  currentRadioIndex = (currentRadioIndex - 1 + radios.length) % radios.length;
  setPlayingRadio(radios[currentRadioIndex].id, false);
}

// Audio listeners and events

/*audioElement.addEventListener("abort", whenAbort);

function whenAbort() {
  //console.log("whenAbort()");
}

audioElement.addEventListener("emptied", whenEmptied);

function whenEmptied() {
  //console.log("whenEmptied()");
}

audioElement.addEventListener("ended", whenEnded);

function whenEnded() {
  //console.log("whenEnded()");
}*/

audioElement.addEventListener("error", whenError);

function whenError(e) {
  //console.log("whenError()");
  //console.log(e);
}

/*audioElement.addEventListener("loadedmetadata", whenMetadataHasBeenLoaded);

function whenMetadataHasBeenLoaded(e) {
  //console.log("whenMetadataHasBeenLoaded()");
  //console.log(e);
}*/

// XXX: Is not triggered when network is crap and radio has to load in the middle.
// This only works when initially loading.
//audioElement.addEventListener("loadstart", whenLoading);

function whenLoading() {
  //console.log("whenLoading()");

  controlsElement.dataset.state = "loading";
  audioPlaying = false;
}

audioElement.addEventListener("pause", whenPaused);

function whenPaused() {
  //console.log("whenPaused()");

  controlsElement.dataset.state = "paused";
  audioPlaying = false;
}

audioElement.addEventListener("playing", whenPlaying);

function whenPlaying() {
  //console.log("whenPlaying()");

  controlsElement.dataset.state = "playing";
  audioPlaying = true;
}

/*audioElement.addEventListener("progress", whenProgress);

function whenProgress(e) {
  //console.log("whenProgress()");
  //console.log(e);
}*/

/*audioElement.addEventListener("seeked", whenSeeked);

function whenSeeked() {
  //console.log("whenSeeked()");
}

audioElement.addEventListener("seeking", whenSeeking);

function whenSeeking() {
  //console.log("whenSeeking()");
}*/

audioElement.addEventListener("stalled", whenStalled);

function whenStalled() {
  //console.log("whenStalled()");

  controlsElement.dataset.state = "stalled";
  audioPlaying = false;
}

/*audioElement.addEventListener("suspend", whenSuspend);

function whenSuspend() {
  //console.log("whenSuspend()");
}*/

/*audioElement.addEventListener("waiting", whenWaiting);

function whenWaiting() {
  //console.log("whenWaiting()");
}*/

// Keyboard shortcut to activate/deactivate input audio
key('i', function () {
  //mixpanel.track("Press 'i' key");

  if (isInputAudioActive) {

    if (inputAudioStream) inputAudioStream.stop();
    playRadio();
    audioGain.gain.value = 1.0;

    isInputAudioActive = false;
    document.body.dataset.state = "radio";

  } else {
    navigator.getUserMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    navigator.getUserMedia({ audio: true }, function (stream) {

      pauseRadio();
      inputAudioStream = stream;
      audioGain.gain.value = 0.0;

      if (!micSource) {
        micSource = audioContext.createMediaStreamSource(inputAudioStream);
        micSource.connect(audioAnalyser);
      }
      isInputAudioActive = true;
      document.body.dataset.state = "microphone";

    },
    function (err) {
      console.error("defineAudioSource - getUserMedia - Error: " + err);
    });
  }
});

// =/- to adjust intensity level detection
key('=', function () {
  //mixpanel.track("Press '=' key");
  intensityLevelAdjustment += 0.5;
  //console.log("Intensity level adjustment: " + intensityLevelAdjustment);
});
key('-', function () {
  //mixpanel.track("Press '-' key");
  intensityLevelAdjustment -= 0.5;
  //console.log("Intensity level adjustment: " + intensityLevelAdjustment);
});

// Numbers 1 to 4 activate visuals
key('1', function () {
  //mixpanel.track("Press '1' key");
  loadVisuals(0);
});
key('2', function () {
  //mixpanel.track("Press '2' key");
  loadVisuals(1);
});
key('3', function () {
  //mixpanel.track("Press '3' key");
  loadVisuals(2);
});
key('4', function () {
  //mixpanel.track("Press '4' key");
  loadVisuals(3);
});
key('5', function () {
  //mixpanel.track("Press '4' key");
  loadVisuals(4);
});

// Keyboard shortcut to randomize visuals
key('r', function () {
  //mixpanel.track("Press 'r' key");
  randomizeVisuals();
});

function randomizeVisuals() {
  if (isDev) {
    console.log("randomizeVisuals()");
  }

  // Which gifs to display
  currentGifForNoIntensity = effects[currentEffectId].gifs[0][Math.floor(Math.random() * effects[currentEffectId].gifs[0].length)];
  currentGifForIntensityLevel1 = effects[currentEffectId].gifs[1][Math.floor(Math.random() * effects[currentEffectId].gifs[1].length)];
  currentGifForIntensityLevel2 = effects[currentEffectId].gifs[2][Math.floor(Math.random() * effects[currentEffectId].gifs[2].length)];
  currentGifForIntensityLevel3 = effects[currentEffectId].gifs[3][Math.floor(Math.random() * effects[currentEffectId].gifs[3].length)];

  if (isDev) {
    console.log("Set effect GIFs: noIntensity=", currentGifForNoIntensity, "level1=", currentGifForIntensityLevel1);
  }

  // Calling back this same function in a randomized number calculated based on
  // the pre-defined interval of time and 10% of that time (very shitty technique for now)
  var newTimeoutTimeRandomizingVisuals = Math.floor((Math.random() * timeoutTimeRandomizingVisuals) + (timeoutTimeRandomizingVisuals / 5));
  //console.log("randomizeVisuals() - Randomizing visuals again in " + newTimeoutTimeRandomizingVisuals + "ms");
  clearInterval(timeoutRandomizingVisuals);
  timeoutRandomizingVisuals = setTimeout(randomizeVisuals, newTimeoutTimeRandomizingVisuals);
}

// Keyboard shortcut to switch color mode
key('c', function () {
  //mixpanel.track("Press 'c' key");
  hasCurrentEffectColor = !hasCurrentEffectColor;
  updateVisuals(); // Force update to apply color change
});

// Draw the visuals
function updateVisuals() {
  //console.log("updateVisuals()");

  // Throttle to ~30fps to reduce CPU load
  if (Date.now() - lastUpdate < 33) {
    requestAnimationFrame(updateVisuals);
    return;
  }
  lastUpdate = Date.now();

  requestAnimationFrame(updateVisuals);

  var totalIntensity = 0;
  var averageIntensity = 0;

  if (audioSetup) {

    var byteFrequencyData = new Uint8Array(audioAnalyser.frequencyBinCount);
    audioAnalyser.getByteFrequencyData(byteFrequencyData);

    // Figure out the intensity of the moment
    //console.log(byteFrequencyData);
    for (var i = 0; i < audioAnalyser.frequencyBinCount; i++) {
      totalIntensity += byteFrequencyData[i];
    }

    averageIntensity = totalIntensity / audioAnalyser.frequencyBinCount;
    //console.log("updateVisuals() - Average intensity: " + averageIntensity);

    // Optimize: Skip DOM update if intensity unchanged
    // if (averageIntensity === lastAverageIntensity) {
    //   requestAnimationFrame(updateVisuals);
    //   return;
    // }
    // lastAverageIntensity = averageIntensity;
    /*console.log("updateVisuals()"
      + " - Intensity: " + averageIntensity
      + " - Reactive levels: ["
      + (currentIntensityLevel1 + intensityLevelAdjustment) + ", "
      + (currentIntensityLevel2 + intensityLevelAdjustment) + ", "
      + (currentIntensityLevel2Alt + intensityLevelAdjustment) + ", "
      + (currentIntensityLevel3 + intensityLevelAdjustment) + ", "
      + (currentIntensityLevel3Alt + intensityLevelAdjustment)
      + "]");*/
  }

  // If visuals are still loading, we do not start displaying with the visuals
  if (loadingVisuals) return;
  //console.log("updateVisuals(): Visuals loaded, averageIntensity:", averageIntensity);

  // Current gif reaction is based on intensity.
  // Probably the wrong way to do it but that works for now.
  // Well, a hack is not a hack if it's perfect.
  // NB: If you set the background directly below using style.backgroundImage,
  // it will not loop the same way as the current version weirdly let the gif
  // flow even if it's not displayed for whichever reason. Hopefully this will
  // keep working like that or we will have to use a layer for each intensity
  // level most probably (that's one potential alternative solution)
  if (averageIntensity > (currentIntensityLevel3Alt + intensityLevelAdjustment)) {
    visualsElement.className = currentEffectTreatment + "-alt"
      + ((hasCurrentEffectColor) ? "-color" : "")
      + " gif-" + currentGifForIntensityLevel3;

  } else if (averageIntensity > (currentIntensityLevel3 + intensityLevelAdjustment)) {
    visualsElement.className = currentEffectTreatment
      + ((hasCurrentEffectColor) ? "-color" : "")
      + " gif-" + currentGifForIntensityLevel3;

    // Removing the "alt" effect for middle-intensity visuals (too flashy for now)
    /*} else if (averageIntensity > (currentIntensityLevel2Alt + intensityLevelAdjustment)) {
      visualsElement.className = currentEffectTreatment + "-alt"
      + ((hasCurrentEffectColor) ? "-color" : "")
      + " gif-" + currentGifForIntensityLevel2;*/

  } else if (averageIntensity > (currentIntensityLevel2 + intensityLevelAdjustment)) {
    visualsElement.className = currentEffectTreatment
      + ((hasCurrentEffectColor) ? "-color" : "")
      + " gif-" + currentGifForIntensityLevel2;

  } else if (averageIntensity > (currentIntensityLevel1 + intensityLevelAdjustment)) {
    visualsElement.className = currentEffectTreatment
      + ((hasCurrentEffectColor) ? "-color" : "")
      + " gif-" + currentGifForIntensityLevel1;

  } else {
    visualsElement.className = currentEffectTreatment
       + ((hasCurrentEffectColor) ? "-color" : "")
       + " gif-" + currentGifForNoIntensity;

    //console.log("Setting default visual className:", visualsElement.className, "gif:", currentGifForNoIntensity);
  }
}

// Keyboard shortcut to enter/exit fullscreen
var fullscreenButtonElement = document.getElementById("fullscreen");
fullscreenButtonElement.addEventListener("click", function () {
  //mixpanel.track("Click button 'fullscreen'");
  toggleFullscreen();
});
key('f', function () {
  //mixpanel.track("Press 'f' key");
  toggleFullscreen();
});

// Enter/exit fullscreen
function toggleFullscreen() {

  if (!document.fullscreenElement // alternative standard method
    // current working methods
    && !document.mozFullScreenElement
    && !document.webkitFullscreenElement
    && !document.msFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function handleFullscreenChange() {
  //console.log(handleFullscreenChange());
  var fullscreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  //console.log(fullscreenElement);
  if (fullscreenElement != null) {
    //console.log("handleFullscreenChange(): fullscreen");
    fullscreenButtonElement.dataset.state = "fullscreen";
    //mixpanel.track("Fullscreen on'");
  } else {
    //console.log("handleFullscreenChange(): not fullscreen");
    fullscreenButtonElement.dataset.state = "not-fullscreen";
    //mixpanel.track("Fullscreen off'");
  }
}

// Detect full screen change and act accordingly
document.addEventListener("fullscreenchange", function (evt) {
  //console.log("fullscreenchange event " + evt.target);
  handleFullscreenChange();
}, false);
document.addEventListener("MSFullscreenChange", function (evt) {
  //console.log("fullscreenchange event " + evt.target);
  handleFullscreenChange();
}, false);
document.addEventListener("mozfullscreenchange", function (evt) {
  //console.log("fullscreenchange event " + evt.target);
  handleFullscreenChange();
}, false);
document.addEventListener("webkitfullscreenchange", function (evt) {
  //console.log("fullscreenchange event " + evt.target);
  handleFullscreenChange();
}, false);

// Help panel functions
function toggleHelpPanel() {
  var body = document.body;
  var overlay = document.getElementById("help-overlay");
  if (body.classList.contains("help")) {
    hideHelpPanel();
  } else {
    if (isDev) {
      console.log("Help panel toggled");
    }
    body.classList.add("help");
    overlay.style.display = "block";
  }
}

function hideHelpPanel() {
  var body = document.body;
  var overlay = document.getElementById("help-overlay");
  body.classList.remove("help");
  overlay.style.display = "none";
}

// Key bindings for help
key('h', function () {
  toggleHelpPanel();
});
key('esc', function () {
  hideHelpPanel();
});

// vh / vw Polyfill coz there are many browsers out there who are missing out
// on that incredible unit system
// ----

if (!Array.prototype.filter) {
  /* eslint-disable no-extend-native */
  Array.prototype.filter = function (fun /*, thisp*/) {
    var len = this.length;
    if (typeof fun != "function") { throw new TypeError(); }

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in this) {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this)) { res.push(val); }
      }
    }

    return res;
  };
}
