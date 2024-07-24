import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import {
  playTabEarconSonification,
  playTabModelSonification,
} from "../audio/AudioHandler";
import { Divider } from "@geist-ui/core";

var reachedEndValue = false;
var rightSideEnd = true;
var endElement = 0;
var type = "";

function ScrollableTab({ onActiveTabChange, sonificationType, children }) {
  const [activeTab, setActiveTab] = useState(0);
  const [amountTabs, setAmountTabs] = useState(children.length);
  endElement = amountTabs;
  type = sonificationType;

  const onTabClick = (e, index) => {
    const buttonAttributes = e.target.attributes;
    const actionType = buttonAttributes["actionType"]
      ? buttonAttributes.getNamedItem("actionType").value
      : "";
    const redirectLoc = buttonAttributes["redirectLoc"]
      ? buttonAttributes.getNamedItem("redirectLoc").value
      : "";

    if (actionType === "button") {
      setActiveTab(0);
      onActiveTabChange(0);
      window.location.href = redirectLoc;
      return;
    }
    setActiveTab(index);
    onActiveTabChange(index);
  };

  const onHoverElement = () => {};

  const onHoverTab = (key) => {
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const panVal = clamp(-2.6 * ((key - amountTabs / 2) / amountTabs), -1, 1);

    const standardFrequencyFunction = function (key) {
      return Math.round((1.25 * amountTabs * key) / amountTabs + 4);
    };
    const frequencyVal = rightSideEnd
      ? standardFrequencyFunction(key)
      : Math.round(
          (-1.25 * amountTabs * key) / amountTabs +
            standardFrequencyFunction(amountTabs)
        );
    var endValueVisible = isVisible(document.getElementById(endElement));

    if (endValueVisible) {
      reachedEndValue = true;
    }

    if (type === "model") {
      playTabModelSonification(panVal, frequencyVal, endValueVisible);
    } else if (type === "earcon") {
      playTabEarconSonification(endValueVisible, key, amountTabs);
    }

    if (reachedEndValue && endValueVisible) {
      // Chord End sound play... :)
      if (rightSideEnd) {
        endElement = 1;
        rightSideEnd = false;
      } else {
        endElement = amountTabs;
        rightSideEnd = true;
      }
    } else if (!endValueVisible) {
      //this.playChordSound(panVal, frequencyVal);
      //this.playPitchSound(panVal, 200 + 10*key);
    }
  };

  // didReachEnd is bad... That is why, I have my own function... :)
  // This sets it to "visible", if at least some part is visible... But maybe I want to have a percentage-based thing...
  // If whole viewport is necessary, this makes it also bad, since a scroll all the way is required...
  // Not really necessary, since the user already "knows", that this is the end...
  const isVisible = (el) => {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  //var keys = Array.from({ length: amountTabs }, (_, i) => i + 1);
  // onFocus as an additional thingy?
  var tabId = 0;

  var tabs = children.map((k) => {
    tabId += 1;
    return (
      <Tab
        id={tabId}
        //onTouchMove={() => onHoverTab(tabId)}
        //onMouseOver={() => onHoverTab(tabId)}
        key={tabId}
        actionType={k.props.actionType}
        redirectLoc={k.props.redirectLoc}
      >
        {k.props.children}
      </Tab>
    );
  });

  const tabsStyle = {
    position: "absolute",
    bottom: "0",
    width: "400px",
    zIndex: "998",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div
      style={tabsStyle}
      onClick={() => {}}
      onMouseOver={(event) => {
        const eventElement = event.target;

        if (eventElement.nodeName === "BUTTON") {
          onHoverTab(eventElement.id);
        }
      }}
      id="scrollTabList"
    >
      <Divider />
      <Tabs
        onMouseOver={() => onHoverElement()}
        activeTab={activeTab}
        onTabClick={(e, index) => onTabClick(e, index)}
      >
        {tabs}
      </Tabs>
    </div>
  );
}

export default ScrollableTab;
