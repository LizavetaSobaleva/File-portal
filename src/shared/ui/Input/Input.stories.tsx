import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/ui/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your name",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "Pre-filled text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};
