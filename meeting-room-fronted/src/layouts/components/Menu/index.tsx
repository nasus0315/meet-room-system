import {
	HomeOutlined,
	UserOutlined,
	BookOutlined,
	PieChartOutlined,
	RobotOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

import { data } from "@/mock.json";

const MenuIndex = () => {
	type MenuItem = Required<MenuProps>["items"][number];
	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	};

	// 获取图标
	const getIcon = (iconName: string): React.ReactNode => {
		switch (iconName) {
			case "home":
				return <HomeOutlined />;
			case "room":
				return <RobotOutlined />;
			case "book":
				return <BookOutlined />;
			case "user":
				return <UserOutlined />;
			case "count":
				return <PieChartOutlined />;
			default:
				return null;
		}
	};

	// 递归函数来处理菜单数据
	const createMenuItems = (data: any[]): MenuItem[] => {
		return data.map((item) => {
			return getItem(
				item.title,
				item.id.toString(),
				getIcon(item.icon),
				item.children ? createMenuItems(item.children) : undefined
			);
		});
	};
	const items = createMenuItems(data);
	return (
		<Menu
			style={{ width: 256, height: "100%" }}
			mode="inline"
			theme="dark"
			items={items}
		/>
	);
};

export default MenuIndex;
