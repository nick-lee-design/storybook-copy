import { fn } from "@storybook/test";

import { Tab } from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    state: {
      options: ["selected", "hover", "unselected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tabLabel: "Chat",
    mode: "dark",
    state: "selected",
    className: {},
  },
};
