/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./docs/**/*.{html,js}"],
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
