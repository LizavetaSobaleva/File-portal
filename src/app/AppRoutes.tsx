import { JSX } from "react";
import { Routes, Route } from "react-router";
import { AnalyticsSales } from "@pages/AnalyticsSales";
import { AnalyticsTraffic } from "@pages/AnalyticsTraffic";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import navigationMenu from "@shared/data/navigationMenu.json";
import { MenuItem } from "@shared/types/navigation";

const routeComponentMap: Record<string, JSX.Element> = {
  "/analytics/traffic": <AnalyticsTraffic />,
  "/analytics/sales": <AnalyticsSales />,
};

const generateRoutes = (menu: MenuItem[]): JSX.Element[] => {
  return menu.flatMap((item) => [
    <Route
      key={item.key}
      path={item.path}
      element={routeComponentMap[item.path] || <NotFoundPage />}
    />,
    ...(item.children ? generateRoutes(item.children) : []),
  ]);
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />

      {generateRoutes(navigationMenu)}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
