import { Menu as AntMenu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuComponentProps {
  items: MenuItem[];
}

export const Menu: React.FC<MenuComponentProps> = ({ items }) => {
  return <AntMenu mode="inline" theme="dark" items={items} />;
};
