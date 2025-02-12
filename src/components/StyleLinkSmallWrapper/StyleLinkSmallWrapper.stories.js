import { StyleLinkSmallWrapper } from ".";

export default {
  title: "Components/StyleLinkSmallWrapper",
  component: StyleLinkSmallWrapper,

  argTypes: {
    style: {
      options: ["link"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["trailing"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "link",
    small: true,
    alternate: true,
    iconPosition: "trailing",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
