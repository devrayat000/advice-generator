const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(193, 38%, 86%)',
					neon: 'hsl(150, 100%, 66%)'
				},
				neutral: {
					'grayish-blue': 'hsl(217, 19%, 38%)',
					'dark-grayish-blue': 'hsl(217, 19%, 24%)',
					'dark-blue': 'hsl(218, 23%, 16%)'
				}
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				quote: '1.75rem'
			},
			boxShadow: {
				square: '0 0 40px 0 rgba(0, 0, 0, 0.3)'
			}
		}
	},

	plugins: []
};

module.exports = config;
