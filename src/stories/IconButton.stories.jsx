import { fn } from "@storybook/test";
import { IconButton } from "../components/IconButton/IconButton";

export default {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
