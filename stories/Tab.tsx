import React from "react";

import PropTypes from "prop-types";

import "./tab.css";
import "../global/global.css";
import "../global/styleguide.css";
import "../global/index.css";

import { ChatIcon7 } from "./image/ChatIcon7";

interface Props {
  tabLabel: string;
  mode: "dark" | "light";
  state: "selected" | "hover" | "unselected";
  className: any;
  icon: JSX.Element;
}

export const Tab = ({
  tabLabel = "Chat",
  mode,
  state,
  className,
  icon = <ChatIcon7 className="chat-icon" color="#656565" />,
}: Props): JSX.Element => {
  return (
    <div className={`tab ${state} ${mode} ${className}`}>
      {icon}
      <div className="chat">{tabLabel}</div>
    </div>
  );
};

Tab.propTypes = {
  tabLabel: PropTypes.string,
  mode: PropTypes.oneOf(["dark", "light"]),
  state: PropTypes.oneOf(["selected", "hover", "unselected"]),
};
