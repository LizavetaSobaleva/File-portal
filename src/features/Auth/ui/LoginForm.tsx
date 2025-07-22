import { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { Form } from "@shared/ui/Form";
import { Title } from "@shared/ui/Typography";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onFinish = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <div style={{ width: 300 }}>
      <Title level={2}>Log in to Portal</Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input placeholder="Email" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            prefix={<LockOutlined />}
            suffix={
              showPassword ? (
                <EyeTwoTone onClick={togglePasswordVisibility} />
              ) : (
                <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
              )
            }
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
