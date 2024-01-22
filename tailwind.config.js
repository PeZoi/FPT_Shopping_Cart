/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#32a6db",
				bgPrimary: "#cae8f6",
			},
		},
	},
	plugins: [],
};
