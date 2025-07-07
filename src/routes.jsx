import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/Dashboard";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Users = lazy(() => import("./pages/Users"));
const CreateUser = lazy(() => import("./pages/CreateUser"));
const Calendar = lazy(() => import("./pages/Calendar"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BarChart = lazy(() => import("./pages/BarChart"));
const LineChart = lazy(() => import("./pages/LineChart"));
const PieChart = lazy(() => import("./pages/PieChart"));
const GeoChart = lazy(() => import("./pages/GeoChart"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        Component: Dashboard
      },
      {
        path: "/users",
        Component: Users
      },
      {
        path: "/createUser",
        Component: CreateUser
      },
      {
        path: "/calendar",
        Component: Calendar
      },
      {
        path: "/FAQ",
        Component: FAQ
      },
      {
        path: "/barChart",
        Component: BarChart
      },
      {
        path: "/lineChart",
        Component: LineChart
      },
      {
        path: "/pieChart",
        Component: PieChart
      },
      {
        path: "/geoChart",
        Component: GeoChart
      },
    ]
  }
]);