import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playDetailEarconSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer, Collapse } from "@geist-ui/core";
import InteractiveContainer from "./InteractiveContainer";
import DetailElement from "./DetailElement";

const ExpansiveEarconSimulator = () => {
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
      onClick={() => playDetailEarconSonification(textDensity, linkDensity)}
    >
      <Spacer x={1} />
      Play Expansive Element Earcon Sonification
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
      <Spacer y={5} />
      <Text>
        Sonification example as employed by the study. Modified in a simulated
        container and making it work with mouse-controls on desktop browsers. On
        desktop platforms sonification only triggers on mouse enter. Volume should be set to about 25%.
      </Text>
      <InteractiveContainer>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Spacer y={2} />
        <DetailElement sonificationType="earcon" sonificationEnabled={true}>
          <Collapse title="Under what conditions can I rebook?">
            <Text>
              You can change your flight bookings providing the fare conditions
              of your ticket permit this. You can find out whether your ticket
              can be rebooked and whether there is a fee for this on your
              booking confirmation, or contact your travel agency or the Service
              Centre. Alternatively, you can also rebook your flight details
              under your bookings.
            </Text>
          </Collapse>
        </DetailElement>
      </InteractiveContainer>
    </div>
  );
};

export default ExpansiveEarconSimulator;
