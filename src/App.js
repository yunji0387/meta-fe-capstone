import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './scenes/Home';
import Delivery from './scenes/Delivery';
import PickUp from './scenes/PickUp';
import Menu from './scenes/Menu';
import Reservation from './scenes/Reservation';
import About from './scenes/About';
import Notifications from './scenes/Notifications';
import Profile from './scenes/Profile';
import Settings from './scenes/Settings';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#495E57',
      dark: '#242e2b',
      mainText: '#495E57',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ababab',
      main: '#8c8c8c',
      dark: '#636363',
      contrastText: '#fff',
    },
  },
  typography: {
    titleText: 'Permanent Marker, cursive',
    contentText: 'Handlee, cursive',
  },
});

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar theme={theme} />
          <main>
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route exact path="/" element={<Home theme={theme} />} />
                <Route path="/delivery" element={<Delivery theme={theme} />} />
                <Route path="/pickup" element={<PickUp theme={theme} />} />
                <Route path="/menu" element={<Menu theme={theme} />} />
                <Route path="/reservation" element={<Reservation theme={theme} />} />
                <Route path="/about" element={<About theme={theme} />} />
                <Route path="/notifications" element={<Notifications theme={theme} />} />
                <Route path="/profile" element={<Profile theme={theme} />} />
                <Route path="/settings" element={<Settings theme={theme} />} />
              </Routes>
            </Box>
          </main>
          <Footer />
        </ThemeProvider>
      </HashRouter>
      {/* <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar theme={theme} />
          <main>
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/delivery" element={<Delivery theme={theme} />} />
                <Route path="/pickup" element={<PickUp theme={theme} />} />
                <Route path="/menu" element={<Menu theme={theme} />} />
                <Route path="/reservation" element={<Reservation theme={theme} />} />
                <Route path="/about" element={<About theme={theme} />} />
                <Route path="/notifications" element={<Notifications theme={theme} />} />
                <Route path="/profile" element={<Profile theme={theme} />} />
                <Route path="/settings" element={<Settings theme={theme} />} />
              </Routes>
            </Box>
          </main>
          <Footer />
        </ThemeProvider>
      </BrowserRouter> */}
    </div>
  );
}

export default App;