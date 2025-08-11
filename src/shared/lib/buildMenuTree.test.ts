import { describe, it, expect } from "vitest";
import { buildMenuTree } from "./buildMenuTree";

describe("buildMenuTree", () => {
  it("transforms jobs into a correct hierarchy", () => {
    const jobs = [
      { tenant: "analytics", controls: ["traffic"], type: "overview" },
      { tenant: "analytics", controls: ["sales"], type: "reports" },
      { tenant: "management", controls: ["users"], type: "list" },
      { tenant: "management", controls: ["roles"], type: "permissions" },
    ];

    const tree = buildMenuTree(jobs);

    expect(tree).toEqual([
      {
        key: "analytics",
        label: "analytics",
        path: "/analytics",
        children: [
          {
            key: "traffic",
            label: "traffic",
            path: "/analytics/traffic",
            children: [
              {
                key: "overview",
                label: "overview",
                path: "/analytics/traffic/overview",
              },
            ],
          },
          {
            key: "sales",
            label: "sales",
            path: "/analytics/sales",
            children: [
              {
                key: "reports",
                label: "reports",
                path: "/analytics/sales/reports",
              },
            ],
          },
        ],
      },
      {
        key: "management",
        label: "management",
        path: "/management",
        children: [
          {
            key: "users",
            label: "users",
            path: "/management/users",
            children: [
              {
                key: "list",
                label: "list",
                path: "/management/users/list",
              },
            ],
          },
          {
            key: "roles",
            label: "roles",
            path: "/management/roles",
            children: [
              {
                key: "permissions",
                label: "permissions",
                path: "/management/roles/permissions",
              },
            ],
          },
        ],
      },
    ]);
  });
});
