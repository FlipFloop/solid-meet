import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./screens/main")),
  },
  {
    path: "",
    component: lazy(() => import("./screens/main/Home")),
  },
  {
    path: "/:meetCode",
    component: lazy(() => import("./screens/Meeting")),
  },
];
