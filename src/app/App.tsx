import "./App.css";
import { BrowserRouter, useLocation } from "react-router";
import { AppRoutes } from "@app/AppRoutes";
import { AppLayout } from "@widgets/Layout";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return isLoginPage ? (
    <AppRoutes />
  ) : (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
