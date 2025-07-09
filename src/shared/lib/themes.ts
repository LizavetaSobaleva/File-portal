import { Environment } from "@/shared/types/environment";
import { ThemeDefinition } from "../types/theme";
import { getAppEnv } from "../config/env";

const env: Environment = getAppEnv();

export const componentThemes: Record<Environment, ThemeDefinition> = {
  default: {
    primaryColor: "#78909C60",
    textColor: "#EBEBEB",
    iconColor: "#78909C",
  },
  dev: {
    primaryColor: "#4DB1A860",
    textColor: "#EBEBEB",
    iconColor: "#4DB1A8",
  },
  local: {
    primaryColor: "#E0615E60",
    textColor: "#EBEBEB",
    iconColor: "#E0615E",
  },
  test: {
    primaryColor: "#FADA6460",
    textColor: "#EBEBEB",
    iconColor: "#E1AD00",
  },
  preprod: {
    primaryColor: "#D74C7F60",
    textColor: "#EBEBEB",
    iconColor: "#BC1A61",
  },
  prod: {
    primaryColor: "#5264C660",
    textColor: "#EBEBEB",
    iconColor: "#5264C6",
  },
} as const;

export const getComponentTheme = () => componentThemes[env];
