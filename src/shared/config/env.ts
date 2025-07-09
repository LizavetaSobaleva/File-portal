import { Environment } from "../types/environment";

export const getAppEnv = (): Environment => {
  return (import.meta.env.VITE_APP_ENV as Environment) || "default";
};
