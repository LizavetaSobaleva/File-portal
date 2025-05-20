import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Form, Input } from "antd";

describe("shared/ui/Form", () => {
  it("renders form with input and label", () => {
    render(
      <Form>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
      </Form>
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });
});
