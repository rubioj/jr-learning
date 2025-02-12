import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    style: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["no-icon", "leading"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    small: true,
    alternate: true,
    iconPosition: "no-icon",
    className: {},
    text: "Button",
    divClassName: {},
  },
};
