import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const errorRouter: Array<RouteObject> = [
	{
		path: "/403",
		element: lazyLoad(React.lazy(() => import("@/page/error/403"))),
		meta: {
			requiresAuth: true,
			title: "403页面",
			key: "403",
		},
	},
	{
		path: "/404",
		element: lazyLoad(React.lazy(() => import("@/page/error/404"))),
		meta: {
			requiresAuth: true,
			title: "404页面",
			key: "404",
		},
	},
	{
		path: "/500",
		element: lazyLoad(React.lazy(() => import("@/page/error/500"))),
		meta: {
			requiresAuth: true,
			title: "500页面",
			key: "500",
		},
	},
];

export default errorRouter;
