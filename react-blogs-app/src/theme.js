import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#B1B1B1'
      },
      icons: {
        main: '#B2B2B2'
      },
      // text: {
      //   primary: {
      //     main: '#fff'
      //   },
      //   secondary: {
      //     main: '#fff'
      //   }
      // },
      background: {
        default: "#424242",
        paper: '#303030' //'#424242'
      }
    },
    elevation: '7',
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    }
  });


export const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#fff'
      },
      icons: {
        main: '#454444'
      },
    //   background: {
    //     default: "#303030",
    //     paper: '#424242'
    //   }
    },
    text: {
      primary: {
        main: '#718096'
      },
      secondary: {
        main: '#4A5568'
      },
    },
    icons: '#454444',
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    }
  });
  