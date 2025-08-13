import { Layout } from "antd";
import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { Menu } from "@shared/ui/Menu";
import { InformationBanner } from "@widgets/InformationBanner";
import { UserCard } from "@widgets/UserCard";
import navigationMenu from "@shared/data/navigationMenu.json";
import { MenuItem } from "@shared/types/navigation";

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const userName = "User Name";
  const userAvatarUrl = undefined;

  // Оптимизированная функция преобразования
  const convertMenuItems = useCallback(
    (items: MenuItem[]): MenuItem[] =>
      items.map((item) => {
        const newItem = { ...item };

        if (newItem.children) {
          newItem.children = convertMenuItems(newItem.children);
        } else {
          newItem.onClick = () =>
            newItem.absolutePath && navigate(newItem.absolutePath);
        }

        return newItem;
      }),
    [navigate]
  );

  // Мемоизация результирующих элементов меню
  const menuItems = useMemo(
    () => convertMenuItems(navigationMenu),
    [convertMenuItems, navigationMenu]
  );

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      theme="dark"
      width={256}
      collapsedWidth={80}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#001529",
        }}
      >
        <div style={styles.logo}>{collapsed ? "L" : "LOGO"}</div>

        <UserCard
          name={userName}
          userAvatarUrl={userAvatarUrl}
          collapsed={collapsed}
        />

        <div style={styles.menuContainer}>
          <Menu theme="dark" items={menuItems} />
        </div>

        <InformationBanner collapsed={collapsed} />
      </div>
    </Sider>
  );
};

const styles = {
  logo: {
    padding: "20px 12px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    fontSize: "16px",
    fontWeight: 600,
    color: "white",
    textAlign: "center" as const,
  },
  menuContainer: {
    flex: 1,
    overflowY: "auto" as const,
    padding: "8px 0",
  },
};
