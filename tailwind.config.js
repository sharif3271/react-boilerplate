module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#62A3FF',
        titleColor: '#061F62',
        titleColorLight: '#8691A7',
        titleColorUltraLight: '#677176',
        black2: '#616175',
        black3: '#0E0E0E',
        black4: '#1C4363',
        white2: '#FCFCFC',
        green1: '#88B550'
      },
      borderWidth: {
        0.5: '1px'
      },
      width: {
        '0.25': '1px',
        '0.5': '2px',
      },
      height: {
        '87.5': '350px',
      },
      lineHeight: {
        '14': '54px',
      },
      minWidth: {
        '1/2': '50%',
        'sm': '320px',
      },
      boxShadow: {
        light: '0 1px 5px 0 rgb(0 0 0 / 13%), 0 1px 7px 0 rgb(0 0 0 / 10%)',
        ultraLight: '0 1px 5px 0 rgb(0 0 0 / 5%)',
      },
    },
  },
};
