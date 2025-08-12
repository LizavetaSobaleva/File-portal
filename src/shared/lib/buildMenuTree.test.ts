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
        key: "/analytics", // полный путь для уникальности
        label: "analytics",
        path: "analytics", // относительный путь
        children: [
          {
            key: "/analytics/traffic",
            label: "traffic",
            path: "traffic",
            children: [
              {
                key: "/analytics/traffic/overview",
                label: "overview",
                path: "overview",
              },
            ],
          },
          {
            key: "/analytics/sales",
            label: "sales",
            path: "sales",
            children: [
              {
                key: "/analytics/sales/reports",
                label: "reports",
                path: "reports",
              },
            ],
          },
        ],
      },
      {
        key: "/management",
        label: "management",
        path: "management",
        children: [
          {
            key: "/management/users",
            label: "users",
            path: "users",
            children: [
              {
                key: "/management/users/list",
                label: "list",
                path: "list",
              },
            ],
          },
          {
            key: "/management/roles",
            label: "roles",
            path: "roles",
            children: [
              {
                key: "/management/roles/permissions",
                label: "permissions",
                path: "permissions",
              },
            ],
          },
        ],
      },
    ]);
  });
});
