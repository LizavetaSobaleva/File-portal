import { Layout, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu } from "@shared/ui/Menu";
import { InformationBanner } from "@widgets/InformationBanner";
import { UserCard } from "@widgets/UserCard";
import navigationMenu from "@shared/data/navigationMenu.json";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface NavigationItem {
  key: string;
  label: string;
  path?: string;
  children?: NavigationItem[];
}

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const userName = "User Name";
  const userAvatarUrl = undefined;

  const convertMenuItems = (items: NavigationItem[]): MenuItem[] =>
    items.map((item) => ({
      key: item.key,
      label: item.label,
      ...(item.children
        ? { children: convertMenuItems(item.children) }
        : {
            onClick: () => {
              if (item.path) {
                navigate(item.path);
              }
            },
          }),
    }));

  const menuItems = convertMenuItems(navigationMenu);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            padding: "20px 12px",
            borderBottom: "1px solid #d0dde990",
            fontSize: "16px",
            fontWeight: "300",
            color: "white",
          }}
        >
          LOGO
        </div>

        <UserCard
          name={userName}
          userAvatarUrl={userAvatarUrl}
          collapsed={collapsed}
        />

        <div style={{ flex: 1, overflowY: "auto" }}>
          <Menu items={menuItems} />
        </div>

        <InformationBanner collapsed={collapsed} />
      </div>
    </Sider>
  );
};
