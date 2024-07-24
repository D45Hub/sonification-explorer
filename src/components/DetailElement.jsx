import React from "react";
import { Collapse } from "@geist-ui/core";
import {
  playDetailEarconSonification,
  playDetailModelSonification,
} from "../audio/AudioHandler";

var type = "";

const getParentCollapseElement = function (el) {
  if (el.classList.contains("collapse")) {
    return el;
  }
  const parentElement = el.parentElement;
  const containsCollapseClass = parentElement.classList.contains("collapse");
  return containsCollapseClass
    ? parentElement
    : getParentCollapseElement(parentElement);
};

const getContainerNode = function (parent) {
  const children = parent.childNodes;

  for (var child of children) {
    if (child.classList.contains("container")) {
      return child;
    }
  }

  // Should never reach this...
  return parent;
};

const getChildElementRoot = function (el) {
  return el.childNodes.length === 1
    ? getChildElementRoot(el.childNodes.item(0))
    : el;
};

const calculateDensities = function (el) {
  var textLength = 0;
  var linkAmount = 0;
  var listAmount = 0;

  var textDensity = 0;
  var linkDensity = 0;

  const childElements = getChildElementRoot(el);

  const getElementAmountsOfChildren = function (childMainElement) {
    var amounts = { textLength: 0, linkAmount: 0, listAmount: 0 };
    if (childMainElement instanceof Node && childMainElement.nodeType === 3) {
      amounts.textLength = childMainElement.length;
      return amounts;
    }
    const childElements =
      childMainElement instanceof NodeList
        ? childMainElement
        : childMainElement.childNodes;

    for (var n of childElements) {
      if (n.childNodes.length > 0) {
        const childAmounts = getElementAmountsOfChildren(n.childNodes);
        amounts.textLength += childAmounts.textLength;
        amounts.linkAmount += childAmounts.linkAmount;
        amounts.listAmount += childAmounts.listAmount;
      }

      if (n.nodeName === "P") {
        amounts.textLength += n.innerText.length;
      }

      if (n.nodeType === 3) {
        amounts.textLength += n.nodeValue.length;
      }

      if (n.nodeName === "A" || n.nodeName === "BUTTON") {
        amounts.linkAmount += 1;
      }

      if (n.nodeName === "LI") {
        amounts.listAmount += 1;
      }
    }

    return amounts;
  };

  const elementAmounts = getElementAmountsOfChildren(childElements);
  textLength = elementAmounts.textLength;
  linkAmount = elementAmounts.linkAmount;
  listAmount = elementAmounts.listAmount;

  if (textLength > 600) {
    textDensity = 3;
  } else if (textLength <= 600 && textLength >= 300) {
    textDensity = 2;
  } else if (textLength < 300 && textLength > 0) {
    textDensity = 1;
  }

  if (linkAmount > 3) {
    linkDensity = 3;
  } else if (linkAmount === 2 || linkAmount === 3) {
    linkDensity = 2;
  } else if (linkAmount === 1) {
    linkDensity = 1;
  }

  return { textDensity: textDensity, linkDensity: linkDensity };
};

const touchEvent = function (event) {
  const eventElement = event.target;
  const parentCollapseElement = getParentCollapseElement(eventElement);
  const contentNode = getContainerNode(parentCollapseElement);
  const densities = calculateDensities(contentNode);

  if (type === "model") {
    playDetailModelSonification(densities.textDensity, densities.linkDensity);
  } else if (type === "earcon") {
    playDetailEarconSonification(densities.textDensity, densities.linkDensity);
  }
};

function DetailElement({ sonificationType, sonificationEnabled, children }) {
  type = sonificationType;

  return (
    <div
      onClick={() => {}}
      onTouchStart={(event) => {
        if (sonificationEnabled) {
          touchEvent(event);
        }
      }}
      onTouchMove={(event) => {
        if (sonificationEnabled) {
          touchEvent(event);
        }
      }}
      onMouseEnter={(event) => {
        if (sonificationEnabled) {
          touchEvent(event);
        }
      }}
    >
      <Collapse.Group id="collapseGroup">{children}</Collapse.Group>
    </div>
  );
}

export default DetailElement;
