import { Layout } from "antd";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";
const { Content } = Layout;

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: "12px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};
