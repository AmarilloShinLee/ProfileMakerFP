import './App.css';

import {Routes, Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import CredentialLayout from './pages/Credential/Credential';

import { ThemeProvider, createTheme } from '@mui/material';
import Login from './pages/Credential/Login';
import Register from './pages/Credential/Register';

const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Arial',
          fontWeight: 'bold',
        }
      }
    }
  },
  palette: {
    common: {
      white: "#F4F4F4",
      black: "#29252A"
    },
    primary: {
      main: "#E83636",
      contrastText: "#F4F4F4"
    },
    secondary: {
      main: "#EED8B6",
      contrastText: "#29252A"
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/credential' element={<CredentialLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
