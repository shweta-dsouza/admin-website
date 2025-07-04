import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "../src/pages/Dashboard";
const Users = lazy(() => import("../src/pages/Users"));
const CreateUser = lazy(() => import("../src/pages/CreateUser"));
const Calendar = lazy(() => import("../src/pages/Calendar"));
const FAQ = lazy(() => import("../src/pages/FAQ"));
const BarChart = lazy(() => import("../src/pages/BarChart"));
const LineChart = lazy(() => import("../src/pages/LineChart"));
const PieChart = lazy(() => import("../src/pages/PieChart"));
const GeoChart = lazy(() => import("../src/pages/GeoChart"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
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