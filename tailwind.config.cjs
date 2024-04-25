/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
  
	theme: {
	  extend: {
		colors: {
		  '4E2196': '#4E2196',
		  'D259FD': '#D259FD',
		  'F95CD7': '#F95CD7',
		  'FFD375': '#FFD375',
		  'FCBC36' : '#FCBC36',
		  '473664' : '#473664',
		  'yelloBtn' : '#FFBC32',
		  'AB7C1C' :'#AB7C1C',
		  'regal-blue': '#243c5a',
		  '5200FF':'#5200FF',
		  'F1CA6D':'#F1CA6D',
		  'DC58BF':'#DC58BF'
		},
		fontFamily:{
		  'Lilita-One':'Lilita One'
		}
	  },
	},
  
	plugins: [],
  };
  
  module.exports = config;
  