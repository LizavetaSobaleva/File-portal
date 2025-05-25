import { Tooltip } from "antd";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import styles from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  collapsed: boolean;
  userAvatarUrl?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  collapsed,
  userAvatarUrl,
}) => {
  return (
    <div className={`${styles.card} ${collapsed ? styles.collapsed : ""}`}>
      <UserAvatar userAvatarUrl={userAvatarUrl} />
      {!collapsed && (
        <Tooltip title={name} placement="right">
          <span className={styles.name}>{name}</span>
        </Tooltip>
      )}
    </div>
  );
};
