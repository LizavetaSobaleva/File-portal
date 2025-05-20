import type { Meta, StoryObj } from "@storybook/react";
import { SplitScreenLayout } from "./SplitScreenLayout";

const meta: Meta<typeof SplitScreenLayout> = {
  title: "shared/ui/SplitScreenLayout",
  component: SplitScreenLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A layout component that splits the screen between a media block and a customizable main content block.",
      },
    },
  },
  argTypes: {
    mediaPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    mediaBgColor: {
      control: "color",
    },
    mediaImage: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitScreenLayout>;

const MockForm = () => (
  <div style={{ textAlign: "center" }}>
    <h2>Login Form</h2>
    <input
      placeholder="Email"
      style={{ display: "block", margin: "8px auto" }}
    />
    <input
      placeholder="Password"
      type="password"
      style={{ display: "block", margin: "8px auto" }}
    />
    <button style={{ marginTop: "12px" }}>Log In</button>
  </div>
);

const mockFormElement = <MockForm />;

export const Default: Story = {
  args: {
    mediaText: "FILE",
    mediaImage: "https://placehold.co/800x1000",
    mediaPosition: "left",
    mainContent: mockFormElement,
  },
};

export const NoImage: Story = {
  args: {
    mediaText: "test",
    mediaBgColor: "#2c8265",
    mediaPosition: "right",
    mainContent: mockFormElement,
  },
};
