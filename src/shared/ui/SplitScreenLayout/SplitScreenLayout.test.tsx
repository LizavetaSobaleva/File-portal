import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitScreenLayout } from "./SplitScreenLayout";

const TestContent = <div data-testid="main">Main content</div>;

describe("shared/ui/SplitScreenLayout", () => {
  it("renders with media on the left by default", () => {
    render(
      <SplitScreenLayout
        mediaText="Hello"
        mediaImage="https://example.com/image.jpg"
        mainContent={TestContent}
      />
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  it("renders without mediaImage when not provided", () => {
    render(
      <SplitScreenLayout
        mediaText="No Image"
        mainContent={TestContent}
        mediaBgColor="#000"
      />
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("No Image")).toBeInTheDocument();
  });

  it("renders with media on the right", () => {
    render(
      <SplitScreenLayout
        mediaText="Right"
        mediaPosition="right"
        mainContent={TestContent}
      />
    );

    expect(screen.getByText("Right")).toBeInTheDocument();
  });
});
