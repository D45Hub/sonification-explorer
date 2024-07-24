import React from "react";
import { Page } from "@geist-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabMBSSimulator from "./components/TabMBSSimulator";
import TabEarconSimulator from "./components/TabEarconSimulator";
import ExpansiveMSBSimulator from "./components/ExpansiveMBSSimulator";
import ExpansiveEarconSimulator from "./components/ExpansiveEarconSimulator";

import "react-tabs/style/react-tabs.css";
import "./App.css";

const App = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var defaultTab = 0;

  if (urlParams.has("variant")) {
    const param = urlParams.get("variant");

    // Tab Earcon covered by default tab selection.
    if (param === "tab_mbs") {
      defaultTab = 1;
    } else if (param === "expansive_earcon") {
      defaultTab = 2;
    } else if (param === "expansive_mbs") {
      defaultTab = 3;
    }
  }

  return (
    <Page>
      <h1>Sonification Explorer</h1>
      <Tabs defaultIndex={defaultTab}>
        <TabList>
          <Tab>Tab Earcon - Sonification</Tab>
          <Tab>Tab MBS - Sonification</Tab>
          <Tab>Expansive Elements Earcon - Sonification</Tab>
          <Tab>Expansive Elements MBS - Sonification</Tab>
        </TabList>
        <TabPanel>
          <TabEarconSimulator />
        </TabPanel>
        <TabPanel>
          <TabMBSSimulator />
        </TabPanel>
        <TabPanel>
          <ExpansiveEarconSimulator />
        </TabPanel>
        <TabPanel>
          <ExpansiveMSBSimulator />
        </TabPanel>
      </Tabs>
    </Page>
  );
};

export default App;
