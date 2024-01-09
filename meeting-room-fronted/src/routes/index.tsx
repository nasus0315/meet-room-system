import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "./interface/index";
import Login from "@/page/login/index";

const metaRouters: Record<string, any> = import.meta.glob("./modules/*.tsx", { eager: true });
console.log(metaRouters);

// * 处理路由
const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach((item) => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

console.log(routerArray);


const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login",
		},
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
];

const Router = () => useRoutes(rootRouter);

export default Router;
