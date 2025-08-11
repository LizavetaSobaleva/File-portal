import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from "./Menu";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

describe("shared/ui/Menu", () => {
  const onClick = vi.fn();

  const items: MenuItem[] = [
    {
      key: "1",
      label: "Menu item 1",
      children: [
        { key: "sub1", label: "Submenu item 1", onClick },
        { key: "sub2", label: "Submenu item 2", onClick },
      ],
    },
    {
      key: "1",
      label: "Menu item 2",
    },
  ];

  it("renders menu items", () => {
    render(<Menu items={items} />);

    expect(screen.getByText("Menu item 1")).toBeInTheDocument();
    expect(screen.getByText("Menu item 2")).toBeInTheDocument();
  });

  it("renders submenu and expands it on click", async () => {
    render(<Menu items={items} />);

    expect(screen.queryByText("Submenu item 1")).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Menu item 1"));

    expect(await screen.findByText("Submenu item 1")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Submenu item 1"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
