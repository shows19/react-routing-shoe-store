import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './components/Products';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import { ThemeProvider, createMuiTheme, makeStyles, Grid } from '@material-ui/core';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { NotFound } from './components/NotFound';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <main className={classes.content}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/products" element={<Products />}>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/:uuid" element={<ProductDetails />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
                </Grid>
              </Grid>
            </main>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
