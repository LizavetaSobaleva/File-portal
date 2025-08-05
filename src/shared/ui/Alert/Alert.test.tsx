import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders success message", () => {
    render(<Alert message="Success!" type="success" />);

    expect(screen.getByText("Success!")).toBeInTheDocument();
  });

  it("renders error alert with icon", () => {
    render(<Alert message="Error occurred" type="error" showIcon />);

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("renders closable alert and handles close", () => {
    const onClose = vi.fn();

    const { container } = render(
      <Alert message="Closable Alert" closable onClose={onClose} type="info" />
    );

    const closeButton = container.querySelector(
      ".ant-alert-close-icon"
    ) as HTMLElement;
    expect(closeButton).toBeTruthy();

    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
