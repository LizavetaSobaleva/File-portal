import { MenuItem } from "@shared/types/navigation";

type Job = {
  tenant: string;
  controls: string[];
  type: string;
};

export function buildMenuTree(jobs: Job[]): MenuItem[] {
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
    // Кодируем значения один раз для tenant
    const encodedTenant = encodeURIComponent(tenant);
    const tenantPath = `/${encodedTenant}`;

    return {
      key: tenantPath,
      label: tenant,
      relativePath: encodedTenant,
      absolutePath: tenantPath,
      children: Array.from(controlMap.entries()).map(([control, types]) => {
        // Кодируем значения один раз для control
        const encodedControl = encodeURIComponent(control);
        const controlPath = `${tenantPath}/${encodedControl}`;

        return {
          key: controlPath,
          label: control,
          relativePath: encodedControl,
          absolutePath: controlPath,
          children: Array.from(types).map((type) => {
            // Кодируем значения один раз для type
            const encodedType = encodeURIComponent(type);

            return {
              key: `${controlPath}/${encodedType}`,
              label: type,
              relativePath: encodedType,
              absolutePath: `${controlPath}/${encodedType}`,
            };
          }),
        };
      }),
    };
  });
}
