// src/shared/lib/buildMenuTree.ts

type Job = {
  tenant: string;
  controls: string[];
  type: string;
};

type MenuNode = {
  key: string;
  label: string;
  path: string;
  children?: MenuNode[];
};

export function buildMenuTree(jobs: Job[]): MenuNode[] {
  const tenants = new Map<string, Map<string, Set<string>>>();

  for (const { tenant, controls, type } of jobs) {
    if (!tenants.has(tenant)) tenants.set(tenant, new Map());
    const controlMap = tenants.get(tenant)!;

    for (const control of controls) {
      if (!controlMap.has(control)) controlMap.set(control, new Set());
      controlMap.get(control)!.add(type);
    }
  }

  return Array.from(tenants.entries()).map(([tenant, controlMap]) => ({
    key: tenant,
    label: tenant,
    path: `/${encodeURIComponent(tenant)}`,
    children: Array.from(controlMap.entries()).map(([control, types]) => ({
      key: control,
      label: control,
      path: `/${encodeURIComponent(tenant)}/${encodeURIComponent(control)}`,
      children: Array.from(types).map((type) => ({
        key: type,
        label: type,
        path: `/${encodeURIComponent(tenant)}/${encodeURIComponent(control)}/${encodeURIComponent(type)}`,
      })),
    })),
  }));
}
