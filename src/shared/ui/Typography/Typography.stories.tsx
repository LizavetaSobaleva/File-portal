import type { Meta, StoryObj } from "@storybook/react";
import { Title, Paragraph, Text } from "./Typography";

const meta: Meta = {
  title: "shared/ui/Typography",
  tags: ["autodocs"],
};

export default meta;

export const Heading: StoryObj = {
  render: () => <Title level={2}>Section Title</Title>,
};

export const ParagraphText: StoryObj = {
  render: () => (
    <Paragraph>
      This is a block of text that explains something in detail.
    </Paragraph>
  ),
};

export const InlineText: StoryObj = {
  render: () => <Text type="secondary">Muted inline label</Text>,
};
