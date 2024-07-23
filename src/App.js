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
  return (
    <Page>
      <h1>Sonification Explorer</h1>
      <Tabs>
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
