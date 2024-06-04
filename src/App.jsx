// import React from 'react'
// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline,Grid } from '@mui/material'
// import Header from '../src/Components/Header/Header'
// import List from '../src/Components/List/List'
// import Map from '../src/Components/Map/Map'
// //import PlaceDetails from './Components/PlaceDetails/PlaceDetails'

// const App = () => {
//   return (
//     <>
//     <ThemeProvider theme={theme}>
//     <CssBaseline/>
//     <Header/>
//     <Grid container spacing={3} style={{width:"100%"}}>
//       <Grid item xs={12} md={4}>
//         <List/>
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <Map/>
//       </Grid>

//     </Grid>
//    </ThemeProvider>
//     </>
//   )
// }

// export default App










import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import Header from '../src/Components/Header/Header';
import List from '../src/Components/List/List';
import Map from '../src/Components/Map/Map';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 400,
    },
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
   </ThemeProvider>
   </>
  );
};

export default App;
