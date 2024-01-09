import React from "react";
import LayoutParent from "@/layouts";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const roomRouter: Array<RouteObject> = [
	{
		element: <LayoutParent />,
		children: [
			{
				path: "/room/index",
				element: lazyLoad(
					React.lazy(() => import("@/page/room/index"))
				),
				meta: {
					requiresAuth: true,
					title: "会议室管理",
					key: "room",
				},
			},
		],
	},
];

export default roomRouter;
