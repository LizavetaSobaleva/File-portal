import { Environment } from "./environment";

declare global {
  interface Window {
    _env_: {
      GENERATE_SOURCEMAP: string;
      PORT: string;
      REACT_APP_ENVIRONMENT_NAME: Environment;
      REACT_APP_BACKEND_URL: string;
      REACT_APP_HOST: string;
    };
  }
}
