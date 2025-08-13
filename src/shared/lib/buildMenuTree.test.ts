import { describe, it, expect } from "vitest";
import { buildMenuTree } from "./buildMenuTree";

describe("buildMenuTree", () => {
  it("transforms jobs into a correct hierarchy with relative paths", () => {
    const jobs = [
      { tenant: "analytics", controls: ["traffic"], type: "overview" },
      { tenant: "analytics", controls: ["sales"], type: "reports" },
      { tenant: "management", controls: ["users"], type: "list" },
      { tenant: "management", controls: ["roles"], type: "permissions" },
    ];

    const tree = buildMenuTree(jobs);

    expect(tree).toEqual([
      {
        key: "/analytics",
        label: "analytics",
        relativePath: "analytics",
        absolutePath: "/analytics",
        children: [
          {
            key: "/analytics/traffic",
            label: "traffic",
            relativePath: "traffic",
            absolutePath: "/analytics/traffic",
            children: [
              {
                key: "/analytics/traffic/overview",
                label: "overview",
                relativePath: "overview",
                absolutePath: "/analytics/traffic/overview",
              },
            ],
          },
          {
            key: "/analytics/sales",
            label: "sales",
            relativePath: "sales",
            absolutePath: "/analytics/sales",
            children: [
              {
                key: "/analytics/sales/reports",
                label: "reports",
                relativePath: "reports",
                absolutePath: "/analytics/sales/reports",
              },
            ],
          },
        ],
      },
      {
        key: "/management",
        label: "management",
        relativePath: "management",
        absolutePath: "/management",
        children: [
          {
            key: "/management/users",
            label: "users",
            relativePath: "users",
            absolutePath: "/management/users",
            children: [
              {
                key: "/management/users/list",
                label: "list",
                relativePath: "list",
                absolutePath: "/management/users/list",
              },
            ],
          },
          {
            key: "/management/roles",
            label: "roles",
            relativePath: "roles",
            absolutePath: "/management/roles",
            children: [
              {
                key: "/management/roles/permissions",
                label: "permissions",
                relativePath: "permissions",
                absolutePath: "/management/roles/permissions",
              },
            ],
          },
        ],
      },
    ]);
  });
});
