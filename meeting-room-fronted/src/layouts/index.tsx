import MenuIndex from "./components/Menu/index";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const LayoutParent = () => {
	const { Content } = Layout;
	return (
		<section className="flex flex-row h-full">
			<MenuIndex></MenuIndex>
			<Layout className="px-4 py-4">
				<Content className="bg-white">
					<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};

export default LayoutParent;
