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

  return Array.from(tenants.entries()).map(([tenant, controlMap]) => {
    const tenantPath = `/${encodeURIComponent(tenant)}`;
    return {
      key: tenantPath,
      label: tenant,
      path: tenantPath,
      children: Array.from(controlMap.entries()).map(([control, types]) => {
        const controlPath = `${tenantPath}/${encodeURIComponent(control)}`;
        return {
          key: controlPath,
          label: control,
          path: controlPath,
          children: Array.from(types).map((type) => {
            const typePath = `${controlPath}/${encodeURIComponent(type)}`;
            return {
              key: typePath,
              label: type,
              path: typePath,
            };
          }),
        };
      }),
    };
  });
}
