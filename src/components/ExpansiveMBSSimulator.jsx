import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playDetailModelSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer } from "@geist-ui/core";

const ExpansiveMSBSimulator = () => {
  const [textDensity, setTextDensity] = useState(1);
  const [linkDensity, setLinkDensity] = useState(0);

  const textDensitySlider = (
    <Slider
      value={textDensity}
      min={1}
      max={4}
      step={1}
      onChange={(value) => setTextDensity(value)}
      showMarkers
    />
  );

  const linkDensitySlider = (
    <Slider
      value={linkDensity}
      min={0}
      max={4}
      step={1}
      onChange={(value) => setLinkDensity(value)}
      showMarkers
    />
  );

  const playbackButton = (
    <Button
      type="success"
      icon={<Play />}
      onClick={() => playDetailModelSonification(textDensity, linkDensity)}
    >
      <Spacer x={1} />Play Expansive Element MBS Sonification
    </Button>
  );

  return (
    <div>
      <Text>Text Density: {textDensity}</Text>
      {textDensitySlider}
      <Spacer y={1} />
      <Text>Link Density: {linkDensity}</Text>
      {linkDensitySlider}
      <Spacer y={1.5} />
      {playbackButton}
    </div>
  );
};

export default ExpansiveMSBSimulator;
