import React from "react";
import { InfoCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import style from "./InformationBanner.module.css";
import { getComponentTheme } from "@/shared/lib/themes";

const { Text } = Typography;

interface InformationBannerProps {
  collapsed: boolean;
}

export const InformationBanner: React.FC<InformationBannerProps> = ({
  collapsed,
}) => {
  const theme = getComponentTheme();

  return (
    <div className={style.wrapper} style={{ background: theme.primaryColor }}>
      <InfoCircleFilled
        className={style.icon}
        style={{ color: theme.iconColor }}
      />
      {!collapsed && (
        <Text className={style.text} style={{ color: theme.textColor }}>
          Information
        </Text>
      )}
    </div>
  );
};
