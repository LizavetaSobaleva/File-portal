import type { Meta, StoryObj } from "@storybook/react";
import { Form, Input, Button } from "antd";

const meta: Meta<typeof Form> = {
  title: "shared/ui/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form
      layout="vertical"
      onFinish={(values) => {
        console.log("Submitted:", values);
      }}
    >
      <Form.Item label="Email" name="email">
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ),
};
