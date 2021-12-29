module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'tc-purple-a': "#7209B7",
      'tc-purple-b': '#560BAD',
      'tc-purple-c': '#480CAB',
      'tc-purple-d': '#3A0CA3',
      'tc-blue-a' : '#3F37C9',
      'tc-blue-b' : '#4361EE',
      'tc-blue-c' : '#4895EF',
      'tc-blue-d' : '#4CC9F0',
      'white': '#ffffff',
      'grey': '#C4C4C4',
      'black': '#000000',
      'tc-back': '#F7F7F7',
      'tc-gradient': 'rgba(76, 201, 240, 0,22)'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'body': ['"Roboto"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'btn' : '0px 6px 4px rgba(58, 12, 163, 0.2)',
        'btn2': '0px 5px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
