import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.css"],
	theme: {
		screens: {
			xsm: "320px", // Extra Small devices (phones)
			sm: "480px", // Small devices (phones and small tablets)
			md: "768px", // Medium devices (tablets)
			lg: "1024px", // Large devices (desktops and laptops)
			xl: "1280px", // Extra Large devices (large desktops and high-resolution screens)
			xxl: "1536px", // Extra Extra Large devices (large desktops with high-resolution screens)
		},
		container: {
			center: true,
			padding: {
				default: "30px",
			},
		},

		extend: {
			fontFamily: {
				playfair: ["Playfair Display SC", "serif"],
				lato: ["Lato", "serif"],
				montserrat: ["Montserrat", "serif"],
				ebGaramond: ["EB Garamond", "serif"],
			},
		
				colors: {
					deep_blue: "#005C97",
					gold: "#FFD700",
					soft_green: "#50C878",
					soft_neutrals: "#F3F3F3",
					sunset_orange: "#FFA500",
					dark_gray: "#333333",
					clr_success: "#008000",
					clr_warning: "#FFD700",
					clr_error: "#FF0000",
					clr_info: "#1E90FF",
					clr_black: "#000000",
				},
			},
		
	},
	plugins: [],
};
