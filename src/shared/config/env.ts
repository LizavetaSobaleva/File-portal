type Environment = NonNullable<Window["_env_"]["REACT_APP_ENVIRONMENT_NAME"]>;

const fallbackEnv: Window["_env_"] = {
  GENERATE_SOURCEMAP: "",
  PORT: "",
  REACT_APP_ENVIRONMENT_NAME: "default",
  REACT_APP_BACKEND_URL: "",
  REACT_APP_HOST: "",
};

export const env = Object.freeze({
  ...fallbackEnv,
  ...(window._env_ || {}),
});

export const GENERATE_SOURCEMAP = env.GENERATE_SOURCEMAP;
export const PORT = env.PORT;
export const ENVIRONMENT_NAME = env.REACT_APP_ENVIRONMENT_NAME as Environment;
export const BACKEND_URL = env.REACT_APP_BACKEND_URL;
export const HOST = env.REACT_APP_HOST;
