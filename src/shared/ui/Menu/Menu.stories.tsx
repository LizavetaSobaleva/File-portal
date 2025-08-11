import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MailOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const meta: Meta<typeof Menu> = {
  title: "shared/ui/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

const basicItems: MenuItem[] = [
  { key: "1", label: "Home" },
  { key: "2", label: "About us" },
  { key: "3", label: "Contacts" },
];

const itemsWithIcons: MenuItem[] = [
  { key: "1", label: "Home", icon: <HomeOutlined /> },
  { key: "2", label: "Profile", icon: <UserOutlined /> },
  { key: "3", label: "Settings", icon: <SettingOutlined /> },
];

const nestedItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: "users",
    label: "Users",
    icon: <UserOutlined />,
    children: [
      { key: "users-list", label: "User list" },
      { key: "users-roles", label: "Roles" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingOutlined />,
    children: [
      { key: "settings-general", label: "General" },
      {
        key: "notifications",
        label: "Notifications",
        children: [
          {
            key: "notifications-email",
            label: "Email",
            icon: <MailOutlined />,
          },
          { key: "notifications-sms", label: "SMS" },
        ],
      },
    ],
  },
];

const disabledItems: MenuItem[] = [
  { key: "1", label: "Active item" },
  { key: "2", label: "Disabled item", disabled: true },
  { key: "3", label: "Another active item" },
];

export const Primary: Story = {
  args: {
    items: basicItems,
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    items: basicItems,
  },
};

export const WithIcons: Story = {
  name: "With icons",
  args: {
    items: itemsWithIcons,
  },
};

export const WithSubMenu: Story = {
  name: "With nested menus",
  args: {
    items: nestedItems,
  },
};

export const WithDisabledItems: Story = {
  name: "With disabled items",
  args: {
    items: disabledItems,
  },
};

export const WithLongLabels: Story = {
  name: "With long labels",
  args: {
    items: [
      {
        key: "1",
        label:
          "A very long menu item text that does not fit into a single line",
      },
      {
        key: "2",
        label: "Short",
      },
      {
        key: "3",
        label:
          "Another very long text with line breaks and additional information",
      },
    ],
  },
};
