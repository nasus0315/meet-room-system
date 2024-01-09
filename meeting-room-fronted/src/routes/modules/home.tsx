import React from "react";
import LayoutParent from "@/layouts";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutParent />,
		children: [
			{
				path: "/home/index",
				element: lazyLoad(
					React.lazy(() => import("@/page/home/index"))
				),
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home",
				},
			},
		],
	},
];

export default homeRouter;
