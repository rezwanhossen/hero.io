import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import App from "../pages/Apps/App";
import Installation from "../pages/Installation/Installation";
import CardDetails from "../components/CardDetails/CardDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: App,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/appsData.json"),
        Component: CardDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json"),
        Component: Installation,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
