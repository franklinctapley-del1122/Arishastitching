/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { maroon: '#651f32', gold: '#c7a15a', cream: '#fbf7f0' }, fontFamily: { display: ['Playfair Display', 'serif'], body: ['Poppins', 'sans-serif'] } } },
  plugins: [],
};
