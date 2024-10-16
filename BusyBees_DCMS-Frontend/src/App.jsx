// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BabyDetails from './pages/BabyDetails';
import BabySitterDetails from './pages/BabySitterDetails';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/babyDetails" element={<BabyDetails />} />
            <Route path="/babySitterDetails" element={<BabySitterDetails />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;