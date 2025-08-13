import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitScreenLayout } from "./SplitScreenLayout";

const TestContent = <div>Main content</div>;

describe("shared/ui/SplitScreenLayout", () => {
  it("renders with media on the left by default", () => {
    const { container } = render(
      <SplitScreenLayout
        mediaText="Hello"
        mediaImage="https://example.com/image.jpg"
        mainContent={TestContent}
      />
    );

    const media = screen.getByTestId("media");
    expect(media.style.backgroundImage).toContain(
      "https://example.com/image.jpg"
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.firstElementChild).toBe(media);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  it("renders without backgroundImage when not provided", () => {
    const mediaBgColor = "#000";
    const { container } = render(
      <SplitScreenLayout
        mediaText="No Image"
        mainContent={TestContent}
        mediaBgColor={mediaBgColor}
      />
    );

    const media = screen.getByTestId("media");
    expect(media.style.backgroundImage).toBe("");
    expect(media.style.backgroundColor).toBe("rgb(0, 0, 0)");

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.firstElementChild).toBe(media);
  });

  it("renders with media on the right", () => {
    const { container } = render(
      <SplitScreenLayout
        mediaText="Right"
        mediaPosition="right"
        mainContent={TestContent}
      />
    );

    const media = screen.getByTestId("media");
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.lastElementChild).toBe(media);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
