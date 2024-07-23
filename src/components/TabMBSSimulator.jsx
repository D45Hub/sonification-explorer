import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playTabModelSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer } from "@geist-ui/core";

const TabMBSSimulator = () => {
  const [pannerVal, setPannerVal] = useState(0);
  const [frequencyVal, setFrequencyVal] = useState(4);

  const pannerSlider = (
    <Slider
      value={pannerVal}
      min={-1}
      max={1}
      step={0.1}
      onChange={(value) => setPannerVal(value)}
      showMarkers
    />
  );

  const frequencySlider = (
    <Slider
      value={frequencyVal}
      min={4}
      max={16}
      step={1}
      onChange={(value) => setFrequencyVal(value)}
      showMarkers
    />
  );

  const playbackButton = (
    <Button
      type="success"
      icon={<Play />}
      onClick={() => playTabModelSonification(pannerVal, frequencyVal, false)}
    >
      <Spacer x={1} />Play Tab MBS Sonification
    </Button>
  );

  return (
    <div>
      <Text>Panner Value: {pannerVal}</Text>
      {pannerSlider}
      <Spacer y={1} />
      <Text>Frequency Value: {frequencyVal}</Text>
      {frequencySlider}
      <Spacer y={1.5} />
      {playbackButton}
    </div>
  );
};

export default TabMBSSimulator;
