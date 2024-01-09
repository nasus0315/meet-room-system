export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: false | undefined; // 更新这里的类型
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
