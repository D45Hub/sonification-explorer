import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playTabModelSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer } from "@geist-ui/core";
import InteractiveContainer from "./InteractiveContainer";
import { Tab } from "react-tabs-scrollable";
import {
  Emoji,
  Home,
  HelpCircle,
  Map,
  MapPin,
  Star,
  Flag,
  Key,
  User,
  ArrowUpRight,
} from "@geist-ui/icons";
import ScrollableTab from "./ScrollableTab";

const TabMBSSimulator = () => {
  const [pannerVal, setPannerVal] = useState(0);
  const [frequencyVal, setFrequencyVal] = useState(4);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onActiveTabChange = (index) => {
    setActiveTabIndex(index);
  };

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
      <Spacer x={1} />
      Play Tab MBS Sonification
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
      <Spacer y={5} />
      <Text>
        Sonification example as employed by the study. Modified in a simulated
        container and making it work with mouse-controls on desktop browsers.
        Sonification only triggers on mouse hovering.
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
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Text>
        <Spacer y={2} />
        <ScrollableTab
          onActiveTabChange={onActiveTabChange}
          sonificationType="model"
        >
          <Tab actionType="text">
            <Flag viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Features
          </Tab>
          <Tab actionType="text">
            <Home viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Facilities
          </Tab>
          <Tab actionType="text">
            <MapPin viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Location
          </Tab>
          <Tab actionType="text">
            <ArrowUpRight viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Flights
          </Tab>
          <Tab actionType="text">
            <Key viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Rooms
          </Tab>
          <Tab actionType="text">
            <Emoji viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Catering
          </Tab>
          <Tab actionType="text">
            <User viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Tour Operators
          </Tab>
          <Tab actionType="text">
            <Map viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Map
          </Tab>
          <Tab actionType="text">
            <Star viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Ratings
          </Tab>
          <Tab actionType="text">
            <HelpCircle viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Useful Information
          </Tab>
        </ScrollableTab>
      </InteractiveContainer>
    </div>
  );
};

export default TabMBSSimulator;
