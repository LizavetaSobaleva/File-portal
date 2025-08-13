export type MenuItem = {
  key: string;
  label: string;
  relativePath: string;
  absolutePath: string;
  children?: MenuItem[];
};
