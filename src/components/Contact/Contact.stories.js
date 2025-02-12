import { Contact } from ".";

export default {
  title: "Components/Contact",
  component: Contact,

  argTypes: {
    breakpoint: {
      options: ["desktop"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    breakpoint: "desktop",
    className: {},
    buttonDivClassName: {},
    buttonStylePrimarySmallClassName: {},
    inputType: "text",
    inputType1: "text",
    inputType2: "email",
    inputType3: "tel",
  },
};
