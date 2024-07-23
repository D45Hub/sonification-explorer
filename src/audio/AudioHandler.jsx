import * as Tone from "tone";
import drumSample from "./samples/snare_drum.wav";
import C2Flute from "./samples/flute_samples/C2.wav";
import C3Flute from "./samples/flute_samples/C3.wav";
import C4Flute from "./samples/flute_samples/C4.wav";
import A2Flute from "./samples/flute_samples/A2.wav";
import ASharp3Flute from "./samples/flute_samples/A#3.wav";
import ASharp4Flute from "./samples/flute_samples/A#4.wav";
import D2Flute from "./samples/flute_samples/D2.wav";
import D3Flute from "./samples/flute_samples/D3.wav";
import D4Flute from "./samples/flute_samples/D4.wav";
import FSharp2Flute from "./samples/flute_samples/F#2.wav";
import FSharp3Flute from "./samples/flute_samples/F#3.wav";
import FSharp4Flute from "./samples/flute_samples/F#4.wav";
import C3Piano from "./samples/piano_samples/piano_C3.wav";
import D3Piano from "./samples/piano_samples/piano_D3.wav";
import E3Piano from "./samples/piano_samples/piano_E3.wav";
import F3Piano from "./samples/piano_samples/piano_F3.wav";
import G3Piano from "./samples/piano_samples/piano_G3.wav";
import A3Piano from "./samples/piano_samples/piano_A3.wav";
import B3Piano from "./samples/piano_samples/piano_B3.wav";

import { getMotifByVersion } from "./MotifHandler";
import { generateChord } from "./ChordHelper";

const drumSynth = new Tone.Sampler({
  C3: drumSample,
});

const pianoSynth = new Tone.Sampler({
  C2: C3Piano,
  D2: D3Piano,
  E2: E3Piano,
  F2: F3Piano,
  G2: G3Piano,
  A2: A3Piano,
  B2: B3Piano,
}).toDestination();

const fluteSynth = new Tone.Sampler({
  C2: C2Flute,
  C3: C3Flute,
  C4: C4Flute,
  A2: A2Flute,
  "A#3": ASharp3Flute,
  "A#4": ASharp4Flute,
  D2: D2Flute,
  D3: D3Flute,
  D4: D4Flute,
  "F#2": FSharp2Flute,
  "F#3": FSharp3Flute,
  "F#4": FSharp4Flute,
}).toDestination();

// First three are small, then medium, then large and the link chooses the corresponding motif within the category...
const calculateDetailMotifVersion = function (textDensity, linkDensity) {
  return 3 * textDensity + linkDensity;
};

// D-Major Chord Progression
// Tried out all major pop song chord progressions
// C-Major, D-Major, G-Major and A-Major. This sounded best...
const tabChordProgression = [
  generateChord(62, "major"),
  generateChord(64, "minor"),
  generateChord(66, "minor"),
  generateChord(67, "major"),
  generateChord(69, "major"),
  generateChord(71, "minor"),
  generateChord(73, "diminished"),
  generateChord(74, "major"),
];

var offCooldown = true;

const playChordEndSound = function () {
  if (offCooldown) {
    const synth = drumSynth.toDestination();

    var loop = new Tone.Loop((time) => {
      synth.triggerAttackRelease("C3", "4n", time);
    }, "4n").start();
    loop.iterations = 1;

    var loop2 = new Tone.Loop((time) => {
      synth.triggerAttackRelease("D3", "12n", time + 0.3);
    }, "12n").start();
    loop2.iterations = 2;
    Tone.Transport.start();
    offCooldown = false;
    setTimeout(() => {
      offCooldown = true;
      Tone.Transport.stop();
    }, 500);
  }
};

const calculatePlayedTabChord = function (endReached, tabIndex, tabAmount) {
  const progress = tabIndex / (tabAmount - 1);
  const chordListLength = tabChordProgression.length;

  if (!endReached) {
    return Math.floor(progress * (chordListLength - 1));
  }
  return Math.floor((1 - progress) * (chordListLength - 1)) + 1;
};

// Maybe also dat...
// Done maybe add spatiality and/or end tab jingle
export function playTabEarconSonification(endReached, tabIndex, tabAmount) {
  if (offCooldown) {
    const now = Tone.now();
    const tabChordIndex = calculatePlayedTabChord(
      endReached,
      tabIndex,
      tabAmount
    );
    pianoSynth.triggerAttackRelease(
      tabChordProgression[tabChordIndex],
      "4n",
      now
    );
    Tone.Transport.start();
    offCooldown = false;
    setTimeout(() => {
      offCooldown = true;
    }, 500);
  }
}

export function playTabModelSonification(pannerVal, frequencyVal, endReached) {
console.log(pannerVal);
console.log(frequencyVal);
  if (endReached) {
    playChordEndSound();
    return;
  }

  if (offCooldown) {
    const frequencyString = frequencyVal + "n";
    const panner = new Tone.Panner3D({
      panningModel: "HRTF",
      positionX: pannerVal * 5,
      positionY: 0,
      positionZ: 0,
    }).toDestination();

    const synth = drumSynth.connect(panner);

    // Set the listener's position
    Tone.Listener.positionX.value = 0;
    Tone.Listener.positionY.value = 0;
    Tone.Listener.positionZ.value = 0;

    // Set the listener's orientation
    Tone.Listener.forwardX.value = 0;
    Tone.Listener.forwardY.value = 0;
    Tone.Listener.forwardZ.value = 5;
    Tone.Listener.upX.value = 0;
    Tone.Listener.upY.value = 5;
    Tone.Listener.upZ.value = 5;

    var loop = new Tone.Loop((time) => {
      synth.triggerAttackRelease("C3", frequencyString, time);
    }, frequencyString);

    loop.iterations = 2;
    if (frequencyVal >= 10) {
      loop.iterations = 3;
    }

    loop.start();

    Tone.Transport.start();
    offCooldown = false;
    setTimeout(() => {
      offCooldown = true;
      synth.disconnect();
      loop.stop();
    }, 900);
  }
}

// Done maybe add spatiality...
export function playDetailEarconSonification(textDensity, linkDensity) {
  if (offCooldown) {
    const synth = fluteSynth.toDestination();
    getMotifByVersion(
      calculateDetailMotifVersion(textDensity, linkDensity),
      synth
    );
    Tone.Transport.start();
    offCooldown = false;
    setTimeout(() => {
      offCooldown = true;
      Tone.Transport.stop();
    }, 800);
  }
}

export function playDetailModelSonification(textDensity, linkDensity) {
  if (offCooldown) {
    const synth = drumSynth.toDestination();

    // To circumvent a bug with reverb creation. Doesn't affect the lack of reverb though... See below.
    const reverbAmount = linkDensity === 0 ? 1 : linkDensity;
    const reverb = new Tone.Reverb(reverbAmount).toDestination();

    reverb.wet.value = 0;
    reverb.wet.rampTo(1, 0.25);

    const textDensityFrequencyString = 2 * textDensity + "n";

    const now = Tone.now();

    synth.triggerAttackRelease("C3", textDensityFrequencyString, now);

    const reverbSynth = linkDensity > 0 ? drumSynth.connect(reverb) : drumSynth;
    reverbSynth.triggerAttackRelease(
      "C3",
      textDensityFrequencyString,
      now + 0.2
    );

    offCooldown = false;
    setTimeout(() => {
      offCooldown = true;
      reverb.wet.value = 0;
      synth.disconnect();
      reverbSynth.disconnect();
      Tone.Transport.stop();
    }, 900);
  }
}
