import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/ui/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me",
    type: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Default: Story = {
  args: {
    type: "default",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    children: "Danger",
  },
};
