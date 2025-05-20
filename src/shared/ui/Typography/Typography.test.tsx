import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title, Paragraph, Text } from "./Typography";

describe("shared/ui/Typography", () => {
  it("renders Title with text", () => {
    render(<Title level={2}>Heading</Title>);
    expect(
      screen.getByRole("heading", { name: /heading/i })
    ).toBeInTheDocument();
  });

  it("renders Paragraph with content", () => {
    render(<Paragraph>This is a paragraph.</Paragraph>);
    expect(screen.getByText(/this is a paragraph/i)).toBeInTheDocument();
  });

  it("renders Text with content", () => {
    render(<Text>Some inline text</Text>);
    expect(screen.getByText(/some inline text/i)).toBeInTheDocument();
  });
});
