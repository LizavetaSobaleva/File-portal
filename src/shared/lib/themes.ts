import { Environment } from "@/shared/types/environment";
import { ThemeDefinition } from "@/shared/types/theme";
import { ENVIRONMENT_NAME } from "@/shared/config/env";

export const componentThemes: Record<Environment, ThemeDefinition> = {
  DEFAULT: {
    primaryColor: "#78909C60",
    textColor: "#EBEBEB",
    iconColor: "#78909C",
  },
  DEV: {
    primaryColor: "#4DB1A860",
    textColor: "#EBEBEB",
    iconColor: "#4DB1A8",
  },
  LOCAL: {
    primaryColor: "#E0615E60",
    textColor: "#EBEBEB",
    iconColor: "#E0615E",
  },
  TEST: {
    primaryColor: "#FADA6460",
    textColor: "#EBEBEB",
    iconColor: "#E1AD00",
  },
  PREPROD: {
    primaryColor: "#D74C7F60",
    textColor: "#EBEBEB",
    iconColor: "#BC1A61",
  },
  PROD: {
    primaryColor: "#5264C660",
    textColor: "#EBEBEB",
    iconColor: "#5264C6",
  },
} as const;

export const getComponentTheme = (): ThemeDefinition => {
  const env = ENVIRONMENT_NAME as Environment;
  return componentThemes[env] || componentThemes.DEFAULT;
};
