import * as Tone from "tone";

// List of all Earcon-based Motifs used by the AudioHandler.

const motifs = [
  getMotif1,
  getMotif2,
  getMotif3,
  getMotif4,
  getMotif5,
  getMotif6,
  getMotif7,
  getMotif8,
  getMotif9,
  getMotif10,
  getMotif11,
  getMotif12,
];

// Small Motifs

export function getMotif1(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", "4n", now);
  synth.triggerAttackRelease("E3", "4n", now + 0.24);
}

export function getMotif2(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("G#3", "4n", now + 0.16);
}

export function getMotif3(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("A3", "4n", now + 0.16);
}

export function getMotif4(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("C#4", "4n", now + 0.16);
}

// Medium Motifs

export function getMotif5(synth) {
  const now = Tone.now();

  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("E3", 0.2, now + 0.16);
  synth.triggerAttackRelease("G#3", "4n", now + 0.32);
}

export function getMotif6(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("E3", 0.2, now + 0.16);
  synth.triggerAttackRelease("A3", "4n", now + 0.32);
}

export function getMotif7(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("E3", 0.2, now + 0.16);
  synth.triggerAttackRelease("C#4", "4n", now + 0.32);
}

export function getMotif8(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.2, now);
  synth.triggerAttackRelease("A3", 0.2, now + 0.16);
  synth.triggerAttackRelease("C#4", "4n", now + 0.32);
}

// Large Motifs

export function getMotif9(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("C#3", 0.15, now);
  synth.triggerAttackRelease("C#4", 0.15, now + 0.12);
  synth.triggerAttackRelease("G#3", 0.15, now + 0.24);
  synth.triggerAttackRelease("G#4", "4n", now + 0.36);
}

export function getMotif10(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("E3", 0.15, now);
  synth.triggerAttackRelease("E4", 0.15, now + 0.12);
  synth.triggerAttackRelease("G#3", 0.15, now + 0.24);
  synth.triggerAttackRelease("C#4", "4n", now + 0.36);
}

export function getMotif11(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("E3", 0.15, now);
  synth.triggerAttackRelease("E4", 0.15, now + 0.12);
  synth.triggerAttackRelease("A3", 0.15, now + 0.24);
  synth.triggerAttackRelease("C#4", "4n", now + 0.36);
}

export function getMotif12(synth) {
  const now = Tone.now();
  synth.triggerAttackRelease("A3", "4n", now);
  synth.triggerAttackRelease("A4", "4n", now + 0.16);
  synth.triggerAttackRelease("C#4", "4n", now + 0.32);
  synth.triggerAttackRelease("E4", "4n", now + 0.48);
}

export function getMotifByVersion(versionNumber, synth) {
  return motifs[versionNumber](synth);
}
