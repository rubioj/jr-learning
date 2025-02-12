import { Select } from ".";

export default {
  title: "Components/Select",
  component: Select,

  argTypes: {
    type: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "default",
    alternate: true,
    className: {},
    divClassName: {},
  },
};
