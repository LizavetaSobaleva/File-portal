import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
} from "react-router";
import { AnalyticsSales } from "@pages/AnalyticsSales";
import { AnalyticsTraffic } from "@pages/AnalyticsTraffic";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import navigationMenu from "@shared/data/navigationMenu.json";
import { MenuItem } from "@shared/types/navigation";
import { JSX } from "react";
import { AppLayout } from "@widgets/Layout";

const routeComponentMap: Record<string, JSX.Element> = {
  "/analytics/traffic": <AnalyticsTraffic />,
  "/analytics/sales": <AnalyticsSales />,
};

const generateRoutes = (menu: MenuItem[]): RouteObject[] => {
  return menu.map((item) => ({
    path: item.relativePath,
    element: item.children ? (
      <Outlet />
    ) : (
      routeComponentMap[item.relativePath] || <NotFoundPage />
    ),
    children: item.children ? generateRoutes(item.children) : undefined,
  }));
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      ...generateRoutes(navigationMenu),
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
