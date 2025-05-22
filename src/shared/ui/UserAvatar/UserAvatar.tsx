import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getComponentTheme } from "@/shared/lib/themes";

interface UserAvatarProps {
  userAvatarUrl?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ userAvatarUrl }) => {
  const theme = getComponentTheme();

  return userAvatarUrl ? (
    <Avatar
      src={userAvatarUrl}
      shape="square"
      size="large"
      style={{ flexShrink: 0 }}
    />
  ) : (
    <Avatar
      shape="square"
      size="large"
      icon={<UserOutlined />}
      style={{ backgroundColor: theme.iconColor, flexShrink: 0 }}
    />
  );
};
