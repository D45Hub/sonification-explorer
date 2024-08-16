import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playDetailModelSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer, Collapse } from "@geist-ui/core";
import InteractiveContainer from "./InteractiveContainer";
import DetailElement from "./DetailElement";

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
      <Spacer x={1} />
      Play Expansive Element MBS Sonification
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
        <DetailElement sonificationType="model" sonificationEnabled={true}>
          <Collapse title="Get around">
            <Text>
              Traveling around Iceland is relatively easy, though the weather
              can impact road conditions. The Ring Road (Route 1) encircles the
              island and connects most of the major towns and attractions.
              Rental cars are popular for their flexibility, but be sure to rent
              a 4x4 if you plan to explore the Highlands. Public transportation
              outside of Reykjavik is limited, though there are bus services
              connecting larger towns. Guided tours are a good option for
              visiting remote areas or for those who prefer not to drive.
              Domestic flights are available for quicker travel between regions.
            </Text>
            <Text>
              See more information of travel on the website of the{" "}
              <a href="./">Icelandic tourist board</a>.
            </Text>
          </Collapse>
        </DetailElement>
      </InteractiveContainer>
    </div>
  );
};

export default ExpansiveMSBSimulator;
