import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#495E57',
      dark: '#002884',
      background: '#eee',
      contrastMain: '#fff',
      mainText: '#495E57',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar theme={theme} />
          <main>
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/pickup" element={<PickUp />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/about" element={<About />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Box>
          </main>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
