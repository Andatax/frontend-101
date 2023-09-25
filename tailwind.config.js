/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/*.html"],
	theme: {
		screens: {
			sm: "375px",
			md: "890px",
			lg: "1300px",
		},
		extend: {
			variants: {},
		},
		plugins: [],
	},
};
