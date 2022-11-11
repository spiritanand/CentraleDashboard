module.exports = {
  mode   : "jit",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
	fontFamily: {
	  display: ['Ubuntu', 'sans-serif'],
	  body: ['Ubuntu', 'sans-serif'],
	},
	extend: {
	  fontSize: {
		14: '14px',
	  },
	  backgroundColor: {
		'main-bg': '#FAFBFB',
		'main-dark-bg': '#20232A',
		'secondary-dark-bg': '#33373E',
		'light-gray': '#F7F7F7',
		'half-transparent': 'rgba(0, 0, 0, 0.5)',
	  },
	  borderWidth: {
		1: '1px',
	  },
	  borderColor: {
		color: 'rgba(0, 0, 0, 0.1)',
	  },
	  width: {
		400: '400px',
		760: '760px',
		780: '780px',
		800: '800px',
		1000: '1000px',
		1200: '1200px',
		1400: '1400px',
	  },
	  height: {
		80: '80px',
	  },
	  minHeight: {
		590: '590px',
	  },
	  backgroundImage: {
		'hero-pattern':
		  "url('https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80')",
	  },
	},
  },
  plugins: [],
};