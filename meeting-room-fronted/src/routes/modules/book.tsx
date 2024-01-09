import React from "react";
import LayoutParent from "@/layouts";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const bookRouter: Array<RouteObject> = [
	{
		element: <LayoutParent />,
		children: [
			{
				path: "/book/index",
				element: lazyLoad(React.lazy(() => import("@/page/book/index"))),
				meta: {
					requiresAuth: true,
					title: "预定管理",
					key: "book",
				},
			},
		],
	},
];

export default bookRouter;
