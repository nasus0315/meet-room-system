import React from "react";
import LayoutParent from "@/layouts";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const countRouter: Array<RouteObject> = [
	{
		element: <LayoutParent />,
		children: [
			{
				path: "/count/index",
				element: lazyLoad(React.lazy(() => import("@/page/count/index"))),
				meta: {
					requiresAuth: true,
					title: "统计",
					key: "count",
				},
			},
		],
	},
];

export default countRouter;
