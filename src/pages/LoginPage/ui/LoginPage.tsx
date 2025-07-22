import { LoginForm } from "@features/Auth";
import { SplitScreenLayout } from "@shared/ui/SplitScreenLayout";

export const LoginPage = () => {
  return (
    <SplitScreenLayout
      mediaText="file portal"
      mediaImage="https://images.unsplash.com/photo-1551514930-79ff4363f1c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      mediaPosition="left"
      mainContent={<LoginForm />}
    />
  );
};
