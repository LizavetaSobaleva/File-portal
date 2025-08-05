import { Alert as AntAlert, AlertProps } from "antd";

export const Alert: React.FC<AlertProps> = (props) => {
  return <AntAlert {...props} />;
};
