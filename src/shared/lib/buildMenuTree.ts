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
    key: `/${encodeURIComponent(tenant)}`, // ключ можно оставить полным
    label: tenant,
    path: encodeURIComponent(tenant), // теперь относительный
    children: Array.from(controlMap.entries()).map(([control, types]) => ({
      key: `/${encodeURIComponent(tenant)}/${encodeURIComponent(control)}`,
      label: control,
      path: encodeURIComponent(control), // относительный
      children: Array.from(types).map((type) => ({
        key: `/${encodeURIComponent(tenant)}/${encodeURIComponent(control)}/${encodeURIComponent(type)}`,
        label: type,
        path: encodeURIComponent(type), // относительный
      })),
    })),
  }));
}
