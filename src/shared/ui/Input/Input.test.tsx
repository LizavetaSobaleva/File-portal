import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("shared/ui/Input", () => {
  it("renders input with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("calls onChange handler", async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Hello");
    expect(onChange).toHaveBeenCalled();
  });

  it("renders with default value", () => {
    render(<Input defaultValue="Initial" />);
    expect(screen.getByDisplayValue("Initial")).toBeInTheDocument();
  });
});
