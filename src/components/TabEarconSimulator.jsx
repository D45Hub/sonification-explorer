import { useState } from "react";
import { Play } from "@geist-ui/icons";
import { playTabEarconSonification } from "../audio/AudioHandler";
import { Text, Slider, Button, Spacer } from "@geist-ui/core";

const TabEarconSimulator = () => {
  const maxTabsDefault = 20;
  const [maxTabs, setMaxTabs] = useState(maxTabsDefault);
  const [selectedTab, setSelectedTab] = useState(0);

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
        max={20}
        value={maxTabs}
        onChange={handleMaxTabsChange}
      />
    </label>
  );

  const tabSlider = (
    <Slider
      value={selectedTab}
      min={0}
      max={Math.max(maxTabsDefault, maxTabs)}
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
      <Spacer x={1} />Play Tab Earcon Sonification
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
    </div>
  );
};

export default TabEarconSimulator;
