import { AppLayout, DashboardLayout } from "@app/layouts";
import { Login } from "@/auth/login";
import { Dashboard } from "@/dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
