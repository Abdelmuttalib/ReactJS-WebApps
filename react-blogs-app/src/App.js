import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Pages/Home';
import { Paper, Switch } from '@material-ui/core';
import { darkTheme, lightTheme } from './theme';
import BlogPage from './components/BlogPage';
import './index.css';



const App = () => {


  const [dark, setDark] = useState(false);


  const theme = dark ? darkTheme : lightTheme;

  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: 'light',
  //     primary: {
  //       main: '#2D3748'
  //     },
  //     secondary: {
  //       main: '#718096'
  //     },
  //     try: {
  //       main: '#4A5568'
  //     },
  //     icons: {
  //       main: '#454444'
  //     },
  //     background: {
  //       default: "#303030",
  //       paper: '#424242'
  //     }
  //   },
  //   typography: {
  //     fontFamily: [
  //       'Inter',
  //       'sans-serif',
  //     ].join(','),
  //   }
  // });
  // const lightTheme = createMuiTheme({
  //   palette: {
  //     type: 'light',
  //     primary: {
  //       main: '#2D3748'
  //     },
  //     secondary: {
  //       main: '#718096'
  //     },
  //     try: {
  //       main: '#4A5568'
  //     },
  //     icons: {
  //       main: '#454444'
  //     },
  //     background: {
  //       default: "#303030",
  //       paper: '#424242'
  //     }
  //   },
  //   typography: {
  //     fontFamily: [
  //       'Inter',
  //       'sans-serif',
  //     ].join(','),
  //   }
  // });
  


  // const darkTheme = createMuiTheme({
    
  //   common: '#fff',
  //   palette: {
  //     type: 'dark',
  //     colors: {
  //       icon: '#fff',
  //       searchBar: '#fff',
  //       darkGray: '#fff',
  //       gray: '#fff',
  //       lightGray: '#fff'
  //     }
  //   },
  //   typography: {
  //     fontFamily: [
  //       'Inter',
  //       'sans-serif',
  //     ].join(','),
  //   }
  // });
  
  // const lightTheme = createMuiTheme({
  //   common: '#000',
  //   palette: {
  //     type: 'light',
  //     colors: {
  //       icon: '#454444',
  //       headSection: '#FBFBFC',
  //       darkBlue: '#2D3748',
  //       white: '#fff',
  //       darkerWhite: '#F7FAFC;',
  //       darkGray: '#4A5568',
  //       gray: '#4A5568',
  //       lightGray: '#718096;'
  //     }
  //   },
  //   typography: {
  //     fontFamily: [
  //       'Inter',
  //       'sans-serif',
  //     ].join(','),
  //   }
  // });
  

    return (
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square>
          <Switch checked={dark} onChange={() => {
            setDark(!dark);
            console.log("SU: ");
            console.log(dark);
          }}/>
          <Home />
          {/* <BlogPage /> */}
          </Paper>
      </ThemeProvider>
    )
}

export default App;