/** @type {import('tailwindcss').Config} */
export default {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	content: [],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		// 解决antd和tailwindcss样式冲突
		preflight: false,
	},
};
