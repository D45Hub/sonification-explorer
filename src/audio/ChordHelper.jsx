import * as Tone from "tone";

export function buildChord(notes, octave) {
  return notes.map((note) => {
    return note + octave;
  });
}

export function buildNote(note, octave) {
  return note + octave;
}

export function generateChord(rootNote, chordType) {
  // Define intervals for different chord types
  const chordIntervals = {
    major: [0, 4, 7],
    minor: [0, 3, 7],
    "7th": [0, 4, 7, 10],
    diminished: [0, 3, 6],
    augmented: [0, 4, 8],
    sus2: [0, 2, 7],
    sus4: [0, 5, 7],
  };

  const intervals = chordIntervals[chordType];

  return Tone.Frequency(rootNote).harmonize(intervals);
}
