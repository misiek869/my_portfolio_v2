export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
			},
			screens: {
				'3xl': '121rem', // 1920px
			},
		},
	},
	plugins: [],
}
