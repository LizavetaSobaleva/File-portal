import { useState } from "react";
import { Alert } from "./Alert";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Alert> = {
  title: "shared/ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    message: "Default Alert",
    type: "info",
    showIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    type: "success",
    message: "Operation successful!",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Something went wrong.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Be careful with this action.",
  },
};

export const Closable: Story = {
  args: {
    message: "You can close this alert.",
    closable: true,
  },
  render: (args) => {
    const [visible, setVisible] = useState(true);

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {visible ? (
          <Alert {...args} onClose={() => setVisible(false)} />
        ) : (
          <Button type="link" onClick={() => setVisible(true)}>
            Show alert again
          </Button>
        )}
      </div>
    );
  },
};
