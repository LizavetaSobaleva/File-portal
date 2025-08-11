import { Menu as AntMenu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuComponentProps {
  theme: "light" | "dark";
  items: MenuItem[];
}

export const Menu: React.FC<MenuComponentProps> = ({
  theme = "light",
  items,
}) => {
  return <AntMenu mode="inline" theme={theme} items={items} />;
};
