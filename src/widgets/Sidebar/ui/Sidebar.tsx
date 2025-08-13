import { Layout } from "antd";
import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { Menu } from "@shared/ui/Menu";
import { InformationBanner } from "@widgets/InformationBanner";
import { UserCard } from "@widgets/UserCard";
import navigationMenu from "@shared/data/navigationMenu.json";
import { MenuItem } from "@shared/types/navigation";
import styles from "./Sidebar.module.css";

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const userName = "User Name";
  const userAvatarUrl = undefined;

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
      className={styles.sider}
    >
      <div className={styles.container}>
        <div
          className={`${styles.logo} ${collapsed ? styles.logoCollapsed : ""}`}
        >
          {collapsed ? "L" : "LOGO"}
        </div>

        <div className={styles.userCard}>
          <UserCard
            name={userName}
            userAvatarUrl={userAvatarUrl}
            collapsed={collapsed}
          />
        </div>

        <div className={styles.menuContainer}>
          <Menu items={menuItems} theme="dark" />
        </div>

        <div className={styles.banner}>
          <InformationBanner collapsed={collapsed} />
        </div>
      </div>
    </Sider>
  );
};
