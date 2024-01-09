import React, { Suspense } from "react";
import { Spin } from "antd";

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
