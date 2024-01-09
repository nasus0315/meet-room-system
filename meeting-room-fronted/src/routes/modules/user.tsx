import React from "react";
import LayoutParent from "@/layouts";
import lazyLoad from "../utils/lazyLoad";
import { RouteObject } from "../interface";

const userRouter: Array<RouteObject> = [
	{
		element: <LayoutParent />,
		children: [
			{
				path: "/user/index",
				element: lazyLoad(
					React.lazy(() => import("@/page/user/index"))
				),
				meta: {
					requiresAuth: true,
					title: "用户管理",
					key: "user",
				},
			},
		],
	},
];

export default userRouter;
