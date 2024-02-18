/** @type {import('tailwindcss').Config} */
export default {
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['black']
	}
};
