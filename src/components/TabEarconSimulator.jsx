import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playTabEarconSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer } from "@geist-ui/core";
import InteractiveContainer from "./InteractiveContainer";
import { Tab } from "react-tabs-scrollable";
import {
  Emoji,
  Book,
  Coffee,
  Info,
  MessageCircle,
  DollarSign,
  Clipboard,
  Briefcase,
  Search,
  Calendar,
} from "@geist-ui/icons";
import ScrollableTab from "./ScrollableTab";

const TabEarconSimulator = () => {
  const maxTabsDefault = 20;
  const [maxTabs, setMaxTabs] = useState(maxTabsDefault);
  const [selectedTab, setSelectedTab] = useState(0);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onActiveTabChange = (index) => {
    setActiveTabIndex(index);
  };

  const handleMaxTabsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxTabs(value);
    if (selectedTab > value) {
      setSelectedTab(value);
    }
  };

  const maxTabElements = (
    <label>
      Max Tab Amount:{" "}
      <input
        type="number"
        name="max"
        min={8}
        max={maxTabsDefault}
        value={maxTabs}
        onChange={handleMaxTabsChange}
      />
    </label>
  );

  const tabSlider = (
    <Slider
      value={Math.min(selectedTab, maxTabs)}
      min={0}
      max={maxTabs}
      step={1}
      onChange={(value) => setSelectedTab(value)}
      showMarkers
    />
  );

  const playbackButton = (
    <Button
      type="success"
      icon={<Play />}
      onClick={() => playTabEarconSonification(false, selectedTab, maxTabs)}
    >
      <Spacer x={1} />
      Play Tab Earcon Sonification
    </Button>
  );

  return (
    <div>
      <Text>Selected Tab: {selectedTab}</Text>
      {tabSlider}
      <Spacer y={1} />
      <Text>Max Tabs: {maxTabs}</Text>
      {maxTabElements}
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
          sonificationType="earcon"
        >
          <Tab actionType="text">
            <Search viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Overview
          </Tab>
          <Tab actionType="text">
            <Book viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Study Programme
          </Tab>
          <Tab actionType="text">
            <Briefcase viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Careers
          </Tab>
          <Tab actionType="text">
            <Clipboard viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Application and Admissions
          </Tab>
          <Tab actionType="text">
            <DollarSign viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Tuition Fee
          </Tab>
          <Tab actionType="text">
            <Emoji viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Meet the people
          </Tab>
          <Tab actionType="text">
            <Calendar viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Open Day and events
          </Tab>
          <Tab actionType="text">
            <Coffee viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Student Life
          </Tab>
          <Tab actionType="text">
            <MessageCircle viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            Contact
          </Tab>
          <Tab actionType="text">
            <Info viewBox="0 -8 24 32" size={18} />
            <Spacer inline w={0.35} />
            About the UVV
          </Tab>
        </ScrollableTab>
      </InteractiveContainer>
    </div>
  );
};

export default TabEarconSimulator;
